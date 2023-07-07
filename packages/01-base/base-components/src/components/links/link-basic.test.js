/**
 * @jest-environment jsdom
 */
// https://jestjs.io/docs/configuration#testenvironment-string
import React from 'react'
import { render } from '@testing-library/react'
import { LinkBasic } from 'base-components'

describe('<LinkBasic />', () => {
  const internalLink = {
    to: '/test-url',
  }
  const externalLink = {
    to: 'www.google.com',
  }
  const customProps = {
    'custom-prop': 'custom-prop',
  }

  const setup = (props) => {
    const wrapper = render(<LinkBasic {...props}>Link Gatsby</LinkBasic>)
    expect(wrapper.container).toMatchSnapshot()
    return { wrapper, gatsbyLink: wrapper.queryByTestId('gatsby-link') }
  }

  it('matches basic snapshot', () => {
    const { gatsbyLink } = setup(internalLink)
    expect(gatsbyLink).toHaveTextContent('Link Gatsby')
    expect(gatsbyLink).toBeEnabled()
  })

  it('matches snapshot with external links', () => {
    const { wrapper, gatsbyLink } = setup(externalLink)
    expect(gatsbyLink).not.toBeInTheDocument()
    const linkElement = wrapper.queryByText('Link Gatsby')
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toBeEnabled()
  })

  it('matches snapshot with custom props', () => {
    const { gatsbyLink } = setup({ ...internalLink, ...customProps })
    expect(gatsbyLink).toHaveTextContent('Link Gatsby')
    expect(gatsbyLink).toHaveAttribute('custom-prop', customProps['custom-prop'])
  })
})
