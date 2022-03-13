/** 容器 */
import arrayConfig from './container/array.field'
import objectConfig from './container/object.field'
/**
 * 通用配置项
 */
import descConfig from './common/propertyConfig/description.schema'
import layoutConfig from './common/propertyConfig/layout.schema'
import titleConfig from './common/propertyConfig/title.schema'

/**
 * 容器组件
 */
export const containerConfig = {
  title: '容器组件',
  order: ['array', 'object'],
  fields: {
    array: arrayConfig,
    object: objectConfig,
  },
}

/**antd主题组件 */
export { config as antdConfig } from '@jdfed/drip-form-theme-antd'

/**
 * 通用配置schema
 */
export const baseMap = {
  description: descConfig,
  layout: layoutConfig,
  title: titleConfig,
}
