import React, {
  PureComponent,
  CSSProperties,
  ReactNode,
  forwardRef,
  memo,
} from 'react'
import DripForm from '..'
import type { DripFormProps } from '../type'
import type { Theme } from '@jdfed/utils'
import dripAjv from '@jdfed/ajv'
const { registerAjv, loadAjvPlugins } = dripAjv

type State = {
  hasError: boolean
  errorTips: string
}

const ajv = registerAjv()
class ErrorBoundary extends PureComponent<
  DripFormProps & { formRef: React.Ref<any> },
  State
> {
  constructor(props: DripFormProps & { formRef: React.Ref<any> }) {
    super(props)
    const { uiComponents, unitedSchema, plugins } = props

    const initError = {
      error: false,
      tips: '发生错误，请联系管理员！',
    }

    // 读取默认主题
    const theme = unitedSchema?.theme || 'antd'

    // 首先确保主题包的正确
    if (!theme || !uiComponents[theme as Theme]) {
      initError.error = true
      initError.tips = '请确认导入的主题组件与uiSchema中配置的一致！'
    }

    this.state = {
      // 内部组件是否有错误
      hasError: initError.error,
      // 错误提示
      errorTips: initError.tips,
    }
    //加载外部ajv插件
    loadAjvPlugins(ajv, plugins)
  }

  static getDerivedStateFromError(): { hasError: true } {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: { componentStack: string }): void {
    // 错误上报
    console.error(error, info.componentStack)
  }

  render(): ReactNode {
    const style: CSSProperties = { color: 'red' }
    const { hasError, errorTips } = this.state

    return hasError ? (
      <div style={style}>{errorTips}</div>
    ) : (
      <DripForm {...this.props} ajv={ajv} ref={this.props.formRef} />
    )
  }
}

const DripFormContainer = forwardRef((props: DripFormProps, ref) => {
  return <ErrorBoundary formRef={ref} {...props} />
})

DripFormContainer.displayName = 'DripFormHoc'

export default memo(DripFormContainer)
