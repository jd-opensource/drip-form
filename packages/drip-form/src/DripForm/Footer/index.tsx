import React, { memo, useMemo, useCallback } from 'react'
import { produce } from 'immer'
import type { DripFormProps, Dispatch } from '../type'
import type { Map, Theme, UiSchema } from '@jdfed/utils'
import type { FC } from 'react'
import './index.styl'

const justifyContent = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
}

const Footer: FC<
  Pick<
    DripFormProps,
    'uiComponents' | 'onSubmit' | 'onCancel' | 'transform'
  > & {
    uiSchema: UiSchema
    globalTheme: Theme
    checking: boolean
    errors: Map
    formData: Map
    // 表单初始值
    initFormData: Map
    dispatch: Dispatch
  }
> = ({
  uiComponents,
  globalTheme,
  uiSchema,
  onSubmit,
  onCancel,
  transform,
  formData,
  checking,
  errors,
  dispatch,
  initFormData,
}) => {
  const Button = uiComponents[globalTheme]?.Button
  // 底部按钮容器样式
  const footerStyle = useMemo(() => {
    return {
      justifyContent:
        justifyContent[
          ((uiSchema?.footer as Map)?.justifyContent ||
            'right') as keyof typeof justifyContent
        ],
    }
  }, [uiSchema?.footer])
  //底部按钮的ui样式
  const footerProps = useMemo(() => {
    const { text: onOkText, ...onOkUi } = (uiSchema?.footer as Map)?.onOk || {}
    const { text: onCancelText, ...onCancelUi } =
      (uiSchema?.footer as Map)?.onCancel || {}
    return {
      onOk: {
        text: onOkText,
        ui: onOkUi,
      },
      onCancel: {
        text: onCancelText,
        ui: onCancelUi,
      },
    }
  }, [uiSchema?.footer])
  /**
   * 底部按钮点击事件
   * 1.'提交'和'取消'事件的回调函数，都会返回 {formData, checking, errors} 参数
   * 2.'取消'事件会将 formData 的数据初始化
   */
  const onFooterBtnClick = useCallback(
    (funcType) => {
      const cb = funcType === 'submit' ? onSubmit : onCancel
      cb &&
        cb({
          formData: produce(formData, (draft) => {
            transform && transform(draft)
          }),
          checking,
          errors,
        })

      if (funcType === 'cancel') {
        dispatch({
          type: 'setFormData',
          formData: initFormData,
        })
      }
    },
    [
      checking,
      dispatch,
      errors,
      formData,
      initFormData,
      onCancel,
      onSubmit,
      transform,
    ]
  )
  return (
    Button && (
      <div className={'drip-form_container--footer'} style={footerStyle}>
        {footerProps.onOk.text && (
          <Button
            {...footerProps.onOk.ui}
            {...((uiSchema?.footer as Map)?.margin && {
              style: {
                marginRight: (uiSchema?.footer as Map)?.margin,
              },
            })}
            onClick={onFooterBtnClick.bind(null, 'submit')}
            className="drip-form_button--onOK"
          >
            {footerProps.onOk.text}
          </Button>
        )}
        {footerProps.onCancel.text && (
          <Button
            {...footerProps.onCancel.ui}
            onClick={onFooterBtnClick.bind(null, 'cancel')}
          >
            {footerProps.onCancel.text}
          </Button>
        )}
      </div>
    )
  )
}

export default memo(Footer)
