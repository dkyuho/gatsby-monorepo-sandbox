const gapTinyValue = 5
const gapSmallValue = 10
const gapMediumValue = 15
const gapLargeValue = 20
const gapExtraLargeValue = 25

const siteWideGaps = {
  // Gap Values
  gapTinyValue,
  gapSmallValue,
  gapMediumValue,
  gapLargeValue,
  gapExtraLargeValue,

  // Gaps
  gapTiny: `${gapTinyValue}px`,
  gapSmall: `${gapSmallValue}px`,
  gapMedium: `${gapMediumValue}px`,
  gapLarge: `${gapLargeValue}px`,
  gapExtraLarge: `${gapExtraLargeValue}px`,
} as const

export default siteWideGaps
