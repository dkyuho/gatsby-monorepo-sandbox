import React from 'react'
import PropTypes from 'prop-types'
import { Paragraph } from 'base-components'
import {
  ImageLazyBlur,
  tstCardWrapperStyles,
  tstCardWrapperModalStyles,
  tstCardItemStyles,
  tstCardImageStyles,
  tstCardTextWrapper,
  tstCardTextDateStyles,
  tstCardTextStyles,
  tstCardHeadingStyles,
  tstCardTextNameStyles,
  tstCardTextRegionStyles,
} from 'shared-components'

const TestimonialsCard = ({ testimonial, isModal, handleCardClick }) => {
  const { id, heading, caption, name, address, publishDate, imageSources, assetType } = testimonial
  const { srcWebp, srcFallback, srcThumb, width, height, imageAlt } = imageSources || {}
  const cardStylesProps = [tstCardWrapperStyles]

  if (isModal) {
    cardStylesProps.push(tstCardWrapperModalStyles)
  }

  const cardButtonProps = {
    role: 'button',
    onClick: () => handleCardClick(testimonial),
    onKeyDown: () => handleCardClick(testimonial),
  }
  const cardClickHandlerProps = isModal ? { ...cardButtonProps } : {}

  // Define dimensions of testimonial fallback video poster
  const fallbackVideoPosterImageWidth = 350
  const fallbackVideoPosterImageHeight = 350

  return (
    <div
      className="classVideoPlayHoverWrapper"
      itemScope
      itemType="https://schema.org/Review"
      css={cardStylesProps}
      {...cardClickHandlerProps}
      tabIndex={id}
    >
      <div css={tstCardItemStyles}>
        {imageSources && assetType === 'Image' && (
          <ImageLazyBlur
            itemProp="image"
            imageCustom={tstCardImageStyles}
            srcWebp={srcWebp}
            srcFallback={srcFallback}
            srcThumb={srcThumb}
            width={width}
            height={height}
            alt={imageAlt}
          />
        )}
        <div css={tstCardTextWrapper}>
          {heading && (
            <Paragraph itemProp="headline" css={tstCardHeadingStyles}>
              {heading}
            </Paragraph>
          )}
          {publishDate && (
            <Paragraph className="classTstText" itemProp="dateCreated" css={tstCardTextDateStyles}>
              {publishDate}
            </Paragraph>
          )}
          {!isModal && caption && (
            <Paragraph className="classTstText" itemProp="reviewBody" css={tstCardTextStyles}>
              {caption}
            </Paragraph>
          )}
          {name && (
            <Paragraph className="classTstText" itemProp="name" css={tstCardTextNameStyles}>
              {name}
            </Paragraph>
          )}
          {address && (
            <Paragraph className="classTstText" itemProp="contentLocation" css={tstCardTextRegionStyles}>
              {address}
            </Paragraph>
          )}
        </div>
      </div>
    </div>
  )
}

TestimonialsCard.defaultProps = {
  isCarousel: false,
  isModal: false,
  handleCardClick: null,
}

TestimonialsCard.propTypes = {
  testimonial: PropTypes.oneOfType([PropTypes.object]).isRequired,
  isCarousel: PropTypes.bool,
  isModal: PropTypes.bool,
  handleCardClick: PropTypes.func,
}

export default TestimonialsCard
