import { css } from '@emotion/react'
import { cardWrapperTokens } from 'base-components'

const cardWrapper = () => css`
  background-color: ${cardWrapperTokens.cardBgCol};
  border: ${cardWrapperTokens.cardBorder};
  box-shadow: ${cardWrapperTokens.cardBoxShadow};
  border-radius: ${cardWrapperTokens.cardBorderRadius};
`
export default cardWrapper
