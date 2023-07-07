import { css } from '@emotion/react'

const buttonReset = () => css`
  background-color: transparent;
  border: none;
  outline: none;
  margin: 0; // removes 2px margin on mobile Chrome and Safari (tested on iOS) - affects phones only - not iPad. targeting with mobile chrome and safari media queries caused high specification overriding intended margins.
  padding: 0;
  cursor: pointer;

  &:hover,
  &:focus {
    outline: none;
  }
`
export default buttonReset
