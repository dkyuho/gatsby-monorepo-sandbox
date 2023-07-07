import { css } from '@emotion/react'
import { siteWideGaps } from 'base-components'

export const siteWidePadding = () => css`
  padding: 0 ${siteWideGaps.gapMedium}; // gapMedium = 15px
`

export default siteWidePadding
