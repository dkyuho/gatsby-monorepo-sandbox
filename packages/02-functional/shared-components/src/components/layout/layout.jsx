import React from 'react'
import PropTypes from 'prop-types'
import { Main } from 'base-components'

const Layout = ({ children, classNamePage }) => <Main classNamePage={classNamePage}>{children}</Main>

Layout.defaultProps = {
  classNamePage: '',
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  classNamePage: PropTypes.string,
}

export default Layout
