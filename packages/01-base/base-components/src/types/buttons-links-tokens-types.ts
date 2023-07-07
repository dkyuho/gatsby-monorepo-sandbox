import { SerializedStyles } from '@emotion/react'

export default interface ButtonsLinksTokens {
  // Primary Button
  buttonPrimaryBgCol: string
  buttonPrimaryTextCol: string
  buttonPrimaryHoverBgCol: string
  buttonPrimaryHoverTextCol: string

  // Secondary Button
  buttonSecondaryBgCol: string
  buttonSecondaryTextCol: string
  buttonSecondaryHoverBgCol: string
  buttonSecondaryHoverTextCol: string

  // Outline Button
  buttonOutlineBorderCol: string
  buttonOutlineTextCol: string
  buttonOutlineHoverBgCol: string
  buttonOutlineHoverBorderCol: string
  buttonOutlineHoverTextCol: string

  // Links
  linksTextCol: string
  linkBasicCol: string
  linksPseudoTextCol: string

  // Button Scroll to Top
  buttonScrollToTopArrowFill: string
  buttonScrollToTopTextFontStack: SerializedStyles | undefined
  buttonScrollToTopTextSizeMd: string
  buttonScrollToTopTextSizeLg: string
  buttonScrollToTopTextLetterSpacing: string
  buttonScrollToTopTextTextTransform: string
  buttonScrollToTopTextTextColour: string
  buttonScrollToTopTextMarginLeft: string
}
