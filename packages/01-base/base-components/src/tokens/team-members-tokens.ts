import { primaryFontStackBold, coloursBase, TeamMembersTokens } from 'base-components'

const letterSpacing = ''

const teamMembersTokens: TeamMembersTokens = {
  // Team member card
  tmcTextSizeMobile: '',
  tmcTextSizeDesktop: '13px',
  tmcTextLineHeight: '1.35em',
  tmcTextGaps: '5px',

  // Name
  tmcNameFontStack: primaryFontStackBold(),
  tmcNameSizeMobile: '13px',
  tmcNameSizeDesktop: '',
  tmcNameLetterSpacing: letterSpacing,
  tmcNameTextTransform: 'uppercase',
  tmcNameTextColour: '',

  // Phone Number - Key
  tmcKeyFontStack: undefined,
  tmcKeySizeMobile: '13px',
  tmcKeySizeDesktop: '',
  tmcKeyLetterSpacing: letterSpacing,
  tmcKeyTextTransform: '',

  // Phone Number - Value
  tmcPhoneFontStack: undefined,
  tmcPhoneSizeMobile: '',
  tmcPhoneSizeDesktop: '',
  tmcPhoneLetterSpacing: letterSpacing,
  tmcPhoneTextColour: coloursBase.black100,

  // Bio
  tmcBioFontStack: undefined,
  tmcBioSizeMobile: '',
  tmcBioSizeDesktop: '',
  tmcBioLetterSpacing: '',
  tmcBioTextColour: '',
}

export default teamMembersTokens
