import { produce } from 'immer'
/*
 * Field表单onChange生成 hooks
 * 该hooks会自动根据
 * @Author: jiangxiaowei
 * @Date: 2020-05-20 20:31:51
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: yyyy-05-dd 15:10:43
 */

import moment, { Moment } from 'moment'
import useEventCallback from './useEventCallback'
import { useDebounceFn } from 'ahooks'
import { isEmpty, typeCheck } from '@jdfed/utils'
import type { GetKey } from '@jdfed/utils'
type FormatMomentDataProps = {
  value: string | [Moment, Moment]
  format: string
}

type HSLColor = {
  a?: number
  h: number
  l: number
  s: number
}

type RGBColor = {
  a?: number
  b: number
  g: number
  r: number
}

type Color = {
  value:
    | {
        source?: string
        hex: string
        hsl: HSLColor
        rgb: RGBColor
      }
    | string
}

/**
 * 格式化Moment类型数据
 * @param {array|string} value
 * @param {string} format 格式化模板
 * @returns {string|array}
 */
function formatMomentData({
  value,
  format,
}: FormatMomentDataProps): string | [string, string] {
  if (value) {
    if (Array.isArray(value)) {
      return [value[0].format(format), value[1].format(format)]
    } else {
      return moment(value).format(format)
    }
  }
  return value
}

/**
 * 格式化颜色选择器数据
 * @param {object|string} value 颜色选择器表单值
 */
function formatColor({ value }: Color): string {
  if (typeof value === 'object') {
    switch (value.source) {
      case 'rgb':
        return `rgba(${value?.rgb?.r || 0},${value?.rgb?.g || 0},${
          value?.rgb?.b || 0
        },${value?.rgb?.a || 1})`
      default:
        return value?.hex || '#ffffff'
    }
  }
  return value
}

/**
 * 格式化uploader数据
 */
// function formatUploader({ value }: { value: { fileList?: any } }) {
//   if (typeCheck(value) === 'Object') {
//     return value?.fileList || value
//   }
//   return value
// }

/**
 * 扁平化treeselect结构
 * @param options treeselect的options 非treeDataSimpleMode(简单)模式
 */
function loop(options: any[]): any[] {
  return options.reduce((prev: any[], cur: { children?: any[] }) => {
    if (cur.children) {
      const childrenArr = loop(cur.children)
      return prev.concat(childrenArr).concat(cur)
    }
    return prev.concat(cur)
  }, [])
}

/**
 * treeselect默认只保存当前选中的id。使用此方法将treeselect改成使用withPidDelimiter分隔符拼接的包括父级id的格式 类似 ‘0#1#2’
 * @param param0 {
 *  value 需要更改的初始值
 *  options treeselect非treeDataSimpleMode格式的数据
 *  withPidDelimiter 分隔符
 * }
 */
function formatWithPid({
  value,
  options,
  withPidDelimiter,
}: {
  value: any
  options: any[]
  withPidDelimiter: string
}) {
  const newOptions = loop(options)
  /**
   * 循环获取父元素id并合并当前id值
   * @param val 当前选择的id值
   * @param withPidValue 带父元素id的值 默认为空
   */

  const newValue = value.map((curVal: any) => {
    const loops = (val: any, withPidValue?: any): any => {
      const index = newOptions.findIndex((item: any) => item.value === val)
      if (index != -1) {
        const parentValue = newOptions[index].parentValue
        withPidValue = `${parentValue}${withPidDelimiter}${withPidValue || val}`
        return loops(parentValue, withPidValue)
      } else {
        return withPidValue
      }
    }
    const withPidValue = loops(curVal)
    return withPidValue
  })
  return newValue
}

/**
 * value格式化
 * @param param0 {
 *  value 表单值
 *  disabled_input 禁止输入的值
 * }
 */
function formatValue({
  value,
  disabled_input,
}: {
  value: any
  disabled_input?: string[]
}) {
  if (disabled_input) {
    const regStr = disabled_input.join('|')
    const regExp = new RegExp(regStr, 'g')
    if (regExp.test(value)) {
      return value.replace(regExp, '')
    }
  }
  return value
}

/**
 * 针对select+text表单项的format
 * @param value
 * @param subFieldKey
 * @param prevFieldData
 */
function formatSelectText({
  value,
  subFieldKey,
  prevFieldData,
}: {
  value: string | []
  subFieldKey: string
  prevFieldData: { [propName: string]: any }
}) {
  return Object.assign(
    { select: [], text: '' },
    typeCheck(prevFieldData) === 'Object' ? prevFieldData : {},
    { [subFieldKey]: value }
  )
}

const formatMap: {
  [propName: string]: (...args: any[]) => any
} = {
  isMoment: formatMomentData,
  isColor: formatColor,
  // 移除uploader组件的格式化处理，因为入参需要为 {file, fileList} 格式
  // isUploader: formatUploader,
  isWithPid: formatWithPid,
  isFormat: formatValue,
  isSelectText: formatSelectText,
}

