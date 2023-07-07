import {
  primaryFontStackMedium,
  primaryFontStackBold,
  primaryFontStack,
  siteWideGaps,
  LocationsTokens,
  coloursTheme,
  coloursBase,
} from 'base-components'

const locationsTokens: LocationsTokens = {
  // Locations Card
  // Heading
  lcTabbedStandardWrapperPadTop: siteWideGaps.gapSmall,
  lcTabsHeadingFontStack: primaryFontStackBold(),
  lcTabsHeadingSizeMobile: '18px',
  lcTabsHeadingSizeDesktop: '',
  lcTabsHeadingLineHeight: '',
  lcTabsHeadingLetterSpacing: '',
  lcTabsHeadingTransform: '',
  lcTabsHeadingColour: '',
  // Tabs
  lcTabActiveSvgCol: coloursTheme.brandPrimaryCol,
  // Details Heading
  lcDetailsHeadingWrapperBgCol: coloursBase.black5,
  lcDetailsHeadingFontStack: primaryFontStackMedium(),
  lcDetailsHeadingSize: '14px',
  lcDetailsHeadingTransform: 'none',
  lcDetailsHeadingLetterSpacing: '',
  lcDetailsHeadingColour: '',
  // Details Text
  lcDetailsTextFontStack: primaryFontStack(), // value must be a fontStack mixin e.g. primaryFontStack()
  lcDetailsTextSize: '14px',
  lcDetailsTextTransform: '',
  lcDetailsTextLetterSpacing: '',
  lcDetailsTextColour: '',
  // Hours Heading
  lcHoursHeadingWrapperBgCol: coloursBase.black5,
  lcHoursHeadingFontStack: primaryFontStackMedium(),
  lcHoursHeadingSize: '14px',
  lcHoursHeadingTransform: 'none',
  lcHoursHeadingLetterSpacing: '',
  lcHoursHeadingColour: '',
  // Hours Text
  lcHoursTextFontStack: primaryFontStack(), // value must be a fontStack mixin e.g. primaryFontStack()
  lcHoursTextSize: '14px',
  lcHoursTextTransform: '',
  lcHoursTextLetterSpacing: '',
  lcHoursTextColour: '',
  lcHoursCurrentDayBgCol: coloursBase.black,
  lcHoursCurrentDayTextCol: coloursBase.white,
  // Note Text
  lcNoteWrapperBgCol: coloursBase.black,
  lcNoteTextCol: coloursBase.white,

  // MOBILE LOCATIONS
  lcMobileActionsCloseIconTextCol: coloursBase.white,
  lcMobileGridBgCol: coloursTheme.brandPrimaryCol,
  lcMobileGridBorderCol: coloursTheme.brandPrimaryColLight,
}

export default locationsTokens
