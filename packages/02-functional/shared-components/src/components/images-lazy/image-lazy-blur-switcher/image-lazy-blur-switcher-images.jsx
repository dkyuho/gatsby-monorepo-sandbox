import React from 'react'
import PropTypes from 'prop-types'
import { breakpoints } from 'base-components'
import { ImageLazyBlurSwitcherThumb, ilbsImageStyles, ilbsPictureStyles } from 'shared-components'

const ImageLazyBlurSwitcherImages = ({
  desktopImage,
  mobileImage,
  imageCustom,
  ilbsImageThumbCustom,
  eager,
  itemProp,
}) => {
  const [isLoaded, setIsLoaded] = React.useState(false)
  const {
    srcWebp: desktopSrcWebp,
    srcFallback: desktopSrcFallback,
    imageAlt: desktopImageAlt,
    type: desktopType,
    width: desktopWidth,
    height: desktopHeight,
  } = desktopImage || {}
  const { srcWebp: mobileSrcWebp, type: mobileType, width: mobileWidth, height: mobileHeight } = mobileImage || {}

  return (
    <>
      <ImageLazyBlurSwitcherThumb
        desktopImage={desktopImage}
        mobileImage={mobileImage}
        ilbsImageThumbCustom={ilbsImageThumbCustom}
        isLoaded={isLoaded}
      />
      <picture
        onLoad={() => {
          setIsLoaded(true)
        }}
        css={ilbsPictureStyles}
      >
        {/* mobile webp image */}
        {mobileSrcWebp && (
          <source
            srcSet={mobileSrcWebp}
            media={`(max-width: ${breakpoints.sm}px)`}
            css={[ilbsImageStyles, imageCustom]}
            type={mobileType}
            width={mobileWidth}
            height={mobileHeight}
          />
        )}
        {/* desktop webp image */}
        {desktopSrcWebp && (
          <source
            srcSet={desktopSrcWebp}
            css={[ilbsImageStyles, imageCustom]}
            type={desktopType}
            width={desktopWidth}
            height={desktopHeight}
          />
        )}
        {/* If mobile/desktop webp images are not available, the desktop jpeg image will be used as fallback */}
        <img
          src={desktopSrcFallback}
          css={[ilbsImageStyles, imageCustom]}
          alt={desktopImageAlt}
          itemProp={itemProp}
          width={desktopWidth}
          height={desktopHeight}
          loading={eager ? 'eager' : 'lazy'} // The <img> element controls image loading. The <source> and <picture> elements follow.
        />
      </picture>
    </>
  )
}

ImageLazyBlurSwitcherImages.defaultProps = {
  desktopImage: null,
  mobileImage: null,
  eager: false,
  itemProp: null,
}

ImageLazyBlurSwitcherImages.propTypes = {
  desktopImage: PropTypes.oneOfType([PropTypes.object]),
  mobileImage: PropTypes.oneOfType([PropTypes.object]),
  eager: PropTypes.bool,
  itemProp: PropTypes.string,
}

export default ImageLazyBlurSwitcherImages
