import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Heading4, isEmptyObject, LinkBasic, stripNonNumerics, useIntersectionObserver } from 'base-components'
import {
  EmailEncoded,
  LocationsOperatingHours,
  lcDetailsHeadingwrapperStyles,
  lcDetailsHeadingStyles,
  lcDetailsWrapperStyles,
  lcDetailsInfoWrapperStyles,
  lcDetailsTextStyles,
  lcDetailsAddressTextStyles,
  lcDetailsPhoneLinkStyles,
} from 'shared-components'

const LocationsCardDetails = ({
  locationData,
  isLocation,
  dealerInfo,
  contactDetails,
  operatingWeek,
  operatingWeekExceptions,
}) => {
  const {
    info: { name, alternateOptionalName },
  } = locationData
  const { street1, street2, suburb, state, postcode, phone, fax, email } = contactDetails
  const hoursRef = useRef(null)

  // Intersection Observer For GA Hours View Event
  useIntersectionObserver({
    target: hoursRef,
    onIntersect: ([{ isIntersecting }], observerElement) => {
      // The callback function will call GA event when the hours are visible.
      if (isIntersecting) {
        // Then it will call observer.unobserve.
        // Once an image is visible, we don’t need IntersectionObserver to observe it any longer.
        observerElement.unobserve(hoursRef.current)
      }
    },
  })

  return (
    <Wrapper wrapperCustom={lcDetailsWrapperStyles} itemScope itemType="http://schema.org/LocalBusiness">
      {!isEmptyObject(dealerInfo) && (
        <div css={lcDetailsHeadingwrapperStyles}>
          <Heading4 heading4Custom={lcDetailsHeadingStyles} itemProp="name">
            {`${name} - ${isLocation ? alternateOptionalName || 'Location' : dealerInfo?.name}`}
          </Heading4>
        </div>
      )}
      {!isEmptyObject(contactDetails) && (
        <Wrapper wrapperCustom={[lcDetailsInfoWrapperStyles]} itemScope itemType="http://schema.org/PostalAddress">
          <p css={lcDetailsTextStyles} itemProp="address">
            {street1 && (
              <span css={lcDetailsAddressTextStyles} itemProp="streetAddress">
                {street1}
              </span>
            )}
            {street2 && (
              <span css={lcDetailsAddressTextStyles} itemProp="streetAddress">
                {street2}
              </span>
            )}
            {suburb && (
              <span css={lcDetailsAddressTextStyles} itemProp="addressLocality">
                {suburb}
              </span>
            )}
            {state && (
              <span css={lcDetailsAddressTextStyles} itemProp="addressRegion">
                {state}
              </span>
            )}
            {postcode && (
              <span css={lcDetailsAddressTextStyles} itemProp="postalCode">
                {postcode}
              </span>
            )}
          </p>
          {phone && (
            <p css={lcDetailsTextStyles} itemProp="telephone">
              Phone:&nbsp;
              <LinkBasic
                linkBasicCustom={lcDetailsPhoneLinkStyles}
                rel="nofollow"
                to={`tel:${stripNonNumerics(phone)}`}
              >
                {phone}
              </LinkBasic>
            </p>
          )}
          {fax && (
            <p css={lcDetailsTextStyles} itemProp="faxNumber">
              {`Fax: ${fax}`}
            </p>
          )}
          {email && (
            <p css={lcDetailsTextStyles} className="classEmailAddress" itemProp="email">
              <EmailEncoded email={email} />
            </p>
          )}
        </Wrapper>
      )}
      <LocationsOperatingHours
        hoursRef={hoursRef}
        operatingWeek={operatingWeek}
        operatingWeekExceptions={operatingWeekExceptions}
      />
    </Wrapper>
  )
}

LocationsCardDetails.defaultProps = {
  dealerInfo: {},
}

LocationsCardDetails.propTypes = {
  locationData: PropTypes.oneOfType([PropTypes.object]).isRequired,
  isLocation: PropTypes.bool.isRequired,
  dealerInfo: PropTypes.oneOfType([PropTypes.object]),
  contactDetails: PropTypes.oneOfType([PropTypes.object]).isRequired,
  operatingWeek: PropTypes.oneOfType([PropTypes.object]).isRequired,
  operatingWeekExceptions: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
}

export default LocationsCardDetails
