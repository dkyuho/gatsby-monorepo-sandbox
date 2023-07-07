import { useEffect } from 'react'

/**
 * ### useIntersectionObserver
 *
 * Desc: Hook to lazy load and conditionally render components
 *
 * ### How the hook works
 *
 * Add `useRef` to the wrapper of this component rather than the component itself
 * because if the state that controls the component is set to false, this component is not in the DOM, it can cause an error in `useIntersectionObserver`
 * To use this custom hook, invoke it with a target (ref) and a callback function
 *
 * @param {object} target the element being observed
 * @param {function} onIntersect The callback function that will fire when the element is visible.
 * @param {number} threshold default value is 0.1 means that when 10% of the target is visible within the viewport, our callback is invoked
 * @param {string} rootMargin Since root isn't defined IntersectionObserver defaults to the viewport.
 * @returns {void}
 */

const useIntersectionObserver = ({ target, onIntersect, threshold = 0.1, rootMargin = '0px' }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, {
      rootMargin,
      threshold,
    })

    const { current } = target
    observer.observe(current)

    return () => {
      observer.unobserve(current)
    }
  }, [target, threshold, rootMargin])
}
export default useIntersectionObserver
