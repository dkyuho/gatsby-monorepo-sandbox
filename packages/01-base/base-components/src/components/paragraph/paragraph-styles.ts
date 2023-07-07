import { css } from '@emotion/react'
import { coloursBase, primaryFontStack } from 'base-components'

const paragraphStyles = css`
  ${primaryFontStack()};
  font-size: 1rem;
  font-weight: 400;
  color: ${coloursBase.black};
`
export default paragraphStyles
