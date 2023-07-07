import { css } from '@emotion/react'
import {
  mediaQueryMax,
  modalTokens,
  modalBtnCloseWrapper,
  breakpoints,
  siteWideGaps,
  coloursBase,
  zindex,
} from 'base-components'

export const modalWrapperStyles = css`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition: opacity 200ms;
  z-index: ${zindex.heaven};
  overflow-y: scroll;

  ${mediaQueryMax(breakpoints.md)} {
    overflow-y: hidden; // Hide on mobile to remove extra padding created by scroll
  }

  .classModalActive & {
    opacity: 1;
  }
`
export const modalContentStyles = css`
  position: relative;
  max-width: 700px;
  background-color: ${coloursBase.white};
  margin: auto 0; // prevents top of modal from leaking out of page in short viewports
  padding: ${modalTokens.modalBtnCloseSize};
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.3);
  z-index: ${zindex.modal.base};
  opacity: 0;
  transform: scale(0.9);
  transform-origin: center center;
  transition: opacity 200ms, transform 200ms;

  ${mediaQueryMax(breakpoints.md)} {
    max-height: 100%;
    overflow: auto;
  }

  .classModalActive & {
    transform: scale(1);
    opacity: 1;
  }
`
export const modalHeadingWrapperStyles = css`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${modalTokens.modalBtnCloseSize};
  background-color: ${modalTokens.modalHeadingWrapperBgCol};
`
export const modalHeadingStyles = css`
  ${modalTokens.modalHeadingFontStack};
  font-size: ${modalTokens.modalHeadingSize};
  letter-spacing: ${modalTokens.modalHeadingLetterSpacing};
  text-transform: ${modalTokens.modalHeadingTextTransform};
  color: ${coloursBase.white};
  margin: 0;
  padding-left: ${siteWideGaps.gapMedium};
`
export const modalButtonCloseWrapperStyles = css`
  ${modalBtnCloseWrapper()}
`
export const modalCloseSvgStyles = css`
  fill: ${modalTokens.modalBtnCloseSvgFill};
`
