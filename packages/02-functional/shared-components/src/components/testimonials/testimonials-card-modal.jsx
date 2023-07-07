import React from 'react'
import { Paragraph, ReactMarkdown } from 'base-components'
import {
  Modal,
  ImageLazyBlur,
  tstCardModalContentStyles,
  tstModalTextWrapperStyles,
  tstCardHeadingStyles,
  tstCardTextNameStyles,
  tstCardTextRegionStyles,
  tstCardTextDateStyles,
  tstCardTextStyles,
  tstModalVideoWrapperStyles,
  tstModalVideoStyles,
} from 'shared-components'

const TestimonialsCardModal = ({ modalShowed, closeModal, testimonialCardRef }) => {
  const { imageSources, videoSources, heading, publishDate, caption, name, address, assetType } =
    testimonialCardRef.current
  const { posterSrc, videoDesktopSrc } = videoSources || {}
  const captionShortcoded = caption

  return (
    <Modal modalShowed={modalShowed} closeModal={closeModal} modalContentCustom={tstCardModalContentStyles}>
      {imageSources && assetType === 'Image' && (
        <ImageLazyBlur
          itemProp="image"
          className="classTstModelImage"
          srcWebp={imageSources.srcWebp}
          srcFallback={imageSources.srcFallback}
          srcThumb={imageSources.srcThumb}
          width={imageSources.width}
          height={imageSources.height}
          alt={imageSources.imageAlt}
        />
      )}
      {videoSources && assetType === 'Video' && (
        <div css={tstModalVideoWrapperStyles}>
          <video
            width="100%"
            preload="metadata"
            poster={posterSrc ? posterSrc.srcWebp || posterSrc.srcFallback : ''}
            controls
            playsInline
            css={tstModalVideoStyles}
          >
            <source src={videoDesktopSrc.url} type={videoDesktopSrc.type} />
            <p>This browser does not support the video element.</p>
            <track kind="captions" />
          </video>
        </div>
      )}
      <div css={tstModalTextWrapperStyles}>
        {heading && (
          <Paragraph className="classTstModalText" itemProp="headline" css={tstCardHeadingStyles}>
            {heading}
          </Paragraph>
        )}
        {publishDate && (
          <Paragraph className="classTstModalText" itemProp="dateCreated" css={tstCardTextDateStyles}>
            {publishDate}
          </Paragraph>
        )}
        {caption && (
          <ReactMarkdown className="classTstModalText" itemProp="reviewBody" css={tstCardTextStyles}>
            {captionShortcoded}
          </ReactMarkdown>
        )}
        {name && (
          <Paragraph className="classTstModalText" itemProp="name" css={tstCardTextNameStyles}>
            {name}
          </Paragraph>
        )}
        {address && (
          <Paragraph className="classTstModalText" itemProp="contentLocation" css={tstCardTextRegionStyles}>
            {address}
          </Paragraph>
        )}
      </div>
    </Modal>
  )
}

export default TestimonialsCardModal
