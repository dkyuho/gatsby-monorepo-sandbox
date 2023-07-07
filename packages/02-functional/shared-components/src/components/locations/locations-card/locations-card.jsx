import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, WrapperFlex } from 'base-components'
import {
  LocationsCardTabs,
  LocationsCardDetails,
  locationsCardWrapperStyles,
  lcDetailsMapWrapperStyles,
} from 'shared-components'

const LocationsCard = ({
  className,
  locationData,
  isLocation,
  selectedDepartment,
  setIsLocation,
  setSelectedDepartment,
  singleDepartment,
  locationsCardWrapperCustom,
  lcDetailsMapWrapperCustom,
}) => {
  const { info, contactDetail, operatingWeek, operatingWeekExceptions, departments } = locationData

  // Boolean value that indicates whether the location itself or the department is selected
  const selectedDealerInfo = isLocation || selectedDepartment === null ? info : departments[selectedDepartment]
  const selectedContactDetail =
    isLocation || selectedDepartment === null ? contactDetail : departments[selectedDepartment].contactDetail
  const selectedOperatingWeek =
    isLocation || selectedDepartment === null ? operatingWeek : departments[selectedDepartment].operatingWeek
  const selectedOperatingWeekExceptions =
    isLocation || selectedDepartment === null
      ? operatingWeekExceptions
      : departments[selectedDepartment].operatingWeekExceptions

  return (
    <Wrapper className={className} wrapperCustom={[locationsCardWrapperStyles, locationsCardWrapperCustom]}>
      <LocationsCardTabs
        locationData={locationData}
        selectedDepartment={selectedDepartment}
        setSelectedDepartment={setSelectedDepartment}
        singleDepartment={singleDepartment}
        isLocation={isLocation}
        setIsLocation={setIsLocation}
      />
      <WrapperFlex wrapperFlexCustom={[lcDetailsMapWrapperStyles, lcDetailsMapWrapperCustom]}>
        <LocationsCardDetails
          locationData={locationData}
          isLocation={isLocation}
          dealerInfo={selectedDealerInfo}
          contactDetails={selectedContactDetail}
          operatingWeek={selectedOperatingWeek}
          operatingWeekExceptions={selectedOperatingWeekExceptions}
        />
      </WrapperFlex>
    </Wrapper>
  )
}

LocationsCard.defaultProps = {
  className: '',
  singleDepartment: false,
  selectedDepartment: null,
  setIsLocation: null,
}

LocationsCard.propTypes = {
  className: PropTypes.string,
  locationData: PropTypes.oneOfType([PropTypes.object]).isRequired,
  singleDepartment: PropTypes.bool,
  isLocation: PropTypes.bool.isRequired,
  selectedDepartment: PropTypes.number,
  setIsLocation: PropTypes.func,
  setSelectedDepartment: PropTypes.func.isRequired,
}

export default LocationsCard
