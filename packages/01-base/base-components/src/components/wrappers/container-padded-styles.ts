import { css } from '@emotion/react'
import { siteWide, siteWidePadding } from 'base-components'

const containerPaddedStyles = css`
  max-width: ${siteWide.contentWidthValue}px;
  margin: 0 auto;
  ${siteWidePadding()};
`
export default containerPaddedStyles
