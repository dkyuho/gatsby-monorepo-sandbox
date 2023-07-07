import { SerializedStyles } from '@emotion/react'

export type EmotionStyles = SerializedStyles | (EmotionStyles | undefined)[]
