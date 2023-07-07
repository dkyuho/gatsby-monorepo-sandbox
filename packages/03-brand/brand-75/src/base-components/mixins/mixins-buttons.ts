import { css } from '@emotion/react'
import { primaryFontStack, buttonsLinksTokens, zindex, buttonReset, linkReset } from 'base-components'

export const buttonPrimary = () => css`
  ${buttonReset()};
  ${linkReset()};
  ${primaryFontStack()};
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  text-align: center;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
  color: ${buttonsLinksTokens.buttonPrimaryTextCol};
  display: inline-block;
  border: 0;
  border-radius: 25px;
  position: relative;
  background-color: ${buttonsLinksTokens.buttonPrimaryBgCol};
  transition: background-color 150ms ease-in-out;
  margin: 0;
  min-width: 150px;

  &:hover {
    text-decoration: none;
    color: ${buttonsLinksTokens.buttonPrimaryHoverTextCol};
    background-color: ${buttonsLinksTokens.buttonPrimaryHoverBgCol};
  }
`
export const buttonSecondary = () => css`
  ${buttonPrimary()};
  color: ${buttonsLinksTokens.buttonSecondaryTextCol};
  background-color: ${buttonsLinksTokens.buttonSecondaryBgCol};

  &:hover {
    color: ${buttonsLinksTokens.buttonSecondaryHoverTextCol};
    background-color: ${buttonsLinksTokens.buttonSecondaryHoverBgCol};
  }
`
export const buttonOutline = () => css`
  ${buttonPrimary()};
  color: ${buttonsLinksTokens.buttonOutlineTextCol};
  background: none;
  box-shadow: inset 0px 0px 0px 2px ${buttonsLinksTokens.buttonOutlineBorderCol}; /* use inset box-shadow instead of border to avoid larger element than non-border buttons */
  transition: color 150ms ease-in-out, box-shadow 150ms ease-in-out, background-color 150ms ease-in-out;

  &:hover {
    color: ${buttonsLinksTokens.buttonOutlineHoverTextCol};
    background-color: ${buttonsLinksTokens.buttonOutlineHoverBgCol};
    box-shadow: inset 0px 0px 0px 1px ${buttonsLinksTokens.buttonOutlineHoverBorderCol}; /* use inset box-shadow instead of border to avoid larger element than non-border buttons */
  }
`
export const buttonSizeLarge = () => css`
  padding: 9px 18px;
`
// mainly used on accessories card add/remove button
export const buttonSizeSmall = () => css`
  font-size: 10px;
  padding: 5px 10px 5px 10px;
`
export const buttonCloseSecondary = () => css`
  z-index: ${zindex.modal.close};
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: transparent;
  transition: background-color 150ms ease-in-out;
  border: 0;
`
export const buttonStickyLeftRight = () => css`
  ${buttonReset()}
  position: fixed;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  top: 50%;
  left: 0;
  transform: translateX(-100%);
  padding: 10px;
  border-radius: 0 25px 25px 0;
  visibility: hidden;
  z-index: ${zindex.surface};
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  transition: transform 250ms ease-in-out, visibility 250ms ease-in-out;

  @supports (backdrop-filter: saturate(180%) blur(6px)) {
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: saturate(180%) blur(5px);
  }

  &.classButtonIsRight {
    right: 0;
    left: auto;
    transform: translateX(100%);
    border-radius: 25px 0 0 25px;
  }

  &.classButtonShowed {
    transform: translateX(0);
    visibility: visible;
  }
`
