import React from 'react'
import PropTypes from 'prop-types'
import { getImageFileType } from 'base-components'
import { ilImageStyles, ilPictureStyles } from 'shared-components'

const ImageLazyImages = ({ srcWebp, srcFallback, alt, imageCustom, eager, itemProp, height, width }) => {
  const imageTypeFallback = getImageFileType(srcFallback)

  return (
    <picture css={ilPictureStyles}>
      {srcWebp && (
        <source
          srcSet={srcWebp}
          type="image/webp" // type attribute is needed by browsers to image type compatibility
          css={[ilImageStyles, imageCustom]}
          height={height}
          width={width}
        />
      )}
      <source
        srcSet={srcFallback}
        type={imageTypeFallback} // type attribute is defined by image url using getImageFileType()
        css={[ilImageStyles, imageCustom]}
        height={height}
        width={width}
      />
      <img
        src={srcFallback}
        css={[ilImageStyles, imageCustom]}
        loading={eager ? 'eager' : 'lazy'} // The <img> element controls image loading. The <source> and <picture> elements follow.
        alt={alt}
        itemProp={itemProp}
        height={height}
        width={width}
      />
    </picture>
  )
}

ImageLazyImages.defaultProps = {
  srcWebp: '',
  itemProp: null,
  height: 0,
  width: 0,
}

ImageLazyImages.propTypes = {
  srcWebp: PropTypes.string,
  srcFallback: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  eager: PropTypes.bool.isRequired,
  itemProp: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
}

export default ImageLazyImages
