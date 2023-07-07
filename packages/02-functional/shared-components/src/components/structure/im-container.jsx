import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from 'base-components'
import { imContainerStyles } from 'shared-components'

const ImContainer = ({ children, imContainerCustom }) => (
  <Wrapper wrapperCustom={[imContainerStyles, imContainerCustom]}>{children}</Wrapper>
)

ImContainer.defaultProps = {
  children: null,
}

ImContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
}

export default ImContainer
