import { SerializedStyles } from '@emotion/react'
// Control component gaps and typography from the CMS on Standard Pages
export default interface PagesTokens {
  cmsContentItemGaps: string
  componentsGapSm: string
  componentsGapLg: string
  // CMS HTML Headings
  cmsHeadingFontStack: SerializedStyles | undefined
  cmsHeadingTransform: string
  cmsHeadingColour: string
  // reset headings to user-agent style sheet sizes
  cmsHeadingSize1: string
  cmsHeadingSize2: string
  cmsHeadingSize3: string
  cmsHeadingSize4: string
  cmsHeadingSize5: string
  cmsHeadingSize6: string
  // CMS HTML Text
  cmsTextFontStack: SerializedStyles | undefined
  cmsTextSize: string
  cmsTextLineHeight: string
  cmsTextColour: string
  // CMS HTML Other
  hrBorderColor: string
  hrBorderWidth: string
  hrBorderStyle: string
}
