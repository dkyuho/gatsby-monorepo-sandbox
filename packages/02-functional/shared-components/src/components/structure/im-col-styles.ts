import { css } from '@emotion/react'
import { breakpoints, mediaQueryMin, mediaQueryMax, siteWideGaps, pagesTokens } from 'base-components'

const imColStyles = css`
  width: 100%;
  padding-right: ${siteWideGaps.gapMedium};
  padding-left: ${siteWideGaps.gapMedium};

  // add margin top to successive siblings for gap when stacked on smaller viewports only
  ${mediaQueryMax(breakpoints.xl)} {
    .classImRowTwoCol & {
      &:last-of-type {
        margin-block-start: ${pagesTokens.componentsGapLg};
      }
    }

    .classImRowThreeCol & {
      &:nth-of-type(2) {
        margin-block-start: ${pagesTokens.componentsGapLg};
      }

      &:last-of-type {
        margin-block-start: ${pagesTokens.componentsGapLg};
      }
    }
  }

  ${mediaQueryMin(breakpoints.xl)} {
    max-width: 50%;
    flex: 0 0 50%;

    .classImRowOneCol & {
      flex: 0 0 100%;
      max-width: 100%;
    }

    .classImRowOneCol.classTextOnly & {
      column-count: 2;
      break-inside: avoid;
      gap: ${pagesTokens.componentsGapLg};
    }

    .classImRowTwoCol & {
      &:first-of-type {
        max-width: 65%;
        flex: 0 0 65%;
      }

      &:last-of-type {
        max-width: 35%;
        flex: 0 0 35%;
      }
    }

    .classImRowThreeCol & {
      &:first-of-type {
        max-width: 30%;
        flex: 0 0 30%;
      }

      &:nth-of-type(2) {
        max-width: 40%;
        flex: 0 0 40%;
      }

      &:last-of-type {
        max-width: 30%;
        flex: 0 0 30%;
      }
    }
  }
`
export default imColStyles
