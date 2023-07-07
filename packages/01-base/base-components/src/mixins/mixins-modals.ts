import { css } from '@emotion/react'
import { modalTokens, coloursBase, zindex } from 'base-components'

const modalBtnCloseWrapper = () => css`
  font-family: Arial;
  color: ${coloursBase.white};
  cursor: pointer;
  position: absolute;
  z-index: ${zindex.modal.close};
  background-color: ${modalTokens.modalBtnCloseWrapperBgCol};
  border: 0;
  right: 0;
  top: 0;
  width: ${modalTokens.modalBtnCloseSize};
  height: ${modalTokens.modalBtnCloseSize};
  padding: 4px;
  outline: none;
  transition: background-color 150ms ease-in-out;

  &:hover {
    background-color: ${modalTokens.modalBtnCloseWrapperHoverBgCol};
  }
`
export default modalBtnCloseWrapper
