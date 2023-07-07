import { css } from '@emotion/react'
import { locationsTokens } from 'base-components'

export const lcDetailsHeadingwrapperStyles = css`
  background-color: ${locationsTokens.lcDetailsHeadingWrapperBgCol};
`
export const lcDetailsHeadingStyles = css`
  ${locationsTokens.lcDetailsHeadingFontStack};
  font-size: ${locationsTokens.lcDetailsHeadingSize};
  text-transform: ${locationsTokens.lcDetailsHeadingTransform};
  letter-spacing: ${locationsTokens.lcDetailsHeadingLetterSpacing};
  color: ${locationsTokens.lcDetailsHeadingColour};
  text-align: center;
  margin: 0;
  padding: 10px 5px;
`
