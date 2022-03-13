import { text as TextField, config as textConfig } from './TextField'
import { radio as RadioField, config as radioConfig } from './RadioField'
import { radioText as RadioTextField } from './RadioTextField'
import {
  numberField as NumberField,
  config as numberConfig,
} from './NumberField'
import { select as SelectField, config as selectConfig } from './SelectField'
import { nullField as NullField, config as nullConfig } from './NullField'
import {
  switchField as SwitchField,
  config as switchConfig,
} from './SwitchField'
import { slider as SliderField, config as sliderConfig } from './SliderField'
import {
  timePicker as TimePickerField,
  config as timepickerConfig,
} from './TimePickerField'
import {
  datePicker as DatePickerField,
  config as datepicerConfig,
} from './DatePickerField'
import {
  colorPicker as ColorPickerField,
  config as colorpickerConfig,
} from './ColorPickerField'
import {
  checkbox as CheckboxField,
  config as checkboxConfig,
} from './CheckboxField'
import {
  uploader as UploaderField,
  config as uploadConfig,
} from './UploaderField'
import {
  cascader as CascaderField,
  config as cascaderCofig,
} from './CascaderField'
import { selectText as SelectTextField } from './SelectTextField'
import { TreeSelectField } from './TreeSelectField'
import { default as QuestionCircle } from './Shared/QuestionCircle'
import { Collapse, Button, Popconfirm } from './Shared'

const antdTheme: {
  theme: 'antd'
  Button: typeof Button
  Collapse: typeof Collapse
  [key: string]: unknown
} = {
  text: TextField,
  number: NumberField,
  select: SelectField,
  radio: RadioField,
  radioText: RadioTextField,
  null: NullField,
  switch: SwitchField,
  slider: SliderField,
  timePicker: TimePickerField,
  datePicker: DatePickerField,
  colorPicker: ColorPickerField,
  checkbox: CheckboxField,
  uploader: UploaderField,
  cascader: CascaderField,
  treeSelect: TreeSelectField,
  selectText: SelectTextField,
  QuestionCircle,
  Collapse,
  Button,
  Popconfirm,
  theme: 'antd',
}

// antd的打包改为输出less，需要使用者配置less-loader
export default antdTheme

export const config = {
  title: '表单组件',
  order: [
    'checkbox',
    'colorPicker',
    'datePicker',
    'text',
    'number',
    'radio',
    'select',
    'slider',
    'switch',
    'timePicker',
    'uploader',
    'cascader',
    'null',
  ],
  fields: {
    checkbox: checkboxConfig,
    colorPicker: colorpickerConfig,
    datePicker: datepicerConfig,
    text: textConfig,
    number: numberConfig,
    radio: radioConfig,
    select: selectConfig,
    slider: sliderConfig,
    switch: switchConfig,
    timePicker: timepickerConfig,
    uploader: uploadConfig,
    cascader: cascaderCofig,
    null: nullConfig,
  },
}
