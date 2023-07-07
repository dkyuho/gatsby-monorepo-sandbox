/*
  Gatsby Docs: https://www.gatsbyjs.com/docs/debugging-html-builds/#how-to-check-if-window-is-defined
  If the code is in the render function of a React.js component, move that code into a ... useEffect hook,
  which ensures the code doesn’t run unless it’s in the browser.
*/
import { useState, useEffect } from 'react'

export default () => {
  const [hasRendered, setHasRendered] = useState(false)

  useEffect(() => {
    setHasRendered(true)
  }, [])

  return hasRendered
}
