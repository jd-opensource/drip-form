/*
 * 计算新的title
 * @Author: jiangxiaowei
 * @Date: 2022-01-18 20:49:16
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-03-11 11:02:32
 */
import { useState, useEffect, useMemo } from 'react'
import { typeCheck } from '@jdfed/utils'
import type { TitlePlacement, TitleUi } from '@jdfed/utils'

/**
 * title margin的基础数值，分别对应title在不同方位的布局
 */
const baseTitleMargin: Record<string, string[]> = {
  top: ['0', '0', '5px', '0'],
  right: ['0', '0', '0', '10px'],
  bottom: ['5px', '0', '0', '0'],
  left: ['0', '10px', '0', '0'],
}

/**
 * margin中index对应margin方向的映射
 */
const indexToMarginP = [
  'marginTop',
  'marginRight',
  'marginBottom',
  'marginLeft',
]

export interface MarginType {
  style: string
  stringArr: string[]
}

export function calcTitleMargin(
  titleUi: TitleUi,
  titlePlacement?: TitlePlacement
): MarginType {
  // 根据title布局确认基础margin，默认使用
  let marginRes: string[] = baseTitleMargin[titlePlacement || 'left']

  if (Object.hasOwnProperty.call(titleUi, 'margin')) {
    // 解析margin，并映射到数组对应字段，数组顺序与margin原书写顺序一致
    let tmpMargin = titleUi?.margin?.split(' ') || []
    tmpMargin = tmpMargin.filter((item: any) => !!item)

    if (tmpMargin.length === 1) {
      marginRes = marginRes.map(() => tmpMargin[0])
    } else if (tmpMargin.length === 2) {
      marginRes = marginRes.map((item, idx) => {
        return idx % 2 === 0 ? tmpMargin[0] : tmpMargin[1]
      })
    } else if (tmpMargin.length === 3) {
      marginRes = marginRes.map((item, idx) => {
        return idx === 3 ? tmpMargin[1] : tmpMargin[idx]
      })
    } else {
      marginRes = tmpMargin
    }
  }

  // 如果配置了marginRight等字段，则优先级更高，可覆盖base配置
  marginRes = marginRes.map((item, idx) => {
    const part = indexToMarginP[idx] as
      | 'marginTop'
      | 'marginRight'
      | 'marginBottom'
      | 'marginLeft'
    const hasPartMargin = Object.hasOwnProperty.call(titleUi, part)
    const value =
      hasPartMargin && titleUi !== null
        ? Object.hasOwnProperty.call(titleUi, part) &&
          titleUi[part] !== undefined
          ? titleUi[part]
          : item
        : item
    return Number.isNaN(Number(value)) ? `${value}` : `${value}px`
  })

  return {
    // 用于覆写style
    style: marginRes.join(' '),
    // 用于计算其他元素的宽度或padding
    stringArr: marginRes,
  }
}

export type TitleWidth = string | number

/**
 *
 * @param titleUi ui中的title字段
 * @param type ui的type类型
 * @returns
 */
const useTitle = (titleUi: TitleUi, type?: string): TitleUi => {
  // title的margin样式
  const [titleMargin, onChangeTitleMargin] = useState(() => {
    return calcTitleMargin(titleUi, titleUi?.placement)
  })
  useEffect(() => {
    onChangeTitleMargin(calcTitleMargin(titleUi, titleUi?.placement))
  }, [titleUi])

  // 标题宽度
  const titleWidth = useMemo(() => {
    if (type === 'object') return '100%'
    return typeCheck(titleUi?.width || 82) === 'Number'
      ? `${titleUi?.width || 82}px`
      : titleUi?.width || '82px'
  }, [titleUi?.width, type])
  return {
    ...titleUi,
    margin: titleMargin.style,
    width: titleWidth,
    marginTop: titleMargin.stringArr[0],
    marginRight: titleMargin.stringArr[1],
    marginBottom: titleMargin.stringArr[2],
    marginLeft: titleMargin.stringArr[3],
  }
}

export default useTitle
