import React from 'react'
import PropTypes from 'prop-types'
import { useIntersectionObserver } from 'base-components'
import { ImageLazyBasicImage, ilImagesWrapperStyles } from 'shared-components'

const ImageLazyBasic = ({ srcBasic, width, height, alt, imageCustom, ilImagesWrapperCustom, eager, itemProp }) => {
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

  const imageSizeInlineStyles = {
    '--itemHeight': `${height}`,
    '--itemWidth': `${width}`,
  }

  return (
    <div ref={ref} css={[ilImagesWrapperStyles, ilImagesWrapperCustom]} style={{ ...imageSizeInlineStyles }}>
      {isVisible && (
        <ImageLazyBasicImage
          imageCustom={imageCustom}
          srcBasic={srcBasic}
          alt={alt}
          eager={eager}
          itemProp={itemProp}
          height={height}
          width={width}
        />
      )}
    </div>
  )
}
ImageLazyBasic.defaultProps = {
  eager: false,
  height: null,
  width: null,
  itemProp: null,
}
ImageLazyBasic.propTypes = {
  srcBasic: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
  eager: PropTypes.bool,
  itemProp: PropTypes.string,
}

export default ImageLazyBasic
