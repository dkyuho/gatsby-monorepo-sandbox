import React from 'react'
import { Link } from 'gatsby'
import { Layout, ImContent, ImContainer, ImRow, ImCol, TeamMembersTabbed } from 'shared-components'

const TeamMembersIndexPage = () => (
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
            <Link to="/locations">Locations</Link>
          </li>
          <li>
            <Link to="/testimonials">Testimonials</Link>
          </li>
        </ul>
        <ImRow className="classImRowOneCol">
          <ImCol className="classOneCol">
            <TeamMembersTabbed />
          </ImCol>
        </ImRow>
      </ImContainer>
    </ImContent>
  </Layout>
)

export default TeamMembersIndexPage
