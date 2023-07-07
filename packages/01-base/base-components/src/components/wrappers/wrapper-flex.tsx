import React from 'react'
import { EmotionStyles, wrapperFlexStyles } from 'base-components'

interface WrapperFlexProps {
  children: React.ReactNode
  className?: string
  wrapperFlexCustom?: EmotionStyles
  domRef?: React.RefObject<HTMLDivElement>
}

const WrapperFlex = ({ children, className, wrapperFlexCustom, domRef, ...props }: WrapperFlexProps) => (
  <div className={className} css={[wrapperFlexStyles, wrapperFlexCustom]} ref={domRef} {...props}>
    {children}
  </div>
)

export default WrapperFlex
