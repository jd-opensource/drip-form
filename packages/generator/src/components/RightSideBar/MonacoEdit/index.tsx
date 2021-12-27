import React, { memo } from 'react'
import Editor, { EditorProps, loader } from '@monaco-editor/react'
import styles from './index.module.css'

loader.config({
  paths: {
    vs: 'https://storage.360buyimg.com/bird/drip-form/vs',
  },
})

const MonacoEdit: React.FC<EditorProps> = ({
  language = 'json',
  value,
  defaultLanguage = 'json',
  defaultValue = '',
  onChange,
  theme = 'vs-dark',
  ...props
}) => {
  const input = JSON.stringify(JSON.parse(value || defaultValue), null, 2)

  return (
    <div className={styles.container}>
      <Editor
        width="100%"
        height="100%"
        theme={theme}
        language={language}
        defaultLanguage={defaultLanguage}
        defaultValue={defaultValue}
        onChange={onChange}
        value={input}
        options={{
          ...props.options,
          glyphMargin: true,
          tabSize: 2,
          smoothScrolling: true,
          scrollbar: {
            verticalScrollbarSize: 5,
            horizontalScrollbarSize: 5,
            alwaysConsumeMouseWheel: false,
          },
          fontSize: 13,
        }}
      />
    </div>
  )
}

export default memo(MonacoEdit)

export type { EditorProps }
