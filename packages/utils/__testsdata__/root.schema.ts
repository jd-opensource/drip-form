export const unitedSchema = {
  type: 'string',
  title: '输入框',
  minLength: 1,
  // fieldKey:'a',
  errMsg: {
    minLength: '最小1',
  },
  ui: {
    type: 'text',
    style: { width: '100%' },
  },
}

export const parsedSchema = {
  dataSchema: {
    type: 'string',
    title: '输入框',
    minLength: 1,
    errorMessage: {
      minLength: '最小1',
    },
  },
  uiSchema: {
    type: 'text',
    // fieldKey:'a',
    style: { width: '100%' },
  },
  typePath: {
    // type:'string',
    // unitedSchemaKey:'',
    // fatherKey:''
  },
  customProps: [],
}
