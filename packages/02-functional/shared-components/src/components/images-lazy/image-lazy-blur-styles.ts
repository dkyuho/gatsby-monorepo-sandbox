import { css } from '@emotion/react'
import { lazyFadeIn } from 'base-components'

export const ilbImagesWrapperStyles = css`
  position: relative;
  overflow: hidden;
  width: 100%;
  aspect-ratio: var(--itemWidth) / var(--itemHeight);
`
export const ilbImageThumbStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(10px);
  transform: scale(1.05);
  transition: visibility 0ms ease 400ms; // transition delay (last value) should match ilbImageStyles duration for smooth effect
`
export const ilbImageStyles = css`
  width: 100%;
  height: auto;
  ${lazyFadeIn()};
  transition: opacity 400ms ease 0ms; // transition duration (first value) should match ilbImageThumbStyles delay for smooth effect

  @supports (object-fit: cover) {
    object-fit: cover;
    height: 100%;
  }
`
export const ilbPictureStyles = css`
  height: 100%;
`
