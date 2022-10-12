import {
  flowCondintion,
  flowEffectTestData,
} from '../__testsdata__/controlFlow'
import { parseFlow } from '../src'

describe('parseFlow', () => {
  test('controlFlow', () => {
    expect(parseFlow(flowCondintion)).toBe(
      "const {get,set,merge,setDeepProp}=props;if((get('a').uiSchema?.disabled===true)&&(get('b').uiSchema?.a!==\"c\")&&(get('c').dataSchema?.default===\"c\")||(get('c').data?.d===\"c\")||(get('c').dataSchema?.default===\"c\")&&(get('a.a1').uiSchema?.disabled===true)||(get('b.b1').uiSchema?.a!==\"c\")&&(get('c.c1').dataSchema?.default===\"c\")&&(get('c.c1').data?.d===\"c\")||(get('c.c1').dataSchema?.default===\"c\")){set('b','data',\"\");};"
    )
    expect(parseFlow(flowEffectTestData)).toBe(
      "const {get,set,merge,setDeepProp}=props;if((get('b').undefined!==\"c\")){set('a','data',\"b\");set('a','uiSchema',(oldValue)=>{\n          setDeepProp(['vcontrol'],oldValue,\"const {get}=props;return (get('b').undefined!==\\\"c\\\")\")\n      });set('b','dataSchema',(oldValue)=>{\n          setDeepProp(['default'],oldValue,\"1\")\n      });set('c','data',(oldValue)=>{\n          setDeepProp(['property'],oldValue,\"1\")\n      });set('a1.a2','uiSchema',(oldValue)=>{\n          setDeepProp(['vcontrol'],oldValue,\"const {get}=props;return (get('b').undefined!==\\\"c\\\")\")\n      });set('b1.b2','dataSchema',(oldValue)=>{\n          setDeepProp(['default'],oldValue,\"1\")\n      });set('c1.c2','data',(oldValue)=>{\n          setDeepProp(['property'],oldValue,\"1\")\n      });};"
    )
  })
})
