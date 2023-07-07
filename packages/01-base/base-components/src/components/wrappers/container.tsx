import React from 'react'
import { EmotionStyles, containerStyles } from 'base-components'

interface ContainerProps {
  children: React.ReactNode
  onClickEvent?: React.MouseEventHandler
  onKeyDownEvent?: React.KeyboardEventHandler
  containerCustom?: EmotionStyles
}

const Container = ({ children, onClickEvent, onKeyDownEvent, containerCustom }: ContainerProps) => (
  <div role="presentation" css={[containerStyles, containerCustom]} onClick={onClickEvent} onKeyDown={onKeyDownEvent}>
    {children}
  </div>
)

export default Container
