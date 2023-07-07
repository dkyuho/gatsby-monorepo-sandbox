import { css } from '@emotion/react'
import {
  coloursBase,
  cardWrapper,
  teamMembersTokens,
  pagesTokens,
  mediaQueryMin,
  breakpoints,
  buttonsTokens,
} from 'base-components'

const contentPaddingSmall = `10px`
const contentPaddingMedium = `15px`
const contentPaddingLarge = `20px`

export const teamMembersCardWrapperStyles = css`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 0;
  ${cardWrapper()};

  // add gap between team members on Non Standard Meet the Team Page
  // Gap is handled on Standard Pages in global-css.jsx
  .classPageNonStandard & {
    + .classStandardComponent {
      margin-block-start: ${pagesTokens.componentsGapSm};
    }
  }
`
export const tmCardImageWrapperStyles = css`
  padding: ${contentPaddingSmall};
  width: 40%;
  max-width: 220px;

  ${mediaQueryMin(breakpoints.md)} {
    width: 30%;
    padding: ${contentPaddingMedium} ${contentPaddingSmall} ${contentPaddingMedium} ${contentPaddingMedium};
  }

  ${mediaQueryMin(breakpoints.lg)} {
    width: 25%;
    padding: ${contentPaddingLarge} ${contentPaddingSmall} ${contentPaddingLarge} ${contentPaddingLarge};
  }
`
export const tmCardIlbImagesWrapperStyles = css`
  overflow: hidden;
  border-radius: 150px;
  border: 1px solid ${coloursBase.black8};
`
export const tmCardImageStyles = css``

export const tmCardDetailsWrapperStyles = css`
  padding: ${contentPaddingSmall} ${contentPaddingSmall} ${contentPaddingSmall} ${contentPaddingMedium};
  width: 60%;
  max-width: 600px;

  ${mediaQueryMin(breakpoints.md)} {
    width: 70%;
    padding: ${contentPaddingMedium} ${contentPaddingSmall} ${contentPaddingMedium} ${contentPaddingMedium};
  }

  ${mediaQueryMin(breakpoints.lg)} {
    width: 75%;
    padding: ${contentPaddingLarge} ${contentPaddingSmall} ${contentPaddingLarge} ${contentPaddingMedium};
  }

  * + * {
    margin-top: ${teamMembersTokens.tmcTextGaps};
  }

  .classTmCardTextKey {
    ${teamMembersTokens.tmcKeyFontStack}
    font-size: ${teamMembersTokens.tmcKeySizeMobile};
    letter-spacing: ${teamMembersTokens.tmcKeyLetterSpacing};
    text-transform: ${teamMembersTokens.tmcKeyTextTransform};

    ${mediaQueryMin(breakpoints.lg)} {
      font-size: ${teamMembersTokens.tmcKeySizeDesktop};
    }
  }
`
export const tmCardTextStyles = css`
  font-size: ${teamMembersTokens.tmcTextSizeMobile};
  line-height: ${teamMembersTokens.tmcTextLineHeight};
  margin-bottom: 0;

  ${mediaQueryMin(breakpoints.lg)} {
    font-size: ${teamMembersTokens.tmcTextSizeDesktop};
  }
`
export const tmCardTextNameStyles = css`
  ${teamMembersTokens.tmcNameFontStack};
  font-size: ${teamMembersTokens.tmcNameSizeMobile};
  letter-spacing: ${teamMembersTokens.tmcNameLetterSpacing};
  text-transform: ${teamMembersTokens.tmcNameTextTransform};
  color: ${teamMembersTokens.tmcNameTextColour};

  ${mediaQueryMin(breakpoints.lg)} {
    font-size: ${teamMembersTokens.tmcNameSizeDesktop};
  }
`
export const tmCardTextEmailStyles = css`
  .classTmCardTextKey {
    display: none;
  }
`
export const tmCardLinkPhoneStyles = css`
  ${teamMembersTokens.tmcPhoneFontStack};
  font-size: ${teamMembersTokens.tmcPhoneSizeMobile};
  letter-spacing: ${teamMembersTokens.tmcPhoneLetterSpacing};
  color: ${teamMembersTokens.tmcPhoneTextColour};

  ${mediaQueryMin(breakpoints.lg)} {
    font-size: ${teamMembersTokens.tmcPhoneSizeDesktop};
  }

  &:hover {
    text-decoration: none;
  }
`
export const tmCardDescriptionWrapperStyles = css`
  padding: 5px 0 0 0;
`
export const tmCardButtonWrapperStyles = css``

export const tmCardTextDescriptionStyles = css`
  ${teamMembersTokens.tmcBioFontStack};
  font-size: ${teamMembersTokens.tmcBioSizeMobile};
  line-height: ${teamMembersTokens.tmcTextLineHeight};
  letter-spacing: ${teamMembersTokens.tmcBioLetterSpacing};
  color: ${teamMembersTokens.tmcBioTextColour};

  ${mediaQueryMin(breakpoints.lg)} {
    font-size: ${teamMembersTokens.tmcBioSizeDesktop};
  }
`
export const tmCardAccordianReveal = css``

export const tmCardAccordianButtonStyles = css`
  ${buttonsTokens.teamMembersCardBtnVariant}
  ${buttonsTokens.teamMembersCardBtnSize}
`
