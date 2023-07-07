import { css } from '@emotion/react'
import { lazyFadeIn } from 'base-components'

export const ilImagesWrapperStyles = css`
  position: relative;
  overflow: hidden;
  width: 100%;
  aspect-ratio: var(--itemWidth) / var(--itemHeight);
`
export const ilImageStyles = css`
  width: 100%;
  height: auto;
  ${lazyFadeIn()};
  transition: opacity 400ms ease 0ms; // transition duration (first value) should match ilbImageThumbStyles delay for smooth effect

  @supports (object-fit: cover) {
    object-fit: cover;
    height: 100%;
  }
`
export const ilPictureStyles = css`
  height: 100%;
`
