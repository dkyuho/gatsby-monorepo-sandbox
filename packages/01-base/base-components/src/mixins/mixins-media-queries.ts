// Note for mediaQuery mixins: do not add "css" after "return" like other mixins.
// If "return css" is used for mediaQuery mixin then a semi-colon will be auto-appended by the editor, resulting in invalid media query

// e.g.  ${mediaQueryMax(breakpoints.md2)} { ... }
// e.g.  ${mediaQueryMax(450)} { ... }
export const mediaQueryMin = (breakpoint: number) => `
  @media screen and (min-width: ${breakpoint}px)
`
export const mediaQueryMax = (breakpoint: number) => `
  @media screen and (max-width: ${breakpoint - 1}px)
`
export const mediaQueryBetween = (breakpointMin: number, breakpointMax: number) => `
  @media screen and (min-width: ${breakpointMin}px) and (max-width: ${breakpointMax - 1}px)
`
// Remove px from mixins
// e.g.  ${mediaQueryMinPx(vehiclesTokens.vtctFeatureMaxWidth)} { ... }
// e.g.  ${mediaQueryMax(1200px)} { ... }
export const mediaQueryMinPx = (breakpoint: number) => `
  @media screen and (min-width: ${breakpoint})
`
export const mediaQueryMaxPx = (breakpoint: number) => `
  @media screen and (max-width: ${breakpoint - 1})
`
export const mediaQueryBetweenPx = (breakpointMin: number, breakpointMax: number) => `
  @media screen and (min-width: ${breakpointMin}) and (max-width: ${breakpointMax - 1})
`
// Media query for determining if the device uses a primary pointer device capable of hover.
// A phone/tablet will typically return false unless the user has a mouse or touchpad.
// A desktop with a mouse/touchpad will return true.
// This mixin should be used to isolate visual hover effects that are buggy on touch devices.
// More reading: https://www.smashingmagazine.com/2022/03/guide-hover-pointer-media-queries/
export const mediaQueryHover = () => `
  @media (any-hover: hover)
`
