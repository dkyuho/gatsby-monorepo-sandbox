import { SerializedStyles } from '@emotion/react'

export default interface TeamMembersTokens {
  // Team member card
  tmcTextSizeMobile: string
  tmcTextSizeDesktop: string
  tmcTextLineHeight: string
  tmcTextGaps: string

  // Name
  tmcNameFontStack: SerializedStyles | undefined
  tmcNameSizeMobile: string
  tmcNameSizeDesktop: string
  tmcNameLetterSpacing: string
  tmcNameTextTransform: string
  tmcNameTextColour: string

  // Phone Number - Key
  tmcKeyFontStack: SerializedStyles | undefined
  tmcKeySizeMobile: string
  tmcKeySizeDesktop: string
  tmcKeyLetterSpacing: string
  tmcKeyTextTransform: string

  // Phone Number - Value
  tmcPhoneFontStack: SerializedStyles | undefined
  tmcPhoneSizeMobile: string
  tmcPhoneSizeDesktop: string
  tmcPhoneLetterSpacing: string
  tmcPhoneTextColour: string

  // Bio
  tmcBioFontStack: SerializedStyles | undefined
  tmcBioSizeMobile: string
  tmcBioSizeDesktop: string
  tmcBioLetterSpacing: string
  tmcBioTextColour: string
}
