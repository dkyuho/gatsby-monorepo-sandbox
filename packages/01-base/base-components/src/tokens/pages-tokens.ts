import { primaryFontStack, primaryFontStackBold, coloursTheme, siteWideGaps, PagesTokens } from 'base-components'

// Base

// Control component gaps and typography from the CMS on Standard Pages
const pagesTokens: PagesTokens = {
  cmsContentItemGaps: '16px',
  componentsGapSm: siteWideGaps.gapLarge,
  componentsGapLg: siteWideGaps.gapExtraLarge,
  // CMS HTML Headings
  cmsHeadingFontStack: primaryFontStackBold(),
  cmsHeadingTransform: 'none',
  cmsHeadingColour: coloursTheme.brandSecondaryCol,
  // reset headings to user-agent style sheet sizes
  cmsHeadingSize1: '2em',
  cmsHeadingSize2: '1.5em',
  cmsHeadingSize3: '1.17em',
  cmsHeadingSize4: '1em',
  cmsHeadingSize5: '0.83em',
  cmsHeadingSize6: '0.67em',
  // CMS HTML Text
  cmsTextFontStack: primaryFontStack(),
  cmsTextSize: '16px',
  cmsTextLineHeight: '1.5',
  cmsTextColour: coloursTheme.brandSecondaryCol,
  // CMS HTML Other
  hrBorderColor: coloursTheme.brandSecondaryCol,
  hrBorderWidth: '1px',
  hrBorderStyle: 'solid',
}

export default pagesTokens
