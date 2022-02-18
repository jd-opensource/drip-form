/*
 * @Author: jiangxiaowei
 * @Date: 2020-05-14 15:43:02
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-02-11 14:23:32
 */
import { createContext } from 'react'
import {
  deleteDeepProp,
  setDeepProp,
  typeCheck,
  randomString,
} from '@jdfed/utils'
import addField from './addField'
import deleteField from './deleteField'
import { upgradeTips, toArray } from '@jdfed/utils'
import type { Action, State, SetErrType } from '@jdfed/utils'

export const FormDataContext = createContext('')

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
          delete state.customErrors[fieldKey]
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
    case 'setDefaultSuccess': {
      state.hasDefault = action.action.hasDefault
      break
    }
    case 'setArrayKey': {
      const { isDelete, fieldKey, order } = action.action
      // 当前数组的所有react key
      let fieldKeyComKey = state.arrayKey[fieldKey] || []
      if (isDelete && order) {
        fieldKeyComKey.splice(order, 1)
      } else {
        if (order) {
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
