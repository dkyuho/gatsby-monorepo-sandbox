import { css } from '@emotion/react'
import { pagesTokens } from 'base-components'

const imRowStyles = css`
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;

  // if a standard component is a sibling preceding imRowStyles add margin top to imRowStyles
  .classContentComponent + & {
    margin-top: ${pagesTokens.componentsGapLg};
  }
`
export default imRowStyles
