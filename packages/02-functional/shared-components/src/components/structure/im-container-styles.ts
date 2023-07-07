import { css } from '@emotion/react'
import { siteWide, coloursBase, siteWidePadding } from 'base-components'

const imContainerStyles = css`
  max-width: ${siteWide.contentWidthValue}px;
  margin: auto;
  ${siteWidePadding()};

  @media print {
    background-color: ${coloursBase.white};
  }
`
export default imContainerStyles
