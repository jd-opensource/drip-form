import { Flow } from '../src/flowHandle/type'

export const flowCondintion: Flow = {
  trigger: {
    event: 'globalChange',
  },
  actions: [
    {
      type: 'controlFlow',
      condintion: [
        {
          fieldKey1: 'a uiSchema disabled',
          operator: 'true',
          logicOperator: '&&',
        },
        {
          fieldKey1: 'b uiSchema a',
          operator: '!==',
          value2: 'c',
          logicOperator: '&&',
        },
        {
          fieldKey1: 'c dataSchema default',
          operator: '===',
          value2: 'c',
          logicOperator: '||',
        },
        {
          fieldKey1: 'c data d',
          operator: '===',
          value2: 'c',
          logicOperator: '||',
        },
        {
          fieldKey1: 'c dataSchema default',
          operator: '===',
          value2: 'c',
          logicOperator: '&&',
        },
        {
          fieldKey1: 'a.a1 uiSchema disabled',
          operator: 'true',
          logicOperator: '||',
        },
        {
          fieldKey1: 'b.b1 uiSchema a',
          operator: '!==',
          value2: 'c',
          logicOperator: '&&',
        },
        {
          fieldKey1: 'c.c1 dataSchema default',
          operator: '===',
          value2: 'c',
          logicOperator: '&&',
        },
        {
          fieldKey1: 'c.c1 data d',
          operator: '===',
          value2: 'c',
          logicOperator: '||',
        },
        {
          fieldKey1: 'c.c1 dataSchema default',
          operator: '===',
          value2: 'c',
        },
      ],
      effect: [
        {
          type: 'set',
          fieldKey: 'b data',
          value: '',
        },
        {
          type: 'subAction',
          actions: [],
        },
      ],
    },
  ],
}

export const flowEffectTestData: Flow = {
  trigger: {
    event: 'globalChange',
  },
  actions: [
    {
      type: 'controlFlow',
      condintion: [{ fieldKey1: 'b', operator: '!==', value2: 'c' }],
      effect: [
        {
          type: 'set',
          fieldKey: 'a data',
          value: 'b',
        },
        {
          type: 'set',
          fieldKey: 'a uiSchema vcontrol',
          value: 'return false',
        },
        {
          type: 'set',
          fieldKey: 'b dataSchema default',
          value: '1',
        },
        {
          type: 'set',
          fieldKey: 'c data property',
          value: '1',
        },
        {
          type: 'merge',
          fieldKey: 'd uiSchema vcontrol',
          value: 'return false',
        },
        {
          type: 'merge',
          fieldKey: 'e dataSchema default',
          value: '1',
        },
        {
          type: 'merge',
          fieldKey: 'f data property',
          value: '1',
        },

        {
          type: 'set',
          fieldKey: 'a1.a2 uiSchema vcontrol',
          value: 'return false',
        },
        {
          type: 'set',
          fieldKey: 'b1.b2 dataSchema default',
          value: '1',
        },
        {
          type: 'set',
          fieldKey: 'c1.c2 data property',
          value: '1',
        },
        {
          type: 'merge',
          fieldKey: 'd1.d2 uiSchema vcontrol',
          value: 'return false',
        },
        {
          type: 'merge',
          fieldKey: 'e1.e2 dataSchema default',
          value: '1',
        },
        {
          type: 'merge',
          fieldKey: 'f1.f2 data property',
          value: '1',
        },
        {
          type: 'subAction',
          actions: [],
        },
      ],
    },
  ],
}
