import React from 'react'
import PropTypes from 'prop-types'
import { getImageFileType } from 'base-components'
import { ilImageStyles, ilPictureStyles } from 'shared-components'

const ImageLazyBasicImage = ({ srcBasic, alt, imageCustom, eager, itemProp, height, width }) => {
  const imageType = getImageFileType(srcBasic)

  return (
    <picture css={ilPictureStyles}>
      <source
        srcSet={srcBasic}
        type={imageType} // type attribute is defined by image url using getImageFileType()
        css={[ilImageStyles, imageCustom]}
        height={height}
        width={width}
      />
      <img
        src={srcBasic}
        className="classIlBasicImage"
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
ImageLazyBasicImage.defaultProps = {
  itemProp: null,
  height: 0,
  width: 0,
}
ImageLazyBasicImage.propTypes = {
  srcBasic: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  eager: PropTypes.bool.isRequired,
  itemProp: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
}

export default ImageLazyBasicImage
