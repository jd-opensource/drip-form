import {
  flowCondintion,
  flowEffectTestData,
} from '../__testsdata__/controlFlow'
import { parseFlow } from '../src'

describe.skip('parseFlow', () => {
  test('controlFlow', () => {
    expect(parseFlow(flowCondintion)).toBe(
      "const {get,set,merge,setDeepProp,changeKey}=props;if((get('a').uiSchema?.disabled===true)&&(get('b').uiSchema?.a!==\"c\")&&(get('c').dataSchema?.default===\"c\")||(get('c').data?.d===\"c\")||(get('c').dataSchema?.default===\"c\")&&(get('a.a1').uiSchema?.disabled===true)||(get('b.b1').uiSchema?.a!==\"c\")&&(get('c.c1').dataSchema?.default===\"c\")&&(get('c.c1').data?.d===\"c\")||(get('c.c1').dataSchema?.default===\"c\")){set('b','data',\"\");};"
    )
    expect(parseFlow(flowEffectTestData)).toBe(
      "const {get,set,merge,setDeepProp,changeKey}=props;if((get('b').undefined!==\"c\")){set('a','data',\"b\");set('a','uiSchema',(oldValue)=>{setDeepProp([\"vcontrol\"],oldValue,\"const {get}=props;return (get('b').undefined!==\"c\")\")});set('b','dataSchema',(oldValue)=>{setDeepProp([\"default\"],oldValue,\"1\")});set('c','data',(oldValue)=>{setDeepProp([\"property\"],oldValue,\"1\")});set('a1.a2','uiSchema',(oldValue)=>{setDeepProp([\"vcontrol\"],oldValue,\"const {get}=props;return (get('b').undefined!==\"c\")\")});set('b1.b2','dataSchema',(oldValue)=>{setDeepProp([\"default\"],oldValue,\"1\")});set('c1.c2','data',(oldValue)=>{setDeepProp([\"property\"],oldValue,\"1\")});};"
    )
  })
})
