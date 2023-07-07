import React from 'react'
import PropTypes from 'prop-types'
import { LinkBasic } from 'base-components'

const ButtonLink = ({ children, to, buttonLinkCustom, ...props }) => (
  <LinkBasic to={to} linkBasicCustom={buttonLinkCustom} {...props}>
    {children}
  </LinkBasic>
)

ButtonLink.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default ButtonLink
