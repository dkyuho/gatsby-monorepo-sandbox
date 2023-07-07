import React from 'react'
import { Link } from 'gatsby'
import { LocationsTabbed, Layout, ImContent, ImContainer, ImRow, ImCol } from 'shared-components'

const LocationsPage = () => (
  <Layout classNamePage="classPageNonStandard classPageTeamMembersIndex">
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
            <Link to="/testimonials">Testimonials</Link>
          </li>
        </ul>
        <ImRow className="classImRowOneCol">
          <ImCol className="classOneCol">
            <LocationsTabbed />
          </ImCol>
        </ImRow>
      </ImContainer>
    </ImContent>
  </Layout>
)

export default LocationsPage
