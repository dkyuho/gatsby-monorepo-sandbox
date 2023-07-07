import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children, onClick, type, buttonLinkCustom, ...props }) => (
  <button css={buttonLinkCustom} onClick={onClick} type={type === 'submit' ? 'submit' : 'button'} {...props}>
    {children}
  </button>
)

Button.defaultProps = {
  onClick: () => null,
  type: 'button',
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
}

export default Button
