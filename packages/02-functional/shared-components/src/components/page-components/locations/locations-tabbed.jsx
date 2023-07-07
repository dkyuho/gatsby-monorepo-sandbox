import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { Wrapper, staticQueryLocations } from 'base-components'
import {
  LocationsCard,
  locationsCardsContentWrapperStyles,
  locationsTabbedWrapperStyles,
  locationsTabbedContentWrapperStyles,
  locationsTabbedButtonStyles,
  locationsTabbedItemStyles,
  locationsTabbedListStyles,
} from 'shared-components'

export const LocationsTabbed = ({ componentTypeClassName }) => {
  const locationsJson = staticQueryLocations()
  const locationsData = JSON.parse(locationsJson.internal.content)

  const activeClassName = 'classActiveTab'
  const [selectedLocation, setSelectedLocation] = useState(0)
  const [selectedDepartment, setSelectedDepartment] = useState()
  const [isLocation, setIsLocation] = useState(true)
  const prevSelectedLocation = useRef(0)

  const handleTabsClick = (index) => {
    if (prevSelectedLocation.current !== index) {
      setSelectedDepartment()
      setIsLocation(true)
    }
    setSelectedLocation(index)
    prevSelectedLocation.current = index
  }

  return (
    locationsData &&
    locationsData.length !== 0 && (
      <Wrapper
        className={`${componentTypeClassName} classItemRequiresPadding classLocationsTabbedWrapper`}
        wrapperCustom={locationsTabbedWrapperStyles}
        itemScope
        itemType="http://schema.org/LocalBusiness"
      >
        <Wrapper wrapperCustom={locationsTabbedContentWrapperStyles}>
          <ul css={locationsTabbedListStyles}>
            {locationsData &&
              Array.isArray(locationsData) &&
              locationsData.map((locationObject, index) => (
                <li className="classTabsItem" css={locationsTabbedItemStyles} key={locationObject?.info.id}>
                  <button
                    className={index === selectedLocation && activeClassName}
                    css={locationsTabbedButtonStyles}
                    type="button"
                    onClick={() => handleTabsClick(index)}
                    aria-label="address"
                    itemProp="address"
                  >
                    {locationObject.contactDetail.suburb}
                  </button>
                </li>
              ))}
          </ul>
        </Wrapper>
        <Wrapper wrapperCustom={locationsCardsContentWrapperStyles}>
          {locationsData.length !== 0 && (
            <LocationsCard
              locationData={locationsData[selectedLocation]}
              isLocation={isLocation}
              setIsLocation={setIsLocation}
              selectedDepartment={selectedDepartment}
              setSelectedDepartment={setSelectedDepartment}
            />
          )}
        </Wrapper>
      </Wrapper>
    )
  )
}

LocationsTabbed.defaultProps = {
  componentTypeClassName: '',
}

LocationsTabbed.propTypes = {
  componentTypeClassName: PropTypes.string,
}

export default LocationsTabbed
