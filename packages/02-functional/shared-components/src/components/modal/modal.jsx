import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom'
import { Heading4, Svgs, useHasRendered } from 'base-components'
import {
  modalWrapperStyles,
  modalContentStyles,
  modalHeadingWrapperStyles,
  modalHeadingStyles,
  modalButtonCloseWrapperStyles,
  modalCloseSvgStyles,
} from 'shared-components'

const Modal = ({
  children,
  modalShowed,
  closeModal,
  modalHeading,
  modalClassName,
  modalWrapperCustom,
  modalContentCustom,
  modalHeadingWrapperCustom,
  modalHeadingCustom,
  modalButtonCloseCustom,
  modalCloseSvgCustom,
}) => {
  const modalActiveClass = 'classModalActive'
  const hasRendered = useHasRendered()

  useEffect(() => {
    const handleKeyUp = (e) => {
      e.preventDefault()
      const { code } = e
      if (code === 'Escape') {
        closeModal()
      }
    }
    let modalExisted = false
    if (document.body.classList.contains(modalActiveClass)) modalExisted = true
    if (modalShowed) {
      document.body.classList.add(modalActiveClass)
    }
    window.addEventListener('keyup', handleKeyUp, true)
    return () => {
      if (!modalExisted) {
        document.body.classList.remove(modalActiveClass)
        if (document.body.classList.length === 0) {
          document.body.removeAttribute('class')
        }
      }
      window.removeEventListener('keyup', handleKeyUp, true)
    }
  }, [modalShowed, closeModal])

  return (
    hasRendered &&
    modalShowed &&
    createPortal(
      <div
        css={[modalWrapperStyles, modalWrapperCustom]}
        onClick={closeModal}
        onKeyDown={closeModal}
        role="button"
        tabIndex={0}
        className={modalClassName}
      >
        <div
          css={[modalContentStyles, modalContentCustom]}
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => e.stopPropagation()}
          role="button"
          tabIndex={0}
        >
          {modalHeading && (
            <div css={[modalHeadingWrapperStyles, modalHeadingWrapperCustom]}>
              <Heading4 heading4Custom={[modalHeadingStyles, modalHeadingCustom]}>{modalHeading}</Heading4>
            </div>
          )}
          <button
            type="button"
            aria-label="Close Modal"
            css={[modalButtonCloseWrapperStyles, modalButtonCloseCustom]}
            onClick={closeModal}
          >
            <Svgs className="classIconSvg" css={[modalCloseSvgStyles, modalCloseSvgCustom]} name="iconClose" />
          </button>
          {children}
        </div>
      </div>,
      document.body
    )
  )
}

Modal.defaultProps = {
  modalHeading: null,
  modalClassName: null,
}

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  modalShowed: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  modalHeading: PropTypes.string,
  modalClassName: PropTypes.string,
}

export default Modal
