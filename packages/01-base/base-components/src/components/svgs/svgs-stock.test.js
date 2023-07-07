/**
 * @jest-environment jsdom
 */
// https://jestjs.io/docs/configuration#testenvironment-string
import React from 'react'
import { render } from '@testing-library/react'
import { SvgsStock } from 'base-components'

describe('<SvgsStock />', () => {
  const defaultProps = {
    name: 'stockIconFeatureYear',
  }
  const defaultViewBox = '0 0 20 20'

  const setup = (props) => {
    const wrapper = render(<SvgsStock {...props} testName="svg-element" />)
    expect(wrapper.container).toMatchSnapshot()
    return { wrapper, svgElement: wrapper.getByTestId('svg-element') }
  }

  it('correctly renders with default props', () => {
    const { svgElement } = setup(defaultProps)
    expect(svgElement).not.toHaveClass('testClassName')
    expect(svgElement).toHaveAttribute('viewBox', defaultViewBox)
    expect(svgElement.querySelector('desc')).toBeInTheDocument()
    expect(svgElement.querySelector('desc')).toHaveTextContent('Icon of a Calendar')
    expect(svgElement.querySelector('path')).toHaveAttribute(
      'd',
      'M14.26,10.86v4.26H10v-4.26H14.26z M13.38,1.5h1.71v1.71h0.84c0.45,0,0.85,0.17,1.19,0.52s0.52,0.75,0.52,1.19v11.86c0,0.45-0.17,0.85-0.52,1.19c-0.35,0.35-0.75,0.52-1.19,0.52H4.07c-0.48,0-0.89-0.17-1.21-0.52c-0.33-0.35-0.5-0.75-0.5-1.19V4.92c0-0.45,0.17-0.85,0.5-1.19c0.33-0.35,0.74-0.52,1.21-0.52H4.9V1.5h1.71v1.71h6.77V1.5z M15.93,16.79V7.47H4.07v9.32H15.93z'
    )
    expect(svgElement.querySelectorAll('path').length).toEqual(1)
  })

  it('correctly renders with custom props', () => {
    const { svgElement } = setup({
      className: 'testClassName',
      viewBox: '0 0 50 50',
      ...defaultProps,
      'custom-prop': 'mock-custom-prop',
    })
    expect(svgElement).toHaveClass('testClassName')
    expect(svgElement).toHaveAttribute('viewBox', '0 0 50 50')
    expect(svgElement.querySelector('desc')).toBeInTheDocument()
    expect(svgElement.querySelector('desc')).toHaveTextContent('Icon of a Calendar')
    expect(svgElement.querySelector('path')).toHaveAttribute('custom-prop', 'mock-custom-prop')
  })

  it('correctly renders with custom name', () => {
    const { svgElement } = setup({ name: 'stripeLogoOutlineDark' })
    expect(svgElement).not.toHaveClass('testClassName')
    expect(svgElement).toHaveAttribute('viewBox', '0 0 119 26')
    expect(svgElement.querySelector('desc')).toBeInTheDocument()
    expect(svgElement.querySelector('desc')).toHaveTextContent('Stripe Logo - Dark Outline')
    expect(svgElement.querySelectorAll('path').length).toEqual(3)
  })
})
