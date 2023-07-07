import React from 'react'
import { EmotionStyles, wrapperPaddedStyles } from 'base-components'

interface WrapperPaddedProps {
  children: React.ReactNode
  wrapperPaddedCustom?: EmotionStyles
}

const WrapperPadded = ({ children, wrapperPaddedCustom }: WrapperPaddedProps) => (
  <div css={[wrapperPaddedStyles, wrapperPaddedCustom]}>{children}</div>
)

export default WrapperPadded
