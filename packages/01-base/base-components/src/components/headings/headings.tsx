import React from 'react'
import {
  EmotionStyles,
  heading1Styles,
  heading2Styles,
  heading3Styles,
  heading4Styles,
  heading5Styles,
  heading6Styles,
} from 'base-components'

interface HeadingProps {
  children: React.ReactNode
}
interface Heading1Props extends HeadingProps {
  heading1Custom?: EmotionStyles
}
interface Heading2Props extends HeadingProps {
  heading2Custom?: EmotionStyles
}
interface Heading3Props extends HeadingProps {
  heading3Custom?: EmotionStyles
}
interface Heading4Props extends HeadingProps {
  heading4Custom?: EmotionStyles
}
interface Heading5Props extends HeadingProps {
  heading5Custom?: EmotionStyles
}
interface Heading6Props extends HeadingProps {
  heading6Custom?: EmotionStyles
}

export const Heading1 = ({ children, heading1Custom, ...props }: Heading1Props) => (
  <h1 css={[heading1Styles, heading1Custom]} {...props}>
    {children}
  </h1>
)
export const Heading2 = ({ children, heading2Custom, ...props }: Heading2Props) => (
  <h2 css={[heading2Styles, heading2Custom]} {...props}>
    {children}
  </h2>
)
export const Heading3 = ({ children, heading3Custom, ...props }: Heading3Props) => (
  <h3 css={[heading3Styles, heading3Custom]} {...props}>
    {children}
  </h3>
)
export const Heading4 = ({ children, heading4Custom, ...props }: Heading4Props) => (
  <h4 css={[heading4Styles, heading4Custom]} {...props}>
    {children}
  </h4>
)
export const Heading5 = ({ children, heading5Custom, ...props }: Heading5Props) => (
  <h5 css={[heading5Styles, heading5Custom]} {...props}>
    {children}
  </h5>
)
export const Heading6 = ({ children, heading6Custom, ...props }: Heading6Props) => (
  <h6 css={[heading6Styles, heading6Custom]} {...props}>
    {children}
  </h6>
)
