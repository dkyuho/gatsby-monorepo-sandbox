import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Svgs, Heading3 } from 'base-components'
import {
  lcTabsHeaderWrapperStyles,
  lcTabsHeadingWrapperStyles,
  lcTabsHeadingStyles,
  lcTabsListStyles,
  lcTabItemStyles,
  lcTabItemButtonStyles,
  lcTabItemIconStyles,
  lcTabItemIconTextStyles,
  lcTabSingleIconWrapperStyles,
  lcTabSingleItemIconStyles,
  lcTabSingleItemIconTextStyles,
} from 'shared-components'

const LocationsCardTabs = ({
  locationData,
  selectedDepartment,
  setSelectedDepartment,
  singleDepartment,
  isLocation,
  setIsLocation,
  lcHeadingTabsWrapperCustom,
  lcHeadingWrapperCustom,
  lcHeadingCustom,
  lcTabsListCustom,
  lcTabItemCustom,
  lcTabItemButtonCustom,
  lcTabItemIconCustom,
  lcTabItemIconTextCustom,
}) => {
  const departmentClassName = 'classDepartmentButton'
  const activeClassName = 'classActiveDepartment'
  const isDepartment = selectedDepartment === 0 || !!selectedDepartment
  const {
    info: { name, alternateOptionalName },
    departments,
  } = locationData

  return (
    <Wrapper
      wrapperCustom={[lcTabsHeaderWrapperStyles, lcHeadingTabsWrapperCustom]}
      itemScope
      itemType="http://schema.org/LocalBusiness"
    >
      {name && (
        <Wrapper wrapperCustom={[lcTabsHeadingWrapperStyles, lcHeadingWrapperCustom]}>
          <Heading3 heading3Custom={[lcTabsHeadingStyles, lcHeadingCustom]} itemProp="name">
            {name}
          </Heading3>
        </Wrapper>
      )}
      {singleDepartment && isLocation && !isDepartment && (
        <div css={lcTabSingleIconWrapperStyles}>
          <Svgs
            className="classIconSvg"
            css={[lcTabSingleItemIconStyles, lcTabItemIconCustom]}
            name="iconLineLocation"
          />
          <span css={[lcTabSingleItemIconTextStyles, lcTabItemIconTextCustom]}>
            {alternateOptionalName || 'Location'}
          </span>
        </div>
      )}
      {singleDepartment && !isLocation && isDepartment && (
        <div css={lcTabSingleIconWrapperStyles}>
          <Svgs
            className="classIconSvg"
            css={[lcTabSingleItemIconStyles, lcTabItemIconCustom]}
            name={`iconLine${departments[selectedDepartment]?.departmentType}`}
          />
          <span css={[lcTabSingleItemIconTextStyles, lcTabItemIconTextCustom]}>
            {departments[selectedDepartment]?.name}
          </span>
        </div>
      )}
      {!singleDepartment && (
        <ul css={[lcTabsListStyles, lcTabsListCustom]}>
          <li className="classTabsItem" css={[lcTabItemStyles, lcTabItemCustom]}>
            <button
              type="button"
              className={`${departmentClassName}${isLocation ? ` ${activeClassName}` : ''}`}
              css={[lcTabItemButtonStyles, lcTabItemButtonCustom]}
              onClick={() => {
                setIsLocation(true)
                setSelectedDepartment()
              }}
              aria-label="Location"
            >
              <Svgs className="classIconSvg" css={[lcTabItemIconStyles, lcTabItemIconCustom]} name="iconLineLocation" />
              <span css={[lcTabItemIconTextStyles, lcTabItemIconTextCustom]}>
                {alternateOptionalName || 'Location'}
              </span>
            </button>
          </li>
          {departments.map((department, index) => (
            <li className="classTabsItem" key={department?.id} css={[lcTabItemStyles, lcTabItemCustom]}>
              <button
                type="button"
                className={`${departmentClassName}${selectedDepartment === index ? ` ${activeClassName}` : ''}`}
                css={[lcTabItemButtonStyles, lcTabItemButtonCustom]}
                onClick={() => {
                  setIsLocation(false)
                  setSelectedDepartment(index)
                }}
                aria-label={`Select ${department.name}`}
              >
                <Svgs
                  className="classIconSvg"
                  css={[lcTabItemIconStyles, lcTabItemIconCustom]}
                  name={`iconLine${department?.departmentType}`}
                />
                <span css={[lcTabItemIconTextStyles, lcTabItemIconTextCustom]} itemProp="department">
                  {department.name}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </Wrapper>
  )
}

LocationsCardTabs.defaultProps = {
  singleDepartment: false,
  selectedDepartment: null,
  setSelectedDepartment: null,
  setIsLocation: null,
}

LocationsCardTabs.propTypes = {
  locationData: PropTypes.oneOfType([PropTypes.object]).isRequired,
  singleDepartment: PropTypes.bool,
  selectedDepartment: PropTypes.number,
  setSelectedDepartment: PropTypes.func,
  isLocation: PropTypes.bool.isRequired,
  setIsLocation: PropTypes.func,
}

export default LocationsCardTabs
