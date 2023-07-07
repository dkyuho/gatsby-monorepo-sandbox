import { css } from '@emotion/react'
import { coloursTheme, tabItemSmall, siteWideGaps } from 'base-components'

export const accordionRevealWrapperStyles = css`
  position: relative;

  &.classCollapsed .classCollapsedContent {
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 4rem;
      left: 0;
      background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.92) 80%);
    }
  }
`
export const accordionRevealHeadingWrapperStyles = css`
  padding: ${siteWideGaps.gapMedium};

  @media print {
    padding: 0 0 ${siteWideGaps.gapMedium} 0;
  }
`
export const accordionRevealHeadingStyles = css`
  font-size: 13px;
  margin-bottom: 5px;
`
export const accordionRevealPaneWrapperStyles = css``

export const accordionRevealTextWrapperStyles = css`
  position: relative;
  overflow: hidden;
  transition: max-height 200ms ease-in-out;
`
export const accordionButtonWrapperStyles = css`
  margin: 10px 0 5px;
`
export const accordionButtonStyles = css`
  ${tabItemSmall()};
  background-color: ${coloursTheme.brandSecondaryCol};
  outline: none;
  border: none;
  text-transform: none;
  transition: background-color 150ms ease-in-out;

  &:hover {
    background-color: ${coloursTheme.brandPrimaryCol};
  }
`
