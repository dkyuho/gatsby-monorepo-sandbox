import React from 'react'
import PropTypes from 'prop-types'
import { ilbsImageThumbStyles } from 'shared-components'

const ImageLazyBlurSwitcherThumb = ({ desktopImage, mobileImage, ilbsImageThumbCustom, isLoaded }) => (
  <>
    {desktopImage && (
      <img
        css={[ilbsImageThumbStyles, ilbsImageThumbCustom]}
        className="classIlbsDesktopThumb"
        alt={desktopImage.imageAlt}
        src={desktopImage.srcThumb}
        style={{ visibility: isLoaded ? 'hidden' : 'visible' }}
        width={desktopImage.width}
        height={desktopImage.height}
      />
    )}
    {mobileImage && (
      <img
        css={[ilbsImageThumbStyles, ilbsImageThumbCustom]}
        className="classIlbsMobileThumb"
        alt={mobileImage.imageAlt}
        src={mobileImage.srcThumb}
        style={{ visibility: isLoaded ? 'hidden' : 'visible' }}
        width={mobileImage.width}
        height={mobileImage.height}
      />
    )}
  </>
)

ImageLazyBlurSwitcherThumb.defaultProps = {
  desktopImage: null,
  mobileImage: null,
}

ImageLazyBlurSwitcherThumb.propTypes = {
  desktopImage: PropTypes.oneOfType([PropTypes.object]),
  mobileImage: PropTypes.oneOfType([PropTypes.object]),
  isLoaded: PropTypes.bool.isRequired,
}

export default ImageLazyBlurSwitcherThumb
