import { SerializedStyles } from '@emotion/react'

export default interface LocationsTokens {
  // Locations Card
  // Heading
  lcTabbedStandardWrapperPadTop: string
  lcTabsHeadingFontStack: SerializedStyles | undefined
  lcTabsHeadingSizeMobile: string
  lcTabsHeadingSizeDesktop: string
  lcTabsHeadingLineHeight: string
  lcTabsHeadingLetterSpacing: string
  lcTabsHeadingTransform: string
  lcTabsHeadingColour: string
  // Tab
  lcTabActiveSvgCol: string
  // Details Heading
  lcDetailsHeadingWrapperBgCol: string
  lcDetailsHeadingFontStack: SerializedStyles | undefined
  lcDetailsHeadingSize: string
  lcDetailsHeadingTransform: string
  lcDetailsHeadingLetterSpacing: string
  lcDetailsHeadingColour: string
  // Details Text
  lcDetailsTextFontStack: SerializedStyles | undefined // value must be a fontStack mixin e.g. primaryFontStack()
  lcDetailsTextSize: string
  lcDetailsTextTransform: string
  lcDetailsTextLetterSpacing: string
  lcDetailsTextColour: string
  // Hours Heading
  lcHoursHeadingWrapperBgCol: string
  lcHoursHeadingFontStack: SerializedStyles | undefined
  lcHoursHeadingSize: string
  lcHoursHeadingTransform: string
  lcHoursHeadingLetterSpacing: string
  lcHoursHeadingColour: string
  // Hours Text
  lcHoursTextFontStack: SerializedStyles | undefined // value must be a fontStack mixin e.g. primaryFontStack()
  lcHoursTextSize: string
  lcHoursTextTransform: string
  lcHoursTextLetterSpacing: string
  lcHoursTextColour: string
  lcHoursCurrentDayBgCol: string
  lcHoursCurrentDayTextCol: string
  // Note Text
  lcNoteWrapperBgCol: string
  lcNoteTextCol: string

  // MOBILE LOCATIONS
  lcMobileActionsCloseIconTextCol: string
  lcMobileGridBgCol: string
  lcMobileGridBorderCol: string
}
