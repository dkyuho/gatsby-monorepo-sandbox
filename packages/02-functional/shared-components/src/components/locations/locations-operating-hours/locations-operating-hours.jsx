import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  Wrapper,
  Heading4,
  weekdaysArray,
  getWeekday,
  hourTo12HrFormat,
  isEmptyObject,
  getActiveHolidayEvents,
} from 'base-components'
import {
  lcHoursHeadingwrapperStyles,
  lcHoursHeadingStyles,
  lcHoursNoteWrapperStyles,
  lcHoursNoteTextStyles,
  lcHoursRowStyles,
  lcHoursTextStyles,
} from 'shared-components'

const LocationsOperatingHours = ({
  hoursRef,
  operatingWeek,
  operatingWeekExceptions,
  lcHoursWrapperCustom,
  lcHoursHeadingCustom,
  lcHoursNoteTextCustom,
  lcHoursRowCustom,
  lcHoursTextCustom,
}) => {
  const [currentWeekday, setCurrentWeekday] = useState('')
  const activeHolidayEvents = getActiveHolidayEvents(operatingWeekExceptions)

  // set weekday only once component renders
  useEffect(() => {
    setCurrentWeekday(getWeekday())
  }, [])

  return (
    !isEmptyObject(operatingWeek) && (
      <div css={lcHoursWrapperCustom}>
        <div css={lcHoursHeadingwrapperStyles}>
          <Heading4 heading4Custom={[lcHoursHeadingStyles, lcHoursHeadingCustom]}>Trading Hours</Heading4>
          {operatingWeek.note?.text && (
            <div css={lcHoursNoteWrapperStyles}>
              <p css={[lcHoursNoteTextStyles, lcHoursNoteTextCustom]}>{operatingWeek.note.text}</p>
            </div>
          )}
        </div>
        <Wrapper domRef={hoursRef}>
          {weekdaysArray.map((weekday) => (
            <div
              css={[lcHoursRowStyles, lcHoursRowCustom]}
              key={weekday}
              className={weekday === currentWeekday ? 'classCurrentDay' : ''}
            >
              {activeHolidayEvents[weekday] ? (
                <>
                  <span css={[lcHoursTextStyles, lcHoursTextCustom]} itemProp="openingHours">
                    {activeHolidayEvents[weekday].dayTitle || weekday}
                  </span>
                  <span css={[lcHoursTextStyles, lcHoursTextCustom]} itemProp="openingHours">
                    {activeHolidayEvents[weekday].isOpen
                      ? `${hourTo12HrFormat(activeHolidayEvents[weekday].openTime)} - ${hourTo12HrFormat(
                          activeHolidayEvents[weekday].closeTime
                        )}`
                      : 'Closed'}
                  </span>
                </>
              ) : (
                <>
                  <span css={[lcHoursTextStyles, lcHoursTextCustom]} itemProp="openingHours">
                    {weekday === currentWeekday ? 'Today' : weekday}
                  </span>
                  <span css={[lcHoursTextStyles, lcHoursTextCustom]} itemProp="openingHours">
                    {operatingWeek[`isOpen${weekday}`] &&
                    operatingWeek[`openTime${weekday}`] &&
                    operatingWeek[`closeTime${weekday}`]
                      ? `${hourTo12HrFormat(operatingWeek[`openTime${weekday}`])} - ${hourTo12HrFormat(
                          operatingWeek[`closeTime${weekday}`]
                        )}`
                      : 'Closed'}
                  </span>
                </>
              )}
            </div>
          ))}
        </Wrapper>
      </div>
    )
  )
}

LocationsOperatingHours.defaultProps = {
  hoursRef: undefined,
}

LocationsOperatingHours.propTypes = {
  operatingWeek: PropTypes.oneOfType([PropTypes.object]).isRequired,
  operatingWeekExceptions: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  hoursRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]),
}

export default LocationsOperatingHours
