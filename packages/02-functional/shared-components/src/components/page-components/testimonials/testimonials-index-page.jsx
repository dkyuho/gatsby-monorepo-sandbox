import React from 'react'
import { Link } from 'gatsby'
import { Layout, ImContent, ImContainer, ImRow, ImCol, TestimonialsGrid } from 'shared-components'

const TestimonialsIndexPage = () => (
  <Layout classNamePage="classPageNonStandard classPageTestimonialsIndex">
    <ImContent>
      <ImContainer>
        <ul>
          <h3>Navigation</h3>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/privacy">Privacy</Link>
          </li>
          <li>
            <Link to="/teams">Teams</Link>
          </li>
          <li>
            <Link to="/locations">Locations</Link>
          </li>
        </ul>
        <ImRow className="classImRowOneCol">
          <ImCol className="classOneCol">
            <TestimonialsGrid />
          </ImCol>
        </ImRow>
      </ImContainer>
    </ImContent>
  </Layout>
)

export default TestimonialsIndexPage
