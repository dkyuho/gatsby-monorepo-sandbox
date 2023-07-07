import { css } from '@emotion/react'
import { lazyFadeIn, mediaQueryMin, mediaQueryMax, breakpoints } from 'base-components'

export const ilbsWrapperStyles = css`
  position: relative;
  overflow: hidden;
  width: 100%;
  aspect-ratio: var(--itemMobileWidth) / var(--itemMobileHeight);

  ${mediaQueryMin(breakpoints.sm)} {
    aspect-ratio: var(--itemDesktopWidth) / var(--itemDesktopHeight);
  }
`
export const ilbsImageThumbStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(10px);
  transform: scale(1.05);
  transition: visibility 0ms ease 400ms; // transition delay (last value) should match ilbsImageStyles duration for smooth effect

  // hide desktop thumb image at viewport smaller than breakpoints.sm
  ${mediaQueryMax(breakpoints.sm)} {
    &.classIlbsDesktopThumb {
      display: none;
    }
  }

  // hide mobile thumb image at viewport larger than breakpoints.sm
  ${mediaQueryMin(breakpoints.sm)} {
    &.classIlbsMobileThumb {
      display: none;
    }
  }
`
export const ilbsPictureStyles = css`
  height: 100%;
`
export const ilbsImageStyles = css`
  width: 100%;
  height: auto;
  ${lazyFadeIn()};
  transition: opacity 400ms ease 0ms; // transition duration (first value) should match ilbImageThumbStyles delay for smooth effect

  @supports (object-fit: cover) {
    object-fit: cover;
  }
`
