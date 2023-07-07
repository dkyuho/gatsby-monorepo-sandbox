import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from 'base-components'
import { imColStyles } from 'shared-components'

const ImCol = ({ children, className, imColCustom }) => (
  <Wrapper className={className} wrapperCustom={[imColStyles, imColCustom]}>
    {children}
  </Wrapper>
)

ImCol.defaultProps = {
  children: null,
  className: '',
}

ImCol.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  className: PropTypes.string,
}

export default ImCol
