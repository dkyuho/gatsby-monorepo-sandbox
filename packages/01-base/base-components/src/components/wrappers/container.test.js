/**
 * @jest-environment jsdom
 */
// https://jestjs.io/docs/configuration#testenvironment-string
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Container } from 'base-components'

describe('<Container />', () => {
  const customProps = {
    onClickEvent: jest.fn(),
    onKeyDownEvent: jest.fn(),
  }

  const setup = (props, content) => {
    const wrapper = render(<Container {...props}>{content}</Container>)
    expect(wrapper.container).toMatchSnapshot()
    return { wrapper, outerWrapper: wrapper.getByRole('presentation') }
  }

  it('correctly renders with inner content', () => {
    const { outerWrapper } = setup({}, 'Container Tree')
    expect(outerWrapper).toHaveTextContent('Container Tree')
  })

  it('correctly renders with inner element', () => {
    const wrapper = render(
      <Container>
        <div data-testid="inner-div">Inner div content</div>
      </Container>
    )
    expect(wrapper.container).toMatchSnapshot()
    expect(wrapper.getByTestId('inner-div').textContent).toBe('Inner div content')
  })

  it('calls custom onClick and onKeyDown function', () => {
    const { outerWrapper } = setup(customProps, 'Container Tree')
    fireEvent.click(outerWrapper)
    expect(customProps.onClickEvent).toHaveBeenCalledTimes(1)
    fireEvent.keyDown(outerWrapper)
    expect(customProps.onKeyDownEvent).toHaveBeenCalledTimes(1)
  })
})
