import { css } from '@emotion/react'
import { coloursTheme, coloursBase, breakpoints, mediaQueryMin } from 'base-components'

export const errorCodeWrapperStyles = css`
  text-align: center;
  margin: 15px 0 20px 0;

  ${mediaQueryMin(breakpoints.md)} {
    margin: 0 0 38px 0;
  }
`
export const errorContainerStyles = css`
  padding: 1rem;

  ${mediaQueryMin(breakpoints.md)} {
    padding: 9vw 1.5rem 9vw 1.5rem;
  }

  ${mediaQueryMin(breakpoints.lg)} {
    padding: 5rem 1.5rem 5rem 1.5rem;
  }
`
export const errorCodeStyles = css`
  font-size: 17vw;
  letter-spacing: -1px;
  line-height: 36vw;
  color: ${coloursBase.black};
  width: 36vw;
  height: 36vw;
  display: inline-block;
  margin: 0;
  border-radius: 50%;
  position: relative;

  ${mediaQueryMin(breakpoints.lg)} {
    font-size: 140px;
    line-height: 300px;
    width: 300px;
    height: 300px;
    letter-spacing: -5px;
  }

  &:before {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 36vw;
    height: 36vw;
    border: 2.5vw solid ${coloursTheme.brandPrimaryCol};
    border-radius: 50%;

    ${mediaQueryMin(breakpoints.lg)} {
      width: 300px;
      height: 300px;
      border: 18px solid ${coloursTheme.brandPrimaryCol};
      border-radius: 50%;
    }
  }
`
export const errorTextWrapperStyles = css`
  padding: 0;
`
export const errorHeadingStyles = css`
  font-size: 22px;
  text-align: center;
  text-transform: uppercase;
  color: ${coloursBase.black};
  margin: 10px 0;

  ${mediaQueryMin(breakpoints.md)} {
    font-size: 4vw;
  }

  ${mediaQueryMin(breakpoints.lg)} {
    font-size: 34px;
  }
`
export const errorSubHeadingStyles = css`
  font-size: 16px;
  text-align: center;
  color: ${coloursBase.black};
  margin: 0;

  ${mediaQueryMin(breakpoints.md)} {
    font-size: 2vw;
  }

  ${mediaQueryMin(breakpoints.lg)} {
    font-size: 20px;
  }
`
export const errorLinkWrapperStyles = css`
  text-align: center;
  margin-top: 20px;

  ${mediaQueryMin(breakpoints.md)} {
    margin-top: 48px;
  }
`
export const errorLinkStyles = css`
  font-size: 16px;
  text-transform: uppercase;
  text-decoration: none;
  color: ${coloursBase.white};
  margin: auto;
  height: 40px;
  border-radius: 20px;
  background-color: ${coloursTheme.brandPrimaryCol};
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.25);
  transition: background-color 150ms ease-in;
  padding: 2px 20px 0 20px;
  margin: 0 10px 15px 10px;
  display: inline-flex;
  align-items: center;

  ${mediaQueryMin(breakpoints.lg)} {
    font-size: 20px;
    height: 50px;
    border-radius: 25px;
    padding: 5px 25px 0 25px;
  }

  &:hover {
    text-decoration: none;
    color: #fff;
    background-color: ${coloursTheme.brandPrimaryCol};
  }
`
export const errorLinkIconArrowStyles = css`
  width: 27px;
  height: 27px;
  fill: #fff;
  margin-right: 9px;
  top: -3px;

  ${mediaQueryMin(breakpoints.lg)} {
    width: 31px;
    height: 31px;
  }
`
export const errorLinkIconHomeStyles = css`
  width: 27px;
  height: 27px;
  fill: #fff;
  margin-right: 9px;
  top: -3px;

  ${mediaQueryMin(breakpoints.lg)} {
    width: 31px;
    height: 31px;
  }
`

export const errorLinkTextStyles = css`
  position: relative;
  top: -3px;
`
