import React from 'react'
import PropTypes from 'prop-types'
import { useIntersectionObserver } from 'base-components'
import { ImageLazyBlurSwitcherImages, ilbsWrapperStyles } from 'shared-components'

const ImageLazyBlurSwitcher = ({
  desktopImage,
  mobileImage,
  ilbsWrapperCustom,
  imageCustom,
  ilbsImageThumbCustom,
  eager,
  itemProp,
}) => {
  // If image doesn't exist display nothing
  if (!desktopImage && !mobileImage) return null

  // Initialize intersection observer. If eager is true image is visible onLoad
  const ref = React.useRef()
  const [isVisible, setIsVisible] = React.useState(eager)

  // To use this custom hook, invoke it with a target (ref) and a callback function
  useIntersectionObserver({
    target: ref,
    onIntersect: ([{ isIntersecting }], observerElement) => {
      // The callback function will set a state variable indicating that the image is visible.
      if (isIntersecting) {
        setIsVisible(true)
        // Then it will call observer.unobserve.
        // Once an image is visible, we don’t need IntersectionObserver to observe it any longer.
        observerElement.unobserve(ref.current)
      }
    },
  })
  const { width: desktopWidth, height: desktopHeight } = desktopImage || {}
  const { width: mobileWidth, height: mobileHeight } = mobileImage || {}
  // initialize inline styles
  const imageSizeInlineStyles = {
    '--itemMobileWidth': `${mobileWidth || desktopWidth}`,
    '--itemMobileHeight': `${mobileHeight || desktopHeight}`,
    '--itemDesktopWidth': `${desktopWidth || mobileWidth}`,
    '--itemDesktopHeight': `${desktopHeight || mobileHeight}`,
  }

  return (
    <div ref={ref} css={[ilbsWrapperStyles, ilbsWrapperCustom]} style={{ ...imageSizeInlineStyles }}>
      {isVisible && (
        <ImageLazyBlurSwitcherImages
          imageCustom={imageCustom}
          ilbsImageThumbCustom={ilbsImageThumbCustom}
          desktopImage={desktopImage}
          mobileImage={mobileImage}
          itemProp={itemProp}
          eager
        />
      )}
    </div>
  )
}

ImageLazyBlurSwitcher.defaultProps = {
  desktopImage: null,
  mobileImage: null,
  eager: false,
  itemProp: null,
}

ImageLazyBlurSwitcher.propTypes = {
  desktopImage: PropTypes.oneOfType([PropTypes.object]),
  mobileImage: PropTypes.oneOfType([PropTypes.object]),
  eager: PropTypes.bool,
  itemProp: PropTypes.string,
}

export default ImageLazyBlurSwitcher
