import color from './color'
import dateTime from './dateTime'
import https from './https'
import jsonObject from './jsonObject'

export type formatsName = 'date-time' | 'color'

export default {
  'date-time': dateTime,
  color,
  https,
  jsonObject,
}
