import React from 'react'
import { EmotionStyles, mainStyles } from 'base-components'

interface MainProps {
  children: React.ReactNode
  mainCustom?: EmotionStyles
  classNamePage?: string
}

const Main = ({ children, mainCustom, classNamePage, ...props }: MainProps) => (
  <main className={`classMain ${classNamePage}`} css={[mainStyles, mainCustom]} {...props}>
    {children}
  </main>
)

export default Main
