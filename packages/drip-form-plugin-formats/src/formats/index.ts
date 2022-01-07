import color from './color'
import dateTime from './dateTime'
import https from './https'

export type formatsName = 'date-time' | 'color'

export default {
  'date-time': dateTime,
  color,
  https,
}
