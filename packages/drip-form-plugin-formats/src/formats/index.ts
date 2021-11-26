import color from './color'
import dateTime from './dateTime'

export type formatsName = 'date-time' | 'color'

export default {
  'date-time': dateTime,
  color: color,
}
