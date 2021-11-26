export const unitedSchema = {
  theme: 'antd',
  validateTime: 'submit',
  type: 'object',
  ui: {
    mode: 'edit'
  },
  schema: [{
    type: 'array',
    title: '时间选择框',
    items: [
      {
        type: 'string',
        format: 'time'
      },
      {
        type: 'string',
        format: 'time'
      }
    ],
    ui: {
      type: 'timePicker'
    },
    fieldKey: 'hahaha'
  }]
}

export const parsedSchema = {
  dataSchema: {
    'properties': {
      'hahaha': {
        'items': [
          {
            'format': 'time',
            'type': 'string'
          },
          {
            'format': 'time',
            'type': 'string'
          }
        ],
        'title': '时间选择框',
        'type': 'array'
      }
    },
    'type': 'object',
    'validateTime': 'submit'
  },
  uiSchema: {
    'mode': 'edit',
    'order': ['hahaha'],
    'properties': {
      'hahaha': {
        'type': 'timePicker'
      }
    },
    'theme': 'antd'
  },
  typePath: {
    'hahaha': {
      'fatherKey': '',
      'type': 'array'
    },
    'hahaha.0': {
      'fatherKey': 'hahaha',
      'type': 'string'
    },
    'hahaha.1': {
      'fatherKey': 'hahaha',
      'type': 'string'
    }
  }
}
