import React from 'react'
import { EmotionStyles, containerPaddedStyles } from 'base-components'

interface ContainerPaddedProps {
  children: React.ReactNode
  containerPaddedCustom?: EmotionStyles
}

const ContainerPadded = ({ children, containerPaddedCustom }: ContainerPaddedProps) => (
  <div css={[containerPaddedStyles, containerPaddedCustom]}>{children}</div>
)

export default ContainerPadded
