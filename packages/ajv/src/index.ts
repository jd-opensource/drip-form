import Ajv2019 from 'ajv/dist/2019'
import ajvKeywords from 'ajv-keywords'
import ajvErrors from 'ajv-errors'
import addFormats from 'ajv-formats'
import addDripFormats from '@jdfed/drip-form-plugin-formats'
import addDripKeywords from '@jdfed/drip-form-plugin-keywords'
import draft7MetaSchema from 'ajv/dist/refs/json-schema-draft-07.json'
import draft6MetaSchema from 'ajv/dist/refs/json-schema-draft-06.json'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import apply from 'ajv-formats-draft2019'
import type Ajv from 'ajv/dist/2019'
import type { Plugin, Options } from 'ajv/dist/2019'

/**
 * 生成ajv示例，并加载drip-form官方插件
 */
function registerAjv(): Ajv {
  // 默认使用草案2019
  const ajv = new Ajv2019({
    // 不允许type:['string','number']等联合模式 推荐使用anyOf代替
    allowUnionTypes: false,
    //支持default关键字输出到formData
    useDefaults: true,
    // 展示所有错误信息。为false时，检测到错误立马返回，后续错误不会返回
    allErrors: true,
    // 错误信息包含schema、parentSchema
    verbose: true,
    // 支持$data引用，参考：https://ajv.js.org/guide/combining-schemas.html#data-reference
    $data: true,
    // 支持鉴别关键字 参考：https://ajv.js.org/json-schema.html#discriminator
    discriminator: true,
    // 是否删除数据中Schema未定义的字段
    removeAdditional: false,
  })
  // 支持草案7
  ajv.addMetaSchema(draft7MetaSchema, 'http://json-schema.org/draft-07/schema#')
  // 支持草案6
  ajv.addMetaSchema(draft6MetaSchema, 'draft6')
  // 添加ajv-keywords关键字
  ajvKeywords(ajv)
  // 添加ajv-errors
  ajvErrors(ajv)
  // 添加ajv-formats
  addFormats(ajv)
  // 添加draft2019的formats
  apply(ajv)
  // 添加drip-form官方忽略关键字(添加customFormat是为了node校验支持旧版的语法)
  ajv.addVocabulary([
    'validateTime',
    '$container',
    'customFormat',
    // v1需要过滤该字段
    'transformToObject',
  ])
  // 加载drip-form官方keywords插件
  addDripKeywords(ajv)
  // 加载drip-form官方formats插件
  addDripFormats(ajv)
  return ajv
}

function loadAjvPlugins(
  ajv: Ajv,
  plugins?: Array<Plugin<Options>> | Plugin<Options>
): void {
  if (plugins) {
    if (Array.isArray(plugins)) {
      plugins.map(async (plugin) => {
        try {
          plugin(ajv)
        } catch (error) {
          console.error(`加载${plugins}错误`)
          console.error(error)
        }
      })
    } else if (typeof plugins === 'function') {
      try {
        plugins(ajv)
      } catch (error) {
        console.error('加载插件错误')
        console.error(error)
      }
    }
  }
}

export default { registerAjv, loadAjvPlugins }
