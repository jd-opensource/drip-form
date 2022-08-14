/*
 * @Author: jiangxiaowei
 * @Date: 2020-05-14 15:43:02
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-08-14 08:55:35
 */
import { createContext } from 'react'
import {
  deleteDeepProp,
  setDeepProp,
  typeCheck,
  randomString,
  generateArrayKeyReg,
  generateReg,
} from '@jdfed/utils'
import addField from './addField'
import deleteField from './deleteField'
import { upgradeTips, toArray } from '@jdfed/utils'
import type { Action, State, SetErrType } from '@jdfed/utils'
import { DripFormEventFuncType } from '../DripForm/type'

export const FormDataContext = createContext<{
  globalFormDataStoreKey: string
  fireEvent?: DripFormEventFuncType
}>({
  globalFormDataStoreKey: '',
})

const formDataReducer = (state: State, action: Action): void => {
  const type = action.type
  switch (type) {
    // 即将废弃，建议使用reset
    case 'reload': {
      upgradeTips('reload', 'reset')
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { type, ...args } = action
      Object.assign(state, args)
      break
    }
    case 'reset': {
      Object.assign(state, action.action.state)
      break
    }
    // 即将废弃，使用setValidate
    case 'setDataSchema': {
      upgradeTips('setDataSchema', 'setValidate')
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { type, ...args } = action
      if (args.dataSchema) {
        state.dataSchema = args.dataSchema
      } else {
        for (const i in args) {
          const mapKeys = i.split('.')
          if (args?.isDelete) {
            deleteDeepProp(mapKeys, state.dataSchema)
          } else {
            setDeepProp(mapKeys, state.dataSchema, args[i])
          }
        }
      }
      break
    }
    case 'setValidate': {
      const { set, dataSchema } = action.action
      let deleteKeys = action.action.deleteKeys
      if (set) {
        for (const i in set) {
          setDeepProp(i.split('.'), state.dataSchema, set[i])
        }
      }
      if (deleteKeys) {
        deleteKeys = toArray(deleteKeys)
        deleteKeys.map((fieldKey) => {
          deleteDeepProp(fieldKey.split('.'), state.dataSchema)
        })
      }
      if (dataSchema) {
        state.dataSchema = dataSchema
      }
      break
    }
    // 即将废弃，建议使用setUi
    case 'setUiSchema': {
      upgradeTips('setUiSchema', 'setUi')
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { type, ...args } = action
      if (args.uiSchema) {
        state.uiSchema = args.uiSchema
      } else {
        for (const i in args) {
          const mapKeys = i.split('.')
          setDeepProp(mapKeys, state.uiSchema, args[i])
        }
      }
      break
    }
    // 即将废弃，建议使用setUi
    case 'deleteUiSchema': {
      upgradeTips('deleteUiSchema', 'setUi')
      const mapKeys = action.key.split('.')
      deleteDeepProp(mapKeys, state.uiSchema)
      break
    }
    case 'setUi': {
      const { set, uiSchema } = action.action
      let deleteKeys = action.action.deleteKeys
      if (set) {
        for (const i in set) {
          setDeepProp(i.split('.'), state.uiSchema, set[i])
        }
      }
      if (deleteKeys) {
        deleteKeys = toArray(deleteKeys)
        deleteKeys.map((fieldKey) => {
          deleteDeepProp(fieldKey.split('.'), state.uiSchema)
        })
      }
      if (uiSchema) {
        state.uiSchema = uiSchema
      }
      break
    }
    // 即将废弃，建议使用setData
    case 'setFormData': {
      upgradeTips('setFormData', 'setData')
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { type, ...args } = action
      if (args.formData) {
        state.formData = args.formData
      } else {
        for (const i in args) {
          setDeepProp(i.split('.'), state.formData, args[i], state.typePath)
          // 将当前变化的key记录下来
          state.changeKey = i
        }
      }
      break
    }
    // 即将废弃，建议使用setData
    case 'deleteFormData': {
      upgradeTips('setFormData', 'setData')
      state.changeKey = action.key
      const mapKeys = action.key.split('.')
      deleteDeepProp(mapKeys, state.formData)
      break
    }
    case 'setData': {
      const { set, formData } = action.action
      let deleteKeys = action.action.deleteKeys
      if (set) {
        for (const i in set) {
          setDeepProp(i.split('.'), state.formData, set[i], state.typePath)
          // 将当前变化的key记录下来
          state.changeKey = i
        }
      }
      if (deleteKeys) {
        deleteKeys = toArray(deleteKeys)
        deleteKeys.map((fieldKey) => {
          state.changeKey = fieldKey
          deleteDeepProp(fieldKey.split('.'), state.formData)
        })
      }
      if (formData) {
        state.formData = formData
      }
      break
    }

    case 'deleteField': {
      deleteField({ action: action.action, state })
      break
    }
    case 'addField': {
      addField({ action: action.action, state })
      break
    }
    case 'setAjvErr': {
      let deleteKeys = action.action.deleteKeys
      const { errors, set } = action.action
      if (set) {
        for (const i in set) {
          state.ajvErrors[i] = set[i]
        }
      }
      if (deleteKeys) {
        deleteKeys = toArray(deleteKeys)
        deleteKeys.map((fieldKey) => {
          delete state.ajvErrors[fieldKey]
        })
      }
      if (errors) {
        state.ajvErrors = errors
      }
      break
    }
    // 即将废弃，建议使用setErr
    case 'setError': {
      upgradeTips('setError', 'setErr')
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { type, ...args } = action
      if (args.errors && typeCheck(args.errors) === 'Object') {
        const ignoreErr: Record<string, string> = {}
        // ignore 用来将type：change的异步校验的结果保存下来。防止被validae给清空
        if (
          (args.ignore && Array.isArray(args.ignore)) ||
          state.ignoreErrKey.length > 0
        ) {
          Array.from(
            new Set([...(args.ignore || []), ...state.ignoreErrKey])
          ).map((item) => {
            if (state.errors[item]) {
              ignoreErr[item] = state.errors[item]
            }
          })
        }
        state.errors = {
          ...(args.errors as Record<string, string>),
          ...ignoreErr,
        }
      } else {
        for (const i in args) {
          const params = args as SetErrType
          if (params?.action?.ignore) {
            state.ignoreErrKey = Array.from(
              new Set([...state.ignoreErrKey, ...params.action.ignore])
            )
          }

          state.errors[i] = args[i as keyof typeof args] as string
        }
      }
      break
    }
    // 即将废弃，建议使用setErr
    case 'deleteError': {
      upgradeTips('deleteError', 'setErr')
      if (Array.isArray(action.key)) {
        action.key.map((item) => {
          delete state.errors[item]
        })
      } else {
        delete state.errors[action.key]
      }
      break
    }
    case 'setErr': {
      let deleteKeys = action.action.deleteKeys
      const { errors, set } = action.action
      if (set) {
        for (const i in set) {
          state.customErrors[i] = set[i]
        }
      }
      if (deleteKeys) {
        deleteKeys = toArray(deleteKeys)
        deleteKeys.map((fieldKey) => {
          const arr: Array<Record<string, string>> = []
          Object.keys(state.customErrors).map((key) => {
            const reg = new RegExp(
              `^${fieldKey.split('.').join('\\.')}(\\..+)*`,
              'g'
            )
            // 判断是否有嵌套，删除嵌套
            if (reg.test(key)) {
              delete state.customErrors[key]
            }
            const fieldKeyToTypeMap = Object.keys(state.typePath).find(
              (item) => {
                const startArr = fieldKey.split('.')
                startArr.pop()
                return generateReg(startArr).test(item)
              }
            )

            if (
              fieldKeyToTypeMap &&
              state.typePath[fieldKeyToTypeMap]?.type === 'array'
            ) {
              const fieldKeyArr = fieldKey.split('.')
              const order = fieldKeyArr.pop() as string
              const reg = new RegExp(
                `^${fieldKeyArr.join('\\.')}\\.(\\d)(\\..+)*`,
                'g'
              )
              const res = reg.exec(key)
              // 嵌套情况：需要重新设置被删除的项的后续项的arrayKey
              if (res !== null) {
                const [, index, end] = res
                if (+index >= +order) {
                  arr[+index] = {
                    ...arr[+index],
                    [end || '']: state.customErrors[key],
                  }
                }
              }
            }
          })
          // 父元素是数组，删除需要切换
          if (arr.length > 0) {
            const fieldKeyArr = fieldKey.split('.')
            fieldKeyArr.pop()
            const start = fieldKeyArr.join('.')
            arr.map((item, index) => {
              if (!item) return
              for (const i in item) {
                if (state.customErrors[`${start}.${+index + 1}${i}`]) {
                  state.customErrors[`${start}.${index}${i}`] =
                    state.customErrors[`${start}.${+index + 1}${i}`]
                } else {
                  delete state.customErrors[`${start}.${index}${i}`]
                }
              }
            })
          }
        })
      }
      if (errors) {
        state.customErrors = errors
      }
      break
    }
    case 'setChecking': {
      if ('action' in action) {
        state.checking = action.action.checking
      } else {
        state.checking = action.checking
      }
      break
    }
    case 'setVisibleKey': {
      let { fieldKey, deleteKeys } = action.action
      if (fieldKey) {
        fieldKey = toArray(fieldKey)
        state.visibleFieldKey = Array.from(
          new Set([...state.visibleFieldKey, ...fieldKey])
        )
      }
      if (deleteKeys) {
        deleteKeys = toArray(deleteKeys)
        state.visibleFieldKey = state.visibleFieldKey.filter(
          (item) => !deleteKeys?.includes(item)
        )
      }
      break
    }
    case 'setArrayKey': {
      const { isDelete, fieldKey, order, move } = action.action
      // 当前数组的所有react key
      let fieldKeyComKey = state.arrayKey[fieldKey] || []
      const hasOrder = Object.prototype.hasOwnProperty.call(
        action.action,
        'order'
      )
      if (isDelete && hasOrder && typeof order === 'number') {
        fieldKeyComKey.splice(order, 1)
        // 需要交换的数据
        const arr: Record<string, string[]>[] = []
        // 若存在嵌套，批量切换后续嵌套
        Object.keys(state.arrayKey).map((item) => {
          const reg = generateArrayKeyReg(
            fieldKey.split('.').concat(String(order))
          )
          const res = reg.exec(item)
          // 嵌套情况：需要重新设置被删除的项的后续项的arrayKey
          if (res !== null) {
            const [, , index, end] = res
            if (+index >= order) {
              arr[+index] = {
                ...arr[+index],
                [end]: state.arrayKey[item],
              }
            }
          }
        })
        arr.map((item, index) => {
          if (!item) return
          for (const i in item) {
            if (index === arr.length - 1) {
              delete state.arrayKey[`${fieldKey}.${index}${i}`]
            } else {
              state.arrayKey[`${fieldKey}.${index}${i}`] =
                state.arrayKey[`${fieldKey}.${+index + 1}${i}`]
            }
          }
        })
      } else {
        if (move) {
          fieldKeyComKey.splice(
            move[1],
            0,
            fieldKeyComKey.splice(move[0], 1)[0]
          )
          // 若存在嵌套，批量切换后续嵌套
          // 需要交换的arrayKey
          let change: Record<string, string[]>
          // 需要交换的customErr
          let changeCustomError: Record<string, string>
          // 需要交换的arrayKey
          const arr: Record<string, string[]>[] = []
          // 需要交换的customErrors
          const customErrorsArr: Array<Record<string, string>> = []
          // 拖拽方向
          let direction = ''
          Object.keys(state.arrayKey).map((item) => {
            const reg = generateArrayKeyReg(
              fieldKey.split('.').concat(String(order))
            )
            const res = reg.exec(item)
            // 嵌套情况：需要重新设置被删除的项的后续项的arrayKey
            if (res !== null) {
              const [, , index, end] = res
              // 从上往下拖拽
              if (move[0] < move[1]) {
                direction = 'topToBottom'
                if (+index >= move[0] && +index <= move[1]) {
                  arr[+index] = {
                    ...arr[+index],
                    [end]: state.arrayKey[item],
                  }
                }
              } else {
                // 从下往上拖拽
                direction = 'bottomToTop'
                if (+index <= move[0] && +index >= move[1]) {
                  arr[+index] = {
                    ...arr[+index],
                    [end]: state.arrayKey[item],
                  }
                }
              }
            }
          })
          Object.keys(state.customErrors).map((item) => {
            const fieldKeyArr = fieldKey.split('.')
            const reg = new RegExp(
              `^${fieldKeyArr.join('\\.')}\\.(\\d)(\\..+)*`,
              'g'
            )
            const res = reg.exec(item)
            // 嵌套情况：需要重新设置被删除的项的后续项的arrayKey
            if (res !== null) {
              const [, index, end] = res
              // 从上往下拖拽
              if (move[0] < move[1]) {
                direction = 'topToBottom'

                if (+index >= move[0] && +index <= move[1]) {
                  customErrorsArr[+index] = {
                    ...customErrorsArr[+index],
                    [end || '']: state.customErrors[item],
                  }
                }
              } else {
                // 从下往上拖拽
                direction = 'bottomToTop'
                if (+index <= move[0] && +index >= move[1]) {
                  customErrorsArr[+index] = {
                    ...customErrorsArr[+index],
                    [end || '']: state.customErrors[item],
                  }
                }
              }
            }
          })
          switch (direction) {
            case 'topToBottom': {
              arr.map((item, index) => {
                if (!item) return
                if (+index === move[0]) {
                  change = item
                  for (const i in item) {
                    state.arrayKey[`${fieldKey}.${index}${i}`] =
                      state.arrayKey[`${fieldKey}.${+index + 1}${i}`]
                  }
                } else if (+index === move[1]) {
                  for (const i in change) {
                    state.arrayKey[`${fieldKey}.${index}${i}`] = change[i]
                  }
                } else {
                  for (const i in item) {
                    state.arrayKey[`${fieldKey}.${index}${i}`] =
                      state.arrayKey[`${fieldKey}.${+index + 1}${i}`]
                  }
                }
              })
              customErrorsArr.map((item, index) => {
                if (!item) return
                if (+index === move[0]) {
                  changeCustomError = item
                  for (const i in item) {
                    state.customErrors[`${fieldKey}.${index}${i}`] =
                      state.customErrors[`${fieldKey}.${+index + 1}${i}`]
                  }
                } else if (+index === move[1]) {
                  for (const i in changeCustomError) {
                    state.customErrors[`${fieldKey}.${index}${i}`] =
                      changeCustomError[i]
                  }
                } else {
                  for (const i in item) {
                    state.customErrors[`${fieldKey}.${index}${i}`] =
                      state.customErrors[`${fieldKey}.${+index + 1}${i}`]
                  }
                }
              })
              break
            }
            case 'bottomToTop':
              arr
                .slice()
                .reverse()
                .map((item, index, arr) => {
                  if (!item) return
                  const newIndex = arr.length - 1 - +index
                  if (newIndex === move[0]) {
                    change = item
                    for (const i in item) {
                      state.arrayKey[`${fieldKey}.${newIndex}${i}`] =
                        state.arrayKey[`${fieldKey}.${newIndex - 1}${i}`]
                    }
                  } else if (newIndex === move[1]) {
                    for (const i in change) {
                      state.arrayKey[`${fieldKey}.${newIndex}${i}`] = change[i]
                    }
                  } else {
                    for (const i in item) {
                      state.arrayKey[`${fieldKey}.${newIndex}${i}`] =
                        state.arrayKey[`${fieldKey}.${newIndex - 1}${i}`]
                    }
                  }
                })
              customErrorsArr
                .slice()
                .reverse()
                .map((item, index, arr) => {
                  if (!item) return
                  const newIndex = arr.length - 1 - +index
                  if (newIndex === move[0]) {
                    changeCustomError = item
                    for (const i in item) {
                      state.customErrors[`${fieldKey}.${newIndex}${i}`] =
                        state.customErrors[`${fieldKey}.${newIndex - 1}${i}`]
                    }
                  } else if (newIndex === move[1]) {
                    for (const i in changeCustomError) {
                      state.customErrors[`${fieldKey}.${newIndex}${i}`] =
                        changeCustomError[i]
                    }
                  } else {
                    for (const i in item) {
                      state.customErrors[`${fieldKey}.${newIndex}${i}`] =
                        state.customErrors[`${fieldKey}.${newIndex - 1}${i}`]
                    }
                  }
                })
              break
            default:
              break
          }
        } else if (hasOrder && typeof order === 'number') {
          fieldKeyComKey[order] = randomString(52)
        } else {
          try {
            const formDataKey = fieldKey.split('.')
            const fieldData = formDataKey.reduce((prev, cur) => {
              if (prev[cur]) {
                return prev[cur]
              } else {
                return []
              }
            }, state.formData)
            fieldKeyComKey = fieldData.map(() => {
              return randomString(52)
            })
          } catch (error) {
            // console.log(error)
          }
        }
        state.arrayKey[fieldKey] = fieldKeyComKey
      }
    }
  }
}

export default formDataReducer
