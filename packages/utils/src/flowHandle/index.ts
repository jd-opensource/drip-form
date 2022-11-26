/*
 * schema.flow 字段处理成联动语法
 * @Author: jiangxiaowei
 * @Date: 2022-07-12 15:13:44
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-11-23 23:49:26
 */
import stringify from 'js-stringify'
import type { Flow, ControlFlowAction } from './type'

const commonStr = 'const {get,set,merge,setDeepProp,changeKey}=props;'

const getFileKeyToString = (fieldKey: string) => {
  const [newFieldKey, type, property] = fieldKey.trim().split(' ')
  return property
    ? `get('${newFieldKey}').${type}?.${property}`
    : `get('${newFieldKey}').${type}`
}

// TODO else实现
// TODO effect subAction实现
const parseControlFlow = (
  action: ControlFlowAction,
  flowStr: string
): string => {
  // if的条件语句
  let condintionStr = ''
  // if判断成功，执行的语句
  let effectStr = ''
  action.condintion.map((condintion, index, condintions) => {
    if (!condintion.fieldKey1) return
    // 是否取反
    const non = condintion.operator.startsWith('-')
    // 去掉 - 之后的字符（例子：前 -includes 后：includes）
    let operator = non ? condintion.operator.slice(1) : condintion.operator
    if (['true', 'false'].includes(operator)) {
      operator = '==='
    }

    // 需要前面加.的操作符
    const isdotOperator = ['includes', 'in'].includes(operator)
    // change是特殊的判断
    const operatorStr =
      operator === 'change'
        ? `('${condintion.fieldKey1.trim().split(' ').shift()}'===changeKey)`
        : `(${getFileKeyToString(condintion.fieldKey1)}${
            isdotOperator ? '?.' : ''
          }${operator}${
            ['true', 'false'].includes(condintion.operator)
              ? condintion.operator
              : `${stringify(condintion.value2)}`
          })`
    condintionStr += `${operatorStr}${
      condintion.logicOperator && index != condintions.length - 1
        ? condintion.logicOperator
        : ''
    }`
  })
  action.effect.map((effect) => {
    // 转换set类型并过滤空的fieldKey
    if (effect.type === 'set' && effect.fieldKey) {
      const [fieldKey, subType, property] = effect.fieldKey.trim().split(' ')
      effectStr +=
        `set('${fieldKey}','${subType}',${
          property
            ? `(oldValue)=>{
          ${
            property == 'queryConfig.refreshId'
              ? 'let newRefreshId=oldValue?.queryConfig?.refreshId||0;newRefreshId++;'
              : ''
          }
          setDeepProp(${stringify(property.split('.'))},oldValue,${
                property === 'vcontrol'
                  ? stringify(
                      `const {get}=props;return ${
                        effect.value ? condintionStr : `!(${condintionStr})`
                      }`
                    )
                  : property == 'queryConfig.refreshId'
                  ? 'newRefreshId'
                  : stringify(effect.value)
              })
      }`
            : stringify(effect.value)
        }` + ');'
    }
  })

  if (condintionStr) {
    flowStr += `if(${condintionStr}){${effectStr}};`
  }
  return flowStr
}

export const parseFlow = (flow: Flow): string => {
  let flowStr = ''
  //TODO trigger.event支持其他类型后，需对一期默认的globalChange兼容
  // 解析flow.actions
  flow.actions.map((action) => {
    switch (action.type) {
      case 'controlFlow':
        flowStr += parseControlFlow(action, flowStr)
        break
      default:
        break
    }
  })
  return commonStr + flowStr
}
