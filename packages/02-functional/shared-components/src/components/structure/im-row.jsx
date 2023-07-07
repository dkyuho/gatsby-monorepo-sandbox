import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from 'base-components'
import { imRowStyles } from 'shared-components'

const ImRow = ({ children, className, imRowCustom }) => (
  <Wrapper className={className} wrapperCustom={[imRowStyles, imRowCustom]}>
    {children}
  </Wrapper>
)

ImRow.defaultProps = {
  children: null,
  className: '',
}

ImRow.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  className: PropTypes.string,
}

export default ImRow
