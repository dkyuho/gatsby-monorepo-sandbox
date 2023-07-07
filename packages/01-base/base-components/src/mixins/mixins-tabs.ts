import { css } from '@emotion/react'
import { coloursBase, coloursTheme, breakpoints, mediaQueryMin, buttonReset } from 'base-components'

// e.g. ${tabbedList(`center`)};
export const tabbedList = (flexValue?: string) => css`
  display: flex;
  justify-content: ${flexValue || `flex-start`};
  margin: 0;
  padding: 20px 0;
  list-style: none;
  flex-wrap: wrap;
`
export const tabbedItem = (gap?: number) => css`
  margin-right: ${gap || 0}px;
  margin-bottom: 10px;

  ${mediaQueryMin(breakpoints.md)} {
    margin-bottom: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }
`
const tabItemBase = (textCol?: string, borderCol?: string) => css`
  ${buttonReset()};
  text-transform: uppercase;
  color: ${textCol || coloursBase.black};
  cursor: pointer;
  background-color: ${coloursBase.black10};
  display: block;
  transition: background-color 150ms ease-in, color 150ms ease-in, border-top-color 150ms ease-in, color 150ms ease-in;
  border-top: 2px solid ${borderCol || coloursBase.black10};
  outline: none;
`
export const tabItemLarge = (textCol?: string, borderCol?: string) => css`
  ${tabItemBase(textCol, borderCol)};
  font-size: 14px;
  padding: 10px 25px;
`
export const tabItemSmall = (textCol?: string, borderCol?: string) => css`
  ${tabItemBase(textCol, borderCol)};
  font-size: 13px;
  padding: 5px 16px;
`
export const tabItemActive = (textCol?: string, borderCol?: string, bgCol?: string) => css`
  color: ${textCol || coloursTheme.brandTextCol};
  background-color: ${bgCol || coloursBase.black20};
  border-top: 2px solid ${borderCol || coloursTheme.brandPrimaryCol};
`
