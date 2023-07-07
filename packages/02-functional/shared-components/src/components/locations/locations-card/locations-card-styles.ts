import { css } from '@emotion/react'
import { cardWrapper, mediaQueryMin, breakpoints, coloursBase, siteWide } from 'base-components'

export const locationsCardWrapperStyles = css`
  ${cardWrapper()};
  max-width: ${siteWide.contentWidthPx};
  width: 100%;
  margin: auto;
  background-color: ${coloursBase.white};

  .classTwoColRight &,
  .classImRowThreeCol &,
  .classMultipleCards & {
    margin: 0;
  }

  &.classLocationsCardGroup {
    max-width: 100%;
  }

  /* reset cardWrapper mixin to prevent doubling up with locationsTabbedWrapperStyles */
  .classLocationsTabbedWrapper & {
    border: none;
    box-shadow: none;
  }
`
export const lcDetailsMapWrapperStyles = css`
  ${mediaQueryMin(breakpoints.md)} {
    flex-wrap: nowrap;
  }

  .classTwoColRight &,
  .classImRowThreeCol & {
    ${mediaQueryMin(breakpoints.xl)} {
      display: block;
    }
  }

  .classMultipleCards & {
    display: block;
  }
`
