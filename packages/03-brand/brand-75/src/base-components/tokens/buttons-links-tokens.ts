import { coloursTheme, coloursBase, ButtonsLinksTokens } from 'base-components'

const buttonsLinksTokens: ButtonsLinksTokens = {
  // Primary Button
  buttonPrimaryBgCol: coloursTheme.brandPrimaryCol,
  buttonPrimaryTextCol: coloursBase.white,
  buttonPrimaryHoverBgCol: coloursTheme.brandPrimaryColDark,
  buttonPrimaryHoverTextCol: coloursBase.white,

  // Secondary Button
  buttonSecondaryBgCol: coloursBase.black75,
  buttonSecondaryTextCol: coloursBase.white,
  buttonSecondaryHoverBgCol: coloursBase.black100,
  buttonSecondaryHoverTextCol: coloursBase.white,

  // Outline Button
  buttonOutlineBorderCol: coloursBase.black75,
  buttonOutlineTextCol: coloursBase.black75,
  buttonOutlineHoverBgCol: coloursBase.black75,
  buttonOutlineHoverBorderCol: coloursBase.black75,
  buttonOutlineHoverTextCol: coloursBase.white,

  // Links
  linksTextCol: coloursTheme.brandTextCol,
  linkBasicCol: coloursTheme.brandPrimaryCol,
  linksPseudoTextCol: coloursTheme.brandPrimaryCol,

  // Button Scroll to Top
  buttonScrollToTopArrowFill: 'white',
  buttonScrollToTopTextFontStack: undefined,
  buttonScrollToTopTextSizeMd: '',
  buttonScrollToTopTextSizeLg: '',
  buttonScrollToTopTextLetterSpacing: '',
  buttonScrollToTopTextTextTransform: '',
  buttonScrollToTopTextTextColour: '',
  buttonScrollToTopTextMarginLeft: '5px',
}

export default buttonsLinksTokens
