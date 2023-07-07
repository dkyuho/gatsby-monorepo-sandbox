import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from 'base-components'
import { imContentStyles } from 'shared-components'

const ImContent = ({ children, imContentCustom }) => (
  <Wrapper className="classImContent" wrapperCustom={[imContentStyles, imContentCustom]}>
    {children}
  </Wrapper>
)

ImContent.defaultProps = {
  children: null,
}

ImContent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
}

export default ImContent
