export { default as FieldContainer } from './FieldContainer'
export { default as ObjectContainer } from './ObjectContainer'
export { default as ArrayContainer } from './ArrayContainer'

import FieldContainer from './FieldContainer'
import ObjectContainer from './ObjectContainer'
import ArrayContainer from './ArrayContainer'

const containerMap = {
  object: ObjectContainer,
  array: ArrayContainer,
  default: FieldContainer,
}

export default containerMap
