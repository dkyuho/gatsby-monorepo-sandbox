import { css } from '@emotion/react'
import { buttonsLinksTokens } from 'base-components'

export const linkBasicStyles = css`
  text-decoration: none;
  color: ${buttonsLinksTokens.linkBasicCol};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`
export const linkBasicExternalStyles = css``
