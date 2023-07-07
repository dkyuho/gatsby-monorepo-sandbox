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
  margin-right: ${gap || 25}px;
  margin-bottom: 10px;

  ${mediaQueryMin(breakpoints.md)} {
    margin-bottom: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }
`
const tabItemBase = () => css`
  ${buttonReset()};
  text-transform: uppercase;
  color: ${coloursBase.black75};
  margin: 0;
  display: block;
  background-color: transparent;
  position: relative;
  border-bottom: 2px solid ${coloursBase.black20};
  transition: border-bottom-color 150ms ease-in, color 150ms ease-in;
`
export const tabItemLarge = () => css`
  ${tabItemBase()};
  font-size: 15px;
  text-align: center;
  letter-spacing: 0.12em;
  padding: 0.8rem 0;
  margin-left: 16px;
`
export const tabItemSmall = () => css`
  ${tabItemBase()};
  font-size: 13px;
  letter-spacing: 0.12em;
  padding: 0.5rem 0;
`
export const tabItemActive = () => css`
  color: ${coloursTheme.brandPrimaryCol};
  border-bottom: 2px solid ${coloursTheme.brandPrimaryCol};
`
