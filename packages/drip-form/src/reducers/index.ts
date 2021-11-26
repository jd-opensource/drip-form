/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * @Author: jiangxiaowei
 * @Date: 2020-05-14 15:43:02
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2021-11-05 21:08:38
 */
import { createContext, Dispatch } from 'react'
import { deleteDeepProp, setDeepProp, typeCheck } from '@jdfed/utils'
import addField from './addField'
import deleteField from './deleteField'
import type { Action, State } from '@jdfed/utils'

// eslint-disable-next-line @typescript-eslint/no-empty-function
const initDispatch: Dispatch<Action> = () => {}
export const FormDataContext = createContext(initDispatch)

const formDataReducer = (state: State, action: Action): void => {
  const type = action.type
  switch (type) {
    case 'reload': {
      const { type, ...args } = action
      Object.assign(state, args)
      break
    }
    case 'setDataSchema': {
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
    case 'setUiSchema': {
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
    case 'setFormData': {
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
    case 'deleteUiSchema': {
      const mapKeys = action.key.split('.')
      deleteDeepProp(mapKeys, state.uiSchema)
      break
    }
    case 'deleteFormData': {
      state.changeKey = action.key
      const mapKeys = action.key.split('.')
      deleteDeepProp(mapKeys, state.formData)
      break
    }
    case 'deleteField': {
      const { type, ...args } = action
      deleteField({ args, state })
      break
    }
    case 'addField': {
      const { type, ...args } = action
      addField({ args, state })
      break
    }
    case 'setError': {
      const { type, ...args } = action
      if (args.errors && typeCheck(args.errors) === 'Object') {
        const ignoreErr: Record<string, string> = {}
        // ignore 用来将type：change的异步校验的结果保存下来。防止被validae给清空
        if (args.ignore && Array.isArray(args.ignore)) {
          args.ignore.map((item) => {
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
          state.errors[i] = args[i as keyof typeof args] as string
        }
      }
      break
    }
    case 'deleteError': {
      delete state.errors[action.key]
      break
    }
    case 'setChecking': {
      state.checking = action.checking
      break
    }
    case 'setVisibleFieldKey': {
      state.visibleFieldKey.push(action.key)
      break
    }
    case 'deleteVisibleFieldKey': {
      const index = state.visibleFieldKey.findIndex(
        (item: string) => item === action.key
      )
      state.visibleFieldKey.splice(index, 1)
      break
    }
    case 'setDefaultSuccess': {
      state.hasDefault = action.hasDefault
      break
    }
  }
}

export default formDataReducer
