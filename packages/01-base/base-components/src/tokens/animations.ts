import { keyframes } from '@emotion/react'

export const rotateBanner = keyframes`
  from {
    opacity: 1;
    transform: scale(1) rotate(-45deg);
  }

  50% {
    opacity: 1;
    transform: scale(1.2) rotate(-45deg);
  }

  to {
    opacity: 1;
    transform: scale(1) rotate(-45deg);
  }
`
export const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`
export const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`
export const fadeOutIn = keyframes`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`
export const grow200FadeOut = keyframes`
  100% {
    transform: scale(2);
    opacity: 0
  }
`
export const grow150FadeOut = keyframes`
  100% {
    transform: scale(1.5);
    opacity: 0
  }
`
export const growSlowFadeIn = keyframes`
  50% {
    transform: scale(0.75);
    opacity: 0.2;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
`
export const growSlowFadeInFast = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.9);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
`
export const growFadeinMoveY = keyframes`
  0% {
    transform: scale(0.6) translateY(-8px);
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`
export const zoomIn = keyframes`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  100% {
    opacity: 1;
  }
`
export const bounceInLeft = keyframes`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0);
  }

  75% {
    transform: translate3d(-10px, 0, 0);
  }

  90% {
    transform: translate3d(5px, 0, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`
export const flipInY = keyframes`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`
export const LeftIn = keyframes`
  from {
    transform: translateX(-10px);
  }

  to {
    transform: translateX(0);
  }
`
export const LeftIn2 = keyframes`
  from {
    transform: translateX(-10.1px);
  }

  to {
    transform: translateX(-0.1px);
  }
`
export const overflowIn = keyframes`
  0% {
    overflow: initial;
  }

  100% {
    overflow: initial;
  }
`
export const spin = keyframes`
  to {
      transform: rotate(360deg);
  }
`
export const pulse = keyframes`
  to {
    transform: scale(1.5);
    opacity: 0;
  }
`
export const slideIn = keyframes`
  from {
    top: 100%;
    bottom: auto;
  }

  to {
    top: 0;
    bottom: 0;
  }
`
export const fadeInMoveY = keyframes`
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`
