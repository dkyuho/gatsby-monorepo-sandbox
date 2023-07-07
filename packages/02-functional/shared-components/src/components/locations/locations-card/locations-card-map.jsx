import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import { useInView } from 'react-intersection-observer'
import { Wrapper, isEmptyObject } from 'base-components'
import { ButtonLink, lcMapColWrapperStyles, lcMapLinkWrapperStyles, lcMapLinkBtnStyles } from 'shared-components'

const LocationsCardMap = ({ contactDetails, lcMapColWrapperCustom, lcMapLinkWrapperCustom }) => {
  const { ref: observerRef, inView } = useInView({
    // https://github.com/thebuilder/react-intersection-observer#options
    threshold: 0, // Indicate the percentage that should be visible before triggering
    triggerOnce: true, // Only trigger the observer once.
  })

  const { latitude, longitude, street1, street2, suburb, state, postcode } = contactDetails
  const locationUrl = encodeURI(
    `https://www.google.com/maps/dir/Your+location/${street1 || ''}${street2 ? `+${street2}` : ''}${
      suburb ? `+${suburb}` : ''
    }${state ? `+${state}` : ''}${postcode ? `+${postcode}` : ''}`
  )

  if (
    !isEmptyObject(contactDetails) &&
    latitude &&
    longitude &&
    !Number.isNaN(Number(latitude)) &&
    !Number.isNaN(Number(longitude))
  ) {
    return (
      <Wrapper
        wrapperCustom={[lcMapColWrapperStyles, lcMapColWrapperCustom]}
        itemScope
        itemType="http://schema.org/LocalBusiness"
        domRef={observerRef}
      >
        {inView && <Suspense fallback="Loading..." />}
        <Wrapper wrapperCustom={[lcMapLinkWrapperStyles, lcMapLinkWrapperCustom]}>
          <ButtonLink
            target="_blank"
            rel="noopener noreferrer"
            to={locationUrl}
            itemProp="hasMap"
            buttonLinkCustom={lcMapLinkBtnStyles}
          >
            Get Directions
          </ButtonLink>
        </Wrapper>
      </Wrapper>
    )
  }
  return null
}

LocationsCardMap.propTypes = {
  contactDetails: PropTypes.oneOfType([PropTypes.object]).isRequired,
}

export default LocationsCardMap
