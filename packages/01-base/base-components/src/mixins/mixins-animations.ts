import { css } from '@emotion/react'
import { fadeIn } from 'base-components'

// Example: ${lazyFadeIn(800)};
const lazyFadeIn = (duration?: number) => css`
  animation-name: ${fadeIn};
  animation-duration: ${duration || 400}ms;
  animation-fill-mode: forwards;
`
export default lazyFadeIn
