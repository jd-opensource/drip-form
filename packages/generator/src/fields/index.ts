/** 容器 */
import arrayConfig from './container/array.field'
import objectConfig from './container/object.field'
/**
 * 通用配置项
 */
import descConfig from './common/description.schema'
import layoutConfig from './common/layout.schema'
import titleConfig from './common/title.schema'
/**
 * 表单组件左侧列表配置及右侧面板schema
 */
// import cascaderConfig from './formItem/cascader.field'
import checkboxConfig from './formItem/checkbox.field'
import colorpickerConfig from './formItem/colorpicker.field'
import datepickerConfig from './formItem/datepicker.field'
import inputConfig from './formItem/input.field'
import numberConfig from './formItem/number.field'
import radioConfig from './formItem/radio.field'
import selectConfig from './formItem/select.field'
import sliderConfig from './formItem/slider.field'
import switchConfig from './formItem/switch.field'
import timepickerConfig from './formItem/timepicker.field'
// import treeselectConfig from './formItem/treeselect.field'
import uploadConfig from './formItem/upload.field'
import textConfig from './supportUnits/text.field'

/**
 * 普通组件
 */
export const formItemMap = {
  // cascader: cascaderConfig,
  checkbox: checkboxConfig,
  colorPicker: colorpickerConfig,
  datePicker: datepickerConfig,
  text: inputConfig,
  number: numberConfig,
  radio: radioConfig,
  select: selectConfig,
  slider: sliderConfig,
  switch: switchConfig,
  timePicker: timepickerConfig,
  // treeSelect: treeselectConfig,
  uploader: uploadConfig,
}

/**
 * 辅助组件
 */
export const supportUnitsMap = {
  null: textConfig,
}

/**
 * 容器组件
 */
export const containerMap = {
  array: arrayConfig,
  object: objectConfig,
}

/**
 * 通用配置schema
 */
export const baseMap = {
  description: descConfig,
  layout: layoutConfig,
  title: titleConfig,
}
