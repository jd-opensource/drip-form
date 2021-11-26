import { text as TextField } from './TextField'
import { radio as RadioField } from './RadioField'
import { radioText as RadioTextField } from './RadioTextField'
import { numberField as NumberField } from './NumberField'
import { select as SelectField } from './SelectField'
import { nullField as NullField } from './NullField'
import { switchField as SwitchField } from './SwitchField'
import { slider as SliderField } from './SliderField'
import { timePicker as TimePickerField } from './TimePickerField'
import { datePicker as DatePickerField } from './DatePickerField'
import { colorPicker as ColorPickerField } from './ColorPickerField'
import { checkbox as CheckboxField } from './CheckboxField'
import { uploader as UploaderField } from './UploaderField'
import { cascader as CascaderField } from './CascaderField'
import { selectText as SelectTextField } from './SelectTextField'
import { TreeSelectField } from './TreeSelectField'
import { default as QuestionCircle } from './Shared/QuestionCircle'
import { Collapse, Button } from './Shared'

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
  theme: 'antd',
}

// antd的打包改为输出less，需要使用者配置less-loader
export default antdTheme
