import React, { useState, useEffect, useRef, useCallback } from 'react'
import PropTypes from 'prop-types'
import { Heading4 } from 'base-components'
import {
  Button,
  accordionRevealWrapperStyles,
  accordionRevealHeadingWrapperStyles,
  accordionRevealHeadingStyles,
  accordionRevealPaneWrapperStyles,
  accordionRevealTextWrapperStyles,
  accordionButtonWrapperStyles,
} from 'shared-components'

const AccordionReveal = ({
  headingText,
  buttonTextCollapsed,
  buttonTextExpanded,
  children,
  accordionRevealWrapperCustom,
  accordionRevealHeadingWrapperCustom,
  accordionRevealHeadingCustom,
  accordionRevealPaneWrapperCustom,
  accordionRevealTextWrapperCustom,
  accordionButtonWrapperCustom,
  buttonLinkCustom,
}) => {
  const collapsedHeight = 50
  const [isOpen, setOpen] = useState(false)
  const buttonText = isOpen ? 'View Less' : 'View More'
  const contentRef = useRef()

  const close = (height) => {
    contentRef.current.style.maxHeight = `${height}px`
    setTimeout(() => {
      contentRef.current.style.maxHeight = `${collapsedHeight}px`
      setOpen(false)
    }, 1)
  }

  const open = (height) => {
    contentRef.current.style.maxHeight = `${collapsedHeight}px`
    setTimeout(() => {
      contentRef.current.style.maxHeight = `${height}px`
      setOpen(true)
    }, 1)
  }

  const handleClick = () => {
    const { scrollHeight } = contentRef.current
    if (isOpen) {
      close(scrollHeight)
    } else {
      open(scrollHeight)
    }
  }

  // prevent function from changing on every re-render
  const handleTransition = useCallback(() => {
    if (isOpen) {
      contentRef.current.style.removeProperty('max-height')
    }
  }, [isOpen])

  // initialize maxHeight when component mount
  useEffect(() => {
    const content = contentRef.current
    content.style.maxHeight = `${collapsedHeight}px`
  }, [])

  // add and remove event listener when state isOpen change
  useEffect(() => {
    const content = contentRef.current
    content.addEventListener('transitionend', handleTransition)
    return () => {
      content.removeEventListener('transitionend', handleTransition)
    }
  }, [handleTransition])

  return (
    <div
      css={[accordionRevealWrapperStyles, accordionRevealWrapperCustom]}
      className={isOpen ? 'classExpanded' : 'classCollapsed'}
    >
      {headingText && (
        <div css={[accordionRevealHeadingWrapperStyles, accordionRevealHeadingWrapperCustom]}>
          <Heading4 heading4Custom={[accordionRevealHeadingStyles, accordionRevealHeadingCustom]}>
            {headingText}
          </Heading4>
        </div>
      )}
      <div css={[accordionRevealPaneWrapperStyles, accordionRevealPaneWrapperCustom]}>
        <div
          className="classCollapsedContent"
          css={[accordionRevealTextWrapperStyles, accordionRevealTextWrapperCustom]}
          ref={contentRef}
        >
          {children}
        </div>
        <div css={[accordionButtonWrapperStyles, accordionButtonWrapperCustom]}>
          <Button type="button" aria-label={buttonText} onClick={handleClick} buttonLinkCustom={buttonLinkCustom}>
            {isOpen ? buttonTextExpanded : buttonTextCollapsed}
          </Button>
        </div>
      </div>
    </div>
  )
}

AccordionReveal.defaultProps = {
  headingText: '',
  buttonTextCollapsed: 'View More',
  buttonTextExpanded: 'View Less',
}

AccordionReveal.propTypes = {
  headingText: PropTypes.string,
  buttonTextCollapsed: PropTypes.string,
  buttonTextExpanded: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
}

export default AccordionReveal
