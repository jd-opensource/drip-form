import React, { memo } from 'react'
import BrowserOnly from '@docusaurus/BrowserOnly'
import DripFormGenerator from '@jdfed/form-generator'
import '@jdfed/form-generator/dist/index.css'
const customComponent = () => {
  return <div>自定义组件</div>
}

const App = memo(() => {
  return (
    <BrowserOnly>
      {() => {
        return (
          <DripFormGenerator
            customComponents={[
              {
                icon: 'iconfont icon-cascader',
                styleSchema: [],
                unitedSchema: {
                  type: 'string',
                  title: '自定义组件',
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
          />
        )
      }}
    </BrowserOnly>
  )
})

App.displayName = 'GeneratorApp'

export default App
