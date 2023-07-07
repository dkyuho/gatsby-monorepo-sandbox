import { css } from '@emotion/react'
import { coloursBase } from 'base-components'

const mainStyles = css`
  width: 100%;
  background-color: ${coloursBase.black5};
  min-height: 100vh; // Set a rasonable default height so the page doesn't collapse to nothing when there's little content
`
export default mainStyles
