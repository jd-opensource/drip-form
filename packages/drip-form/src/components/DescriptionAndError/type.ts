import type { Description, TitleUi } from '@jdfed/utils'

export type DescriptionAndErrorType = {
  titleUi: TitleUi
  // 是否展示标题
  showTitle: boolean
  description: Description
  showError: boolean
  error: string
}
