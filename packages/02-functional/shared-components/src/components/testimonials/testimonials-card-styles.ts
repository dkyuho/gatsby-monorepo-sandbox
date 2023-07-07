import { css } from '@emotion/react'
import { cardWrapper, gridMaker, mediaQueryMin, breakpoints } from 'base-components'

export const tstCardWrapperStyles = css`
  width: 100%;
  max-width: 450px;

  ${mediaQueryMin(breakpoints.sm)} {
    ${gridMaker(2, 1, 1)};
  }

  ${mediaQueryMin(breakpoints.md)} {
    ${gridMaker(3, 1, 1)};
  }

  ${mediaQueryMin(breakpoints.xl)} {
    ${gridMaker(4, 1, 1)};
  }

  @supports (grid-area: auto) {
    &:nth-of-type(n) {
      margin: 0;
      width: auto;
    }
  }
`
export const tstCardItemStyles = css`
  height: 100%;
  ${cardWrapper()};
  margin-block-end: 5px; // extend height slightly to show box shadow bottom from cardWrapper()

  &:hover img {
    transform: scale(1.06);
  }
`
export const tstCardImageStyles = css`
  transition: transform 400ms ease-in-out;
`
