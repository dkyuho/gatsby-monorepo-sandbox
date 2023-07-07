import { SerializedStyles } from '@emotion/react'

export default interface ModalTokens {
  // Modals
  modalBgColor: string
  modalHeadingWrapperBgCol: string
  modalHeadingFontStack: SerializedStyles | undefined
  modalHeadingSize: string
  modalHeadingLetterSpacing: string
  modalHeadingTextTransform: string
  modalBtnCloseSize: string
  modalBtnCloseWrapperBgCol: string
  modalBtnCloseWrapperHoverBgCol: string
  modalBtnCloseSvgFill: string

  // Form Modal
  imFormModalMaxWidth: string
}
