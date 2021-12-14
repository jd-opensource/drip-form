import React, { memo, useRef, useCallback } from 'react'
import DripFormGenerator from '@jdfed/form-generator'
import '@jdfed/form-generator/dist/index.css'
import schema from './schema'
import { parseHrefParam } from '@jdfed/utils'

const customComponent = () => {
  return <div>自定义组件</div>
}

const App = memo(() => {
  const generatorRef = useRef()

  /**
   * 自定义导出函数
   * @type {(function(*): void)|*}
   */
  const customExport = useCallback((rawCb) => {
    const params = parseHrefParam()

    // 如果url中的参数exportForIframe为true，则执行iframe外抛schema策略
    if (params.exportForIframe === 'true') {
      let parentUrl
      if (parent !== window) {
        try {
          parentUrl = parent.location.href
        } catch (e) {
          parentUrl = document.referrer
        }
      }

      if (parentUrl) {
        window.parent.postMessage(generatorRef.current, parentUrl)
      }
    } else {
      // 否则执行原有的导出
      rawCb()
    }
  }, [])

  return (
    <div>
      <DripFormGenerator
        ref={generatorRef}
        customComponents={[
          {
            icon: 'iconfont icon-cascader',
            styleSchema: [],
            unitedSchema: {
              type: 'string',
              title: '自定义组件',
              '$:customFirstLevelProp': '位于顶层的自定义组件属性',
              ui: {
                type: 'custom',
                theme: 'custom',
              },
            },
          },
        ]}
        theme={{
          custom: {
            theme: 'custom',
            custom: customComponent,
          },
        }}
        schema={schema}
        customExport={customExport}
      />
    </div>
  )
})

App.displayName = 'GeneratorApp'

export default App