/* 例子
import { useField } from 'hooks'
const myComponent = ({fieldKey,onChange})=>{
    const onchange = useField(fieldKey,onChange)
    <Input
        onChange={_onChange}
    />
}
*/

/**
 * @param {string} fieldKey 必填 表单change触发，更改formData的key值
 * @param {function} onChange 可选 表单触发change事件后的回调
 * @param {object} options 可选 表单字段特殊处理配置。注意：options中只能有一个字段的值是true。否则不会对特殊数据进行格式化
 * @param {func} dispatch 操作context
 */
type Dispatch = (arg0: {
  key?: string
  type: string
  [propName: string]: any
}) => void
type CustomFunc = ({
  val,
  dispatch,
  fieldKey,
  getKey,
  prevFieldData,
  // 注意目前只有select表单支持这个字段（看后续是否有场景其它表单也需要）
  fieldData,
}: {
  val: any
  dispatch: Dispatch
  getKey: GetKey
  fieldKey: string
  prevFieldData: any
  // 注意目前只有select表单支持这个字段（看后续是否有场景其它表单也需要）
  fieldData: any
}) => void
type SpecialFormatKeys = keyof typeof formatMap | 'isDelete'
type UseFieldR = (...args: any[]) => void
type Options = Partial<
  Record<SpecialFormatKeys, boolean> & {
    format: FormatMomentDataProps['format']
    [index: number]: any
    [propName: string]: any
  }
>
const useField = (
  {
    fieldKey,
    onChange,
    options = {},
    asyncValidate,
    prevFieldData,
    fieldData,
    getKey,
  }: {
    fieldKey: string
    getKey: GetKey
    onChange?: string | CustomFunc
    options?: Options
    asyncValidate?: {
      type: 'change' | 'click'
      fn: (arg0: any) => any
    }
    prevFieldData?: any
    fieldData?: any
  },
  dispatch: Dispatch
): UseFieldR => {
  // onChange 回调 debounce
  const { run } = useDebounceFn(
    (val, dispatch) => {
      if (onChange) {
        try {
          // 如果为函数，则直接执行
          if (typeof onChange === 'function') {
            onChange({
              val,
              dispatch,
              fieldKey,
              prevFieldData,
              fieldData,
              getKey,
            })
          } else {
            const onChangeFuc = new Function('props', onChange)
            onChangeFuc &&
              onChangeFuc({
                val,
                dispatch,
                fieldKey,
                prevFieldData,
                fieldData,
                getKey,
              })
          }
        } catch (error) {
          console.error('onChange函数体错误')
          console.error(error)
        }
      }

      if (asyncValidate && asyncValidate.type === 'change') {
        const asyncValidateResult = asyncValidate.fn(val)
        if (asyncValidateResult?.then) {
          asyncValidateResult.then((res: string): void => {
            if (res) {
              dispatch({
                type: 'setError',
                [fieldKey]: res,
              })
            } else {
              dispatch({
                type: 'deleteError',
                key: fieldKey,
              })
            }
          })
        } else {
          if (asyncValidateResult) {
            dispatch({
              type: 'setError',
              [fieldKey]: asyncValidateResult,
            })
          } else {
            dispatch({
              type: 'deleteError',
              key: fieldKey,
            })
          }
        }
      }
      // onChange && onChange(val,dispatch)
    },
    { wait: 300 }
  )
  return useEventCallback(
    (e) => {
      // 针对 babel-ui中的radio的checkbox模式和所有主题包的switch，由于获取不到正确的e.target，需要通过自身的fieldData进行修改
      // switch返回的e为true、false，因此在传入onChange时直接将fieldData取反
      let value = isEmpty(fieldData)
        ? e?.target
          ? e?.target?.value
          : e
        : fieldData
      //uploader内部修改不可变数据特殊处理
      if (options.draft) {
        value = produce(value, (draft: any) => draft)
      }
      // 判断当前传的options配置项是否需要特殊format处理
      const formatKeys = Object.keys(formatMap)
      const specialFormatKeys = Object.keys(options).filter(
        (item) => options[item] === true && formatKeys.includes(item)
      )
      if (specialFormatKeys.length === 1 && formatMap[specialFormatKeys[0]]) {
        value = formatMap[specialFormatKeys[0]]({
          value,
          ...options,
        })
      }
      // 删除formData中相应表单字段（fix：表单唯恐之后必填校验失效）
      // 删除dataSchema中相应default（fix: text默认值后续删除不自动添加 #C2020091124826）
      if (
        Object.prototype.hasOwnProperty.call(options, 'isDelete')
          ? options.isDelete
          : isEmpty(value)
      ) {
        dispatch({
          type: 'deleteFormData',
          key: fieldKey,
        })
        dispatch({
          type: 'setDataSchema',
          [`${getKey(fieldKey, 'dataSchema')}.default`]: '',
          isDelete: true,
        })
      } else {
        dispatch({
          type: 'setFormData',
          [fieldKey]: value,
        })
      }
      dispatch({
        type: 'setChecking',
        checking: true,
      })
      run(value, dispatch)
    },
    [dispatch, onChange, fieldKey]
  )
}

export default useField
