import { css } from '@emotion/react'
import { mediaQueryMin, breakpoints } from 'base-components'

const wrapperFlexStyles = css`
  ${mediaQueryMin(breakpoints.md)} {
    display: flex;
    flex-wrap: wrap;
  }
`
export default wrapperFlexStyles
