import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, LinkBasic, stripNonNumerics, ReactMarkdown, sortArrayByKey } from 'base-components'
import {
  ImageLazyBlur,
  AccordionReveal,
  TeamMembersCustomText,
  teamMembersCardWrapperStyles,
  tmCardImageWrapperStyles,
  tmCardIlbImagesWrapperStyles,
  tmCardImageStyles,
  tmCardDetailsWrapperStyles,
  tmCardTextStyles,
  tmCardTextNameStyles,
  tmCardTextEmailStyles,
  tmCardLinkPhoneStyles,
  tmCardDescriptionWrapperStyles,
  tmCardButtonWrapperStyles,
  tmCardTextDescriptionStyles,
  tmCardAccordianButtonStyles,
  EmailEncoded,
} from 'shared-components'

const TeamMembersCard = ({ teamMember }) => {
  const { name, bio, phone, jobTitle, email, memberFields, mobile, profilePhoto } = teamMember || {}
  const { srcFallback, srcThumb, srcWebp, url, width, height, imageAlt } = profilePhoto || {}
  const sortedCustomText = sortArrayByKey(memberFields, 'position', 'number')

  return (
    <Wrapper
      itemScope
      itemType="http://schema.org/Person"
      className="classStandardComponent"
      wrapperCustom={teamMembersCardWrapperStyles}
    >
      {(srcWebp || url || srcFallback) && (
        <Wrapper wrapperCustom={tmCardImageWrapperStyles}>
          <ImageLazyBlur
            itemProp="image"
            ilbImagesWrapperCustom={tmCardIlbImagesWrapperStyles}
            imageCustom={tmCardImageStyles}
            srcWebp={srcWebp}
            srcFallback={srcFallback || url}
            srcThumb={srcThumb}
            width={width}
            height={height}
            alt={imageAlt}
          />
        </Wrapper>
      )}

      <Wrapper wrapperCustom={tmCardDetailsWrapperStyles}>
        {name && (
          <p css={[tmCardTextStyles, tmCardTextNameStyles]} itemProp="name">
            {name}
          </p>
        )}
        {jobTitle && (
          <p css={tmCardTextStyles} itemProp="jobTitle">
            {jobTitle}
          </p>
        )}
        {phone && (
          <p css={tmCardTextStyles}>
            <strong className="classTmCardTextKey">Phone:&nbsp;</strong>
            <LinkBasic
              itemProp="telephone"
              to={`tel:${stripNonNumerics(phone)}`}
              linkBasicCustom={tmCardLinkPhoneStyles}
              aria-label="Phone Call"
            >
              {phone}
            </LinkBasic>
          </p>
        )}
        {mobile && (
          <p css={tmCardTextStyles}>
            <strong className="classTmCardTextKey">Mobile:&nbsp;</strong>
            <LinkBasic
              itemProp="telephone"
              to={`tel:${stripNonNumerics(mobile)}`}
              linkBasicCustom={tmCardLinkPhoneStyles}
              aria-label="Phone Call"
            >
              {mobile}
            </LinkBasic>
          </p>
        )}
        {email && (
          <p css={[tmCardTextStyles, tmCardTextEmailStyles]}>
            <strong className="classTmCardTextKey">Email:&nbsp;</strong>
            <EmailEncoded email={email} />
          </p>
        )}
        {sortedCustomText.map((customText) => (
          <TeamMembersCustomText key={customText.id} customText={customText} tmCustomTextCustom={tmCardTextStyles} />
        ))}
        {bio && (
          <Wrapper wrapperCustom={tmCardDescriptionWrapperStyles}>
            <AccordionReveal
              accordionButtonWrapperCustom={tmCardButtonWrapperStyles}
              buttonLinkCustom={tmCardAccordianButtonStyles}
            >
              <ReactMarkdown css={[tmCardTextStyles, tmCardTextDescriptionStyles]} itemProp="description">
                {bio}
              </ReactMarkdown>
            </AccordionReveal>
          </Wrapper>
        )}
      </Wrapper>
    </Wrapper>
  )
}

TeamMembersCard.propTypes = {
  teamMember: PropTypes.oneOfType([PropTypes.object]).isRequired,
}

export default TeamMembersCard
