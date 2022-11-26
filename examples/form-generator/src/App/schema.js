export default {
  type: 'object',
  validateTime: 'change',
  ui: {
    title: {
      width: 82,
      placement: 'left',
    },
    flow: {
      version: '0.1.0',
      trigger: {
        event: 'globalChange',
      },
      actions: [
        {
          type: 'controlFlow',
          condintion: [
            {
              fieldKey1: 'a data',
              operator: '===',
              value2: '0',
              logicOperator: '&&',
            },
          ],
          effect: [
            {
              type: 'set',
              fieldKey: 'select_kps22V uiSchema queryConfig.refreshId',
              value: '',
            },
            {
              type: 'set',
              fieldKey: 'select_hyScBs uiSchema queryConfig.refreshId',
              value: '',
            },
          ],
        },
      ],
    },
  },
  theme: 'antd',
  schema: [
    {
      type: 'string',
      title: '单选',
      default: '1',
      ui: {
        type: 'radio',
        theme: 'antd',
        options: [
          {
            label: '是',
            value: '1',
          },
          {
            label: '否',
            value: '0',
          },
        ],
      },
      fieldKey: 'a',
    },
    {
      type: 'string',
      title: '输入框',
      ui: {
        type: 'text',
        style: {
          width: '100%',
        },
        theme: 'antd',
      },
      fieldKey: 'text_lkXQ-Y',
    },
    {
      type: 'string',
      title: 'get选择器',
      ui: {
        type: 'select',
        theme: 'antd',
        style: {
          width: 120,
        },
        queryConfig: {
          optionsType: '0',
          url: 'http://localhost:2002/getSelectOptions',
          params: [
            {
              key: '1',
              value: '1',
            },
          ],
        },
        options: [
          {
            label: '1',
            value: '1',
          },
        ],
      },
      fieldKey: 'select_kps22V',
    },
    {
      type: 'string',
      title: 'post选择器',
      ui: {
        type: 'select',
        theme: 'antd',
        style: {
          width: 120,
        },
        queryConfig: {
          optionsType: '0',
          url: 'http://localhost:2002/postSelectOptions',
          method: 'POST',
          dataPath: 'data',
        },
        options: [
          {
            label: '1',
            value: '1',
          },
        ],
      },
      fieldKey: 'select_hyScBs',
    },
    {
      type: ['string', 'number', 'array'],
      title: '选择器',
      ui: {
        type: 'select',
        theme: 'antd',
        style: {
          width: 120,
        },
        queryConfig: {
          optionsType: '1',
          options: [
            {
              label: '1',
              value: '1',
            },
          ],
          setPath: 'options',
        },
      },
      fieldKey: 'select_RB14Wj',
    },
  ],
}
