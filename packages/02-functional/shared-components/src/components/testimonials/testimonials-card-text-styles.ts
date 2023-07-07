import { css } from '@emotion/react'
import { coloursBase, mediaQueryMin, breakpoints, testimonialsTokens } from 'base-components'

export const tstCardTextWrapper = css`
  padding: 1rem;

  .classTstText:first-of-type {
    margin-top: 0;
  }
`
export const tstCardHeadingStyles = css`
  ${testimonialsTokens.tstCardHeadingFontStack};
  font-size: ${testimonialsTokens.tstCardHeadingSizeMobile};
  line-height: ${testimonialsTokens.tstCardHeadingLineHeight};
  letter-spacing: ${testimonialsTokens.tstCardHeadingLetterSpacing};
  text-transform: ${testimonialsTokens.tstCardHeadingTextTransform};
  color: ${testimonialsTokens.tstCardHeadingColour};
  margin: 0;

  ${mediaQueryMin(breakpoints.lg)} {
    font-size: ${testimonialsTokens.tstCardHeadingSizeDesktop};
  }
`
export const tstCardTextDateStyles = css`
  ${testimonialsTokens.tstCardDateFontStack};
  font-size: ${testimonialsTokens.tstCardDateSizeMobile};
  line-height: ${testimonialsTokens.tstCardDateLineHeight};
  letter-spacing: ${testimonialsTokens.tstCardDateLetterSpacing};
  text-transform: ${testimonialsTokens.tstCardDateTextTransform};
  color: ${testimonialsTokens.tstCardDateColour};
  margin: 0.25rem 0 0 0;

  ${mediaQueryMin(breakpoints.lg)} {
    font-size: ${testimonialsTokens.tstCardDateSizeDesktop};
  }
`
export const tstCardTextStyles = css`
  ${testimonialsTokens.tstCardTextFontStack};
  font-size: ${testimonialsTokens.tstCardTextSizeMobile};
  line-height: ${testimonialsTokens.tstCardTextLineHeight};
  letter-spacing: ${testimonialsTokens.tstCardTextLetterSpacing};
  color: ${testimonialsTokens.tstCardTextColour};
  margin: 0.7rem 0 0 0;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${coloursBase.black25};

  ${mediaQueryMin(breakpoints.lg)} {
    font-size: ${testimonialsTokens.tstCardTextSizeDesktop};
  }
`
export const tstCardTextNameStyles = css`
  ${testimonialsTokens.tstCardNameFontStack};
  font-size: ${testimonialsTokens.tstCardNameSizeMobile};
  line-height: ${testimonialsTokens.tstCardNameLineHeight};
  letter-spacing: ${testimonialsTokens.tstCardNameLetterSpacing};
  text-transform: ${testimonialsTokens.tstCardNameTextTransform};
  color: ${testimonialsTokens.tstCardNameColour};
  margin: 0.7rem 0 0 0;

  ${mediaQueryMin(breakpoints.lg)} {
    font-size: ${testimonialsTokens.tstCardNameSizeDesktop};
  }
`
export const tstCardTextRegionStyles = css`
  ${testimonialsTokens.tstCardRegionFontStack};
  font-size: ${testimonialsTokens.tstCardRegionSizeMobile};
  line-height: ${testimonialsTokens.tstCardRegionLineHeight};
  letter-spacing: ${testimonialsTokens.tstCardRegionLetterSpacing};
  color: ${testimonialsTokens.tstCardRegionColour};
  margin: 0.25rem 0 0 0;

  ${mediaQueryMin(breakpoints.lg)} {
    font-size: ${testimonialsTokens.tstCardRegionSizeDesktop};
  }
`
