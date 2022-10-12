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
  value: oldValue,
  defaultLanguage = 'json',
  defaultValue,
  onChange,
  options,
  ...props
}) => {
  const value =
    defaultLanguage === 'json'
      ? JSON.stringify(JSON.parse(oldValue || defaultValue || '""'), null, 2)
      : oldValue

  return (
    <div className={styles.container}>
      <Editor
        width="100%"
        height="100%"
        theme="light"
        language={language}
        defaultLanguage={defaultLanguage}
        defaultValue={defaultValue}
        onChange={onChange}
        value={value}
        options={{
          ...options,
          glyphMargin: true,
          tabSize: 2,
          smoothScrolling: true,
          formatOnPaste: true,
          formatOnType: true,
          scrollbar: {
            verticalScrollbarSize: 5,
            horizontalScrollbarSize: 5,
            alwaysConsumeMouseWheel: false,
          },
          fontSize: 13,
        }}
        {...props}
      />
    </div>
  )
}

export default memo(MonacoEdit)

export type { EditorProps }
