import { css } from '@emotion/react'
import { mediaQueryMin, breakpoints } from 'base-components'

export const tstGridWrapperStyles = css`
  display: flex;
  flex-wrap: wrap;

  @supports (grid-area: auto) {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr;

    ${mediaQueryMin(breakpoints.sm)} {
      grid-template-columns: repeat(2, 1fr);
    }

    ${mediaQueryMin(breakpoints.md)} {
      grid-template-columns: repeat(3, 1fr);
    }

    ${mediaQueryMin(breakpoints.xl)} {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`
export default tstGridWrapperStyles
