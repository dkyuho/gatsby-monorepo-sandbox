import { Link } from 'gatsby'
import React from 'react'
import { Layout, ImContent, ImContainer } from 'shared-components'

const Index = () => (
  <Layout classNamePage="classPageHome">
    <ImContent>
      <ImContainer>
        <ul>
          <h3>Navigation</h3>
          <li>
            <Link to="/locations">Locations</Link>
          </li>
          <li>
            <Link to="/privacy">Privacy</Link>
          </li>
          <li>
            <Link to="/teams">Teams</Link>
          </li>
          <li>
            <Link to="/testimonials">Testimonials</Link>
          </li>
        </ul>
      </ImContainer>
    </ImContent>
  </Layout>
)

export default Index
