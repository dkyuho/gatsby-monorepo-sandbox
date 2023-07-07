const red = '#dc0000'
const alertLight = '#eb0a1e' // used for callouts like the modal window close X Icon background colour
const alertDark = '#cd0000' // used for hover

const coloursBase = {
  red,
  alert: red,
  alertLight, // used for callouts like the modal window close X Icon background colour
  alertDark,
  greyContrastSafe: 'lch(37% 0 0 )', // Small Text Contrast Ratio 7.22 on white (AAA = 7.0)
  greyContrastSafeSm: 'lch(37% 0 0 )', // Small Text Contrast Ratio 7.22 on white (AAA = 7.0)
  greyContrastSafeLg: 'lch(49% 0 0 )', // Large Text Contrast Ratio 4.64 on white (AA = 4.5)
  ancapStarYellow: '#ffc20e',
  ancapStarGreen: '#54bd84',
  redDark: '#e64a19',
  bluePowder: '#0073ce', // used for stock promo labels
  lime: '#bada55', // used for stock promo labels
  purple: '#9c27b0', // used for stock promo labels
  orange: '#ff9800', // used for stock promo labels
  black3: 'lch(97% 0 0 )',
  black4: 'lch(96% 0 0 )',
  black5: 'lch(95% 0 0 )',
  black6: 'lch(94% 0 0 )',
  black7: 'lch(93% 0 0 )',
  black8: 'lch(92% 0 0 )',
  black9: 'lch(91% 0 0 )',
  black10: 'lch(90% 0 0 )',
  black12: 'lch(88% 0 0 )',
  black14: 'lch(86% 0 0 )',
  black15: 'lch(85% 0 0 )',
  black16: 'lch(84% 0 0 )',
  black17: 'lch(83% 0 0 )',
  black20: 'lch(80% 0 0 )',
  black25: 'lch(75% 0 0 )',
  black27: 'lch(73% 0 0 )',
  black30: 'lch(70% 0 0 )',
  black35: 'lch(65% 0 0 )',
  black40: 'lch(60% 0 0 )',
  black42: 'lch(58% 0 0 )',
  black43: 'lch(57% 0 0 )',
  black45: 'lch(55% 0 0 )',
  black50: 'lch(50% 0 0 )',
  black51: 'lch(49% 0 0 )', // Large Text Contrast Ratio 4.64 on white (AA = 4.5)
  black55: 'lch(45% 0 0 )',
  black60: 'lch(40% 0 0 )',
  black63: 'lch(37% 0 0 )', // Small Text Contrast Ratio 7.22 on white (AAA = 7.0)
  black65: 'lch(35% 0 0 )',
  black67: 'lch(33% 0 0 )',
  black70: 'lch(30% 0 0 )',
  black71: 'lch(29% 0 0 )',
  black75: 'lch(25% 0 0 )',
  black80: 'lch(20% 0 0 )',
  black82: 'lch(18% 0 0 )',
  black85: 'lch(15% 0 0 )',
  black87: 'lch(13% 0 0 )',
  black88: 'lch(12% 0 0 )',
  black89: 'lch(11% 0 0 )',
  black90: 'lch(10% 0 0 )',
  black92: 'lch(8% 0 0 )',
  black93: 'lch(7% 0 0 )',
  black94: 'lch(6% 0 0 )',
  black95: 'lch(5% 0 0 )',
  black97: 'lch(3% 0 0 )',
  black100: 'lch(0% 0 0 )',
  black: 'lch(0% 0 0 )',
  white: 'lch(100% 0 0 )',
} as const

export default coloursBase
