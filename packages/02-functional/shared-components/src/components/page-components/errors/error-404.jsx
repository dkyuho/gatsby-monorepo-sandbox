import React from 'react'
import { navigate } from 'gatsby'
import { ContainerPadded, LinkBasic, Wrapper, Svgs } from 'base-components'
import {
  Button,
  errorCodeWrapperStyles,
  errorContainerStyles,
  errorCodeStyles,
  errorTextWrapperStyles,
  errorHeadingStyles,
  errorSubHeadingStyles,
  errorLinkWrapperStyles,
  errorLinkStyles,
  errorLinkIconArrowStyles,
  errorLinkIconHomeStyles,
  errorLinkTextStyles,
} from 'shared-components'

const Error404 = ({
  errorCodeWrapperCustom,
  errorCodeCustom,
  errorHeadingCustom,
  errorSubHeadingCustom,
  errorLinkWrapperCustom,
  errorLinkCustom,
  errorLinkIconArrowCustom,
  errorLinkIconHomeCustom,
  errorLinkTextCustom,
}) => {
  const goBack = () => {
    navigate(-1)
  }

  return (
    <ContainerPadded containerPaddedCustom={errorContainerStyles}>
      <Wrapper wrapperCustom={[errorCodeWrapperStyles, errorCodeWrapperCustom]}>
        <p css={[errorCodeStyles, errorCodeCustom]}>
          <span className="classErrorCodeDigit">4</span>
          <span className="classErrorCodeDigit">0</span>
          <span className="classErrorCodeDigit">4</span>
        </p>
      </Wrapper>
      <div css={errorTextWrapperStyles}>
        <h4 css={[errorHeadingStyles, errorHeadingCustom]}>Oops, Sorry We Can’t Find That Page!</h4>
        <p css={[errorSubHeadingStyles, errorSubHeadingCustom]}>
          (Either something went wrong or the page doesn’t exist anymore.)
        </p>
      </div>
      <Wrapper wrapperCustom={[errorLinkWrapperStyles, errorLinkWrapperCustom]}>
        <Button onClick={goBack} buttonLinkCustom={[errorLinkStyles, errorLinkCustom]} aria-label="Go Back">
          <Svgs
            className="classIconSvg"
            css={[errorLinkIconArrowStyles, errorLinkIconArrowCustom]}
            name="iconArrowPointLeft"
          />
          <span css={[errorLinkTextStyles, errorLinkTextCustom]}>Go Back</span>
        </Button>
        <LinkBasic to="/" linkBasicCustom={[errorLinkStyles, errorLinkCustom]} aria-label="Home Page">
          <Svgs className="classIconSvg" css={[errorLinkIconHomeStyles, errorLinkIconHomeCustom]} name="iconHome" />
          <span css={[errorLinkTextStyles, errorLinkTextCustom]}>Home</span>
        </LinkBasic>
      </Wrapper>
    </ContainerPadded>
  )
}

export default Error404
