import { SerializedStyles } from '@emotion/react'

export default interface TestimonialsTokens {
  // heading
  tstCardHeadingFontStack: SerializedStyles | undefined
  tstCardHeadingSizeMobile: string
  tstCardHeadingSizeDesktop: string
  tstCardHeadingLineHeight: string
  tstCardHeadingLetterSpacing: string
  tstCardHeadingTextTransform: string
  tstCardHeadingColour: string
  // date
  tstCardDateFontStack: SerializedStyles | undefined
  tstCardDateSizeMobile: string
  tstCardDateSizeDesktop: string
  tstCardDateLineHeight: string
  tstCardDateLetterSpacing: string
  tstCardDateTextTransform: string
  tstCardDateColour: string
  // text
  tstCardTextFontStack: SerializedStyles | undefined
  tstCardTextSizeMobile: string
  tstCardTextSizeDesktop: string
  tstCardTextLineHeight: string
  tstCardTextLetterSpacing: string
  tstCardTextColour: string
  // name
  tstCardNameFontStack: SerializedStyles | undefined
  tstCardNameSizeMobile: string
  tstCardNameSizeDesktop: string
  tstCardNameLineHeight: string
  tstCardNameLetterSpacing: string
  tstCardNameTextTransform: string
  tstCardNameColour: string
  // region (address/state)
  tstCardRegionFontStack: SerializedStyles | undefined
  tstCardRegionSizeMobile: string
  tstCardRegionSizeDesktop: string
  tstCardRegionLineHeight: string
  tstCardRegionLetterSpacing: string
  tstCardRegionColour: string
}
