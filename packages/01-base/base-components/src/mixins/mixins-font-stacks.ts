import { css } from '@emotion/react'

// example: ${primaryFontStack()};
export const primaryFontStack = () => css`
  font-family: var(--primaryFont, Helvetica), 'Helvetica', 'Arial', sans-serif;
  font-weight: normal;
`
export const primaryFontStackMedium = () => css`
  font-family: var(--primaryFontMedium, Helvetica), 'Helvetica', 'Arial', sans-serif;
  font-weight: normal;
`
export const primaryFontStackBold = () => css`
  font-family: var(--primaryFontBold, Helvetica), 'Helvetica', 'Arial', sans-serif;
  font-weight: normal;
`
// example: ${secondaryFontStack()};
export const secondaryFontStack = () => css`
  font-family: var(--secondaryFont, Helvetica), 'Helvetica', 'Arial', sans-serif;
  font-weight: normal;
`
export const secondaryFontStackMedium = () => css`
  font-family: var(--secondaryFontMedium, Helvetica), 'Helvetica', 'Arial', sans-serif;
  font-weight: normal;
`
export const secondaryFontStackBold = () => css`
  font-family: var(--secondaryFontBold, Helvetica), 'Helvetica', 'Arial', sans-serif;
  font-weight: normal;
`
