import React from 'react'
import { EmotionStyles, paragraphStyles } from 'base-components'

interface ParagraphProps {
  children: React.ReactNode
  paragraphCustom?: EmotionStyles
}

const Paragraph = ({ children, paragraphCustom, ...props }: ParagraphProps) => (
  <p css={[paragraphStyles, paragraphCustom]} {...props}>
    {children}
  </p>
)

export default Paragraph
