import React from 'react'
import { EmotionStyles } from 'base-components'

interface WrapperProps {
  children: React.ReactNode
  className?: string
  onClickEvent?: React.MouseEventHandler
  onKeyDownEvent?: React.KeyboardEventHandler
  wrapperCustom?: EmotionStyles
  domRef?: React.RefObject<HTMLDivElement>
  role?: 'button' | 'presentation'
}

const Wrapper = ({
  children,
  onClickEvent,
  onKeyDownEvent,
  className,
  wrapperCustom,
  domRef,
  role,
  ...props
}: WrapperProps) =>
  // Have to conditionally render because the linter throws an error when trying to set the role dynamically on the element
  role === 'button' ? (
    <div
      role="button"
      tabIndex={0}
      className={className}
      css={wrapperCustom}
      ref={domRef}
      {...props}
      onClick={onClickEvent}
      onKeyDown={onKeyDownEvent}
    >
      {children}
    </div>
  ) : (
    <div
      role="presentation"
      className={className}
      css={wrapperCustom}
      ref={domRef}
      {...props}
      onClick={onClickEvent}
      onKeyDown={onKeyDownEvent}
    >
      {children}
    </div>
  )

export default Wrapper
