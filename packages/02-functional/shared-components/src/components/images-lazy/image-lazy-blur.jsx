import React from 'react'
import PropTypes from 'prop-types'
import { useIntersectionObserver } from 'base-components'
import { ImageLazyBlurImages, ilbImagesWrapperStyles } from 'shared-components'

const ImageLazyBlur = ({
  srcWebp,
  srcFallback,
  srcThumb,
  alt,
  height,
  width,
  ilbImagesWrapperCustom,
  ilbImageThumbCustom,
  imageCustom,
  eager,
  itemProp,
}) => {
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

  // initialize inline styles
  const imageSizeInlineStyles = {
    '--itemHeight': `${height}`,
    '--itemWidth': `${width}`,
  }

  return (
    <div ref={ref} css={[ilbImagesWrapperStyles, ilbImagesWrapperCustom]} style={{ ...imageSizeInlineStyles }}>
      {isVisible && (
        <ImageLazyBlurImages
          ilbImageThumbCustom={ilbImageThumbCustom}
          imageCustom={imageCustom}
          srcWebp={srcWebp}
          srcFallback={srcFallback}
          srcThumb={srcThumb}
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

ImageLazyBlur.defaultProps = {
  srcWebp: '',
  srcThumb: '',
  eager: false,
  height: null,
  width: null,
  itemProp: null,
}

ImageLazyBlur.propTypes = {
  srcWebp: PropTypes.string,
  srcFallback: PropTypes.string.isRequired,
  srcThumb: PropTypes.string,
  alt: PropTypes.string.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
  eager: PropTypes.bool,
  itemProp: PropTypes.string,
}

export default ImageLazyBlur
