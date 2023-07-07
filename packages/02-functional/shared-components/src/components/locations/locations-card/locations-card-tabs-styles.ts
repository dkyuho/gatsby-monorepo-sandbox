import { css } from '@emotion/react'
import {
  coloursTheme,
  coloursBase,
  tabItemSmall,
  tabbedList,
  tabbedItem,
  tabItemActive,
  locationsTokens,
  mediaQueryMin,
  breakpoints,
} from 'base-components'

export const lcTabsHeaderWrapperStyles = css`
  .classSingleCard &,
  .classMultipleCards & {
    padding: 15px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export const lcTabsHeadingWrapperStyles = css``

export const lcTabsHeadingStyles = css`
  ${locationsTokens.lcTabsHeadingFontStack};
  font-size: ${locationsTokens.lcTabsHeadingSizeMobile};
  line-height: ${locationsTokens.lcTabsHeadingLineHeight};
  letter-spacing: ${locationsTokens.lcTabsHeadingLetterSpacing};
  text-align: center;
  text-transform: ${locationsTokens.lcTabsHeadingTransform};
  color: ${locationsTokens.lcTabsHeadingColour};
  margin: 0;
  padding: 0;

  ${mediaQueryMin(breakpoints.lg)} {
    font-size: ${locationsTokens.lcTabsHeadingSizeDesktop};
  }
`
export const lcTabsListStyles = css`
  ${tabbedList(`center`)};
`
export const lcTabItemStyles = css`
  ${tabbedItem()};
`
export const lcTabItemButtonStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  background: none;
  border: none;
  outline: none;
`
export const lcTabItemIconStyles = css`
  fill: none;
  stroke: ${coloursBase.black40};
  stroke-width: 1.5px;
  width: 32px;
  height: 32px;
  transition: stroke 150ms ease-in-out;
  margin: 0 0 10px 0;

  .classActiveDepartment &,
  .classDepartmentButton:hover & {
    stroke: ${locationsTokens.lcTabActiveSvgCol};
  }
`
export const lcTabItemIconTextStyles = css`
  ${tabItemSmall()};

  .classActiveDepartment &,
  .classDepartmentButton:hover & {
    ${tabItemActive()}
  }
`
export const lcTabSingleIconWrapperStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0 0 15px 0;
  flex-wrap: nowrap;

  .classSingleCard &,
  .classMultipleCards & {
    display: none;
  }
`
export const lcTabSingleItemIconStyles = css`
  fill: none;
  stroke: ${coloursTheme.brandPrimaryCol};
  stroke-width: 1.5px;
  width: 30px;
  height: 30px;
`
export const lcTabSingleItemIconTextStyles = css`
  text-transform: uppercase;
  font-size: 13px;
  color: ${coloursTheme.brandPrimaryCol};
  margin: 0;
`
