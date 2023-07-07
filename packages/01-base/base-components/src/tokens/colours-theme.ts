import coloursBase from './colours-base'

const coloursTheme = {
  brandPrimaryCol: coloursBase.red,
  brandPrimaryColDark: `var(--primaryColourDark)`,
  brandPrimaryColLight: `var(--primaryColourLight)`,
  brandSecondaryCol: `var(--secondaryColour)`,
  brandSecondaryColDark: `var(--secondaryColourDark)`,
  brandSecondaryColLight: `var(--secondaryColourLight)`,
  brandTertiaryCol: `var(--tertiaryColour)`,
  brandTertiaryColDark: `var(--tertiaryColourDark)`,
  brandTertiaryColLight: `var(--tertiaryColourLight)`,
  brandTextCol: `var(--textPrimaryColour)`,
  brandTextSecondaryCol: `var(--textSecondaryColour)`,
  brandWildcardCol: `var(--wildcardColour)`,
} as const

export default coloursTheme
