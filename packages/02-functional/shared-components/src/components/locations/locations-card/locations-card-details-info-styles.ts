import { css } from '@emotion/react'
import { breakpoints, coloursBase, mediaQueryMin, locationsTokens } from 'base-components'

export const lcDetailsWrapperStyles = css`
  padding: 0 10px 10px 10px;

  ${mediaQueryMin(breakpoints.md)} {
    width: 50%;
  }

  ${mediaQueryMin(breakpoints.lg)} {
    width: 35%;
  }

  ${mediaQueryMin(breakpoints.xl)} {
    .classTwoColRight &,
    .classImRowThreeCol & {
      width: 100%;
    }
  }

  .classMultipleCards & {
    width: 100%;
  }
`
export const lcDetailsInfoWrapperStyles = css`
  margin: 10px 0;
`

export const lcDetailsTextStyles = css`
  ${locationsTokens.lcDetailsTextFontStack};
  font-size: ${locationsTokens.lcDetailsTextSize};
  text-transform: ${locationsTokens.lcDetailsTextTransform};
  letter-spacing: ${locationsTokens.lcDetailsTextLetterSpacing};
  color: ${locationsTokens.lcDetailsTextColour};
  text-align: center;
  margin-bottom: 5px;

  &.classEmailAddress {
    word-break: break-all;
  }
`
export const lcDetailsAddressTextStyles = css`
  margin-right: 2px;

  &:last-of-type {
    margin-right: 0;
  }
`
export const lcDetailsPhoneLinkStyles = css`
  color: ${coloursBase.black100};

  &:hover {
    text-decoration: none;
  }
`
