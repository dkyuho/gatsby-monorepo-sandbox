import { css } from '@emotion/react'
import { breakpoints } from 'base-components'

export const tstCardWrapperModalStyles = css`
  cursor: pointer;
`
export const tstCardModalContentStyles = css`
  @media screen and (min-width: ${breakpoints.md}px) and (max-height: 900px) {
    top: 0;
    padding: 20px;
  }

  // control height and add scroll-y
  @media screen and (min-width: ${breakpoints.md}px) and (max-height: 750px) {
    height: 100%;
    overflow-y: scroll;
  }
`
export const tstModalTextWrapperStyles = css`
  .classTstModalText:first-of-type {
    margin-top: 1rem;
  }
`
