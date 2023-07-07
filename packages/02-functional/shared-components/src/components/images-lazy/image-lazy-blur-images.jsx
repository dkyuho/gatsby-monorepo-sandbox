import React from 'react'
import PropTypes from 'prop-types'
import { getImageFileType } from 'base-components'
import { ilbImageThumbStyles, ilbImageStyles, ilbPictureStyles } from 'shared-components'

const ImageLazyBlurImages = ({
  srcWebp,
  srcFallback,
  srcThumb,
  alt,
  ilbImageThumbCustom,
  imageCustom,
  eager,
  itemProp,
  height,
  width,
}) => {
  const imageTypeFallback = getImageFileType(srcFallback)
  const [isLoaded, setIsLoaded] = React.useState(false)

  return (
    <>
      {srcThumb && (
        <img
          css={[ilbImageThumbStyles, ilbImageThumbCustom]}
          alt={alt}
          src={srcThumb}
          style={{ visibility: isLoaded ? 'hidden' : 'visible' }}
          height={height}
          width={width}
        />
      )}
      <picture
        css={ilbPictureStyles}
        onLoad={() => {
          setIsLoaded(true)
        }}
      >
        {srcWebp && (
          <source
            srcSet={srcWebp}
            type={getImageFileType(srcWebp)} // type attribute is needed by browsers for image type compatibility
            css={[ilbImageStyles, imageCustom]}
            height={height}
            width={width}
          />
        )}
        <source
          srcSet={srcFallback}
          type={imageTypeFallback} // type attribute is defined by image url using getImageFileType()
          css={[ilbImageStyles, imageCustom]}
          height={height}
          width={width}
        />
        <img
          src={srcFallback}
          css={[ilbImageStyles, imageCustom]}
          loading={eager ? 'eager' : 'lazy'} // The <img> element controls image loading. The <source> and <picture> elements follow.
          alt={alt}
          itemProp={itemProp}
          height={height}
          width={width}
        />
      </picture>
    </>
  )
}

ImageLazyBlurImages.defaultProps = {
  srcWebp: '',
  srcThumb: '',
  itemProp: null,
  height: 0,
  width: 0,
}

ImageLazyBlurImages.propTypes = {
  srcWebp: PropTypes.string,
  srcFallback: PropTypes.string.isRequired,
  srcThumb: PropTypes.string,
  alt: PropTypes.string.isRequired,
  eager: PropTypes.bool.isRequired,
  itemProp: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
}

export default ImageLazyBlurImages
