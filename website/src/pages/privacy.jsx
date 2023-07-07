import React from 'react'
import { Link } from 'gatsby'
import { Layout, ImContainer, ImContent, ImRow, ImCol, PrivacyPage } from 'shared-components'

const HardcodedPrivacy = () => (
  <Layout classNamePage="classPageNonStandard classPagePrivacy">
    <ImContent>
      <ImContainer>
        <ul>
          <h3>Navigation</h3>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/locations">Locations </Link>
          </li>
          <li>
            <Link to="/teams">Teams</Link>
          </li>
          <li>
            <Link to="/testimonials">Testimonials</Link>
          </li>
        </ul>
        <ImRow className="classImRowOneCol classTextOnly">
          <ImCol>
            <PrivacyPage />
          </ImCol>
        </ImRow>
      </ImContainer>
    </ImContent>
  </Layout>
)

export default HardcodedPrivacy
