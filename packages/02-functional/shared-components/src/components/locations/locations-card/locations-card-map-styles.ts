import { css } from '@emotion/react'
import { mediaQueryMin, breakpoints, buttonsTokens } from 'base-components'

const mapHeight = '300'
const cardVerticalMapHeight = '180'

export const lcMapWrapperStyles = css`
  display: flex;
  height: ${mapHeight}px;

  ${mediaQueryMin(breakpoints.md)} {
    height: 100%;
  }

  .classTwoColRight &,
  .classImRowThreeCol & {
    ${mediaQueryMin(breakpoints.xl)} {
      height: ${cardVerticalMapHeight}px;
    }
  }

  .classMultipleCards & {
    height: ${cardVerticalMapHeight}px;
  }
`
export const lcMapColWrapperStyles = css`
  position: relative;

  ${mediaQueryMin(breakpoints.md)} {
    width: 50%;
  }

  ${mediaQueryMin(breakpoints.lg)} {
    width: 65%;
  }

  .classTwoColRight &,
  .classImRowThreeCol & {
    ${mediaQueryMin(breakpoints.xl)} {
      width: 100%;
    }
  }

  .classMultipleCards & {
    width: 100%;
  }
`
export const lcMapLinkWrapperStyles = css`
  position: absolute;
  width: 100%;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0 10px 0;
`
export const lcMapLinkDirectionsStyles = css``
export const lcMapLinkBtnStyles = css`
  ${buttonsTokens.locationsCardMapBtnVariant};
  ${buttonsTokens.locationsCardMapBtnSize};
`
