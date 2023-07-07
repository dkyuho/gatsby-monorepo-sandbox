import { getWeekday, weekdaysArray } from 'base-components'

// Format today's date in `yyyy-mm-dd` format
const formatCurrentDate = (today = new Date()) => {
  const year = today.getFullYear().toString()
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const day = String(today.getDate()).padStart(2, '0')
  return [year, month, day].join('-')
}

// Assign actual dates to every day of the week, i.e. {Friday: "2022-03-18", Monday: "2022-03-14", ...}
const getDatesOfTheWeek = () => {
  const date = new Date()
  const datesOfTheWeek = weekdaysArray.reduce((accumulator, currentWeekDay) => {
    const daysBetweenDates = weekdaysArray.indexOf(currentWeekDay) - weekdaysArray.indexOf(getWeekday())
    const currentDate = new Date(date.getTime())
    currentDate.setDate(date.getDate() + daysBetweenDates)
    return { ...accumulator, [`${currentWeekDay}`]: formatCurrentDate(currentDate) }
  }, {})
  return datesOfTheWeek
}

const getActiveHolidayEvents = (operatingWeekExceptions) => {
  const datesOfTheWeek = getDatesOfTheWeek()
  const activeHolidayEvents = operatingWeekExceptions.reduce(
    (accumulator, { date, isOpen, openTime, closeTime, dayTitle }) => {
      const weekday = getWeekday(new Date(date).getDay())
      if (datesOfTheWeek[weekday] === date)
        return { ...accumulator, [`${weekday}`]: { isOpen, openTime, closeTime, dayTitle } }
      return accumulator
    },
    {}
  )
  return activeHolidayEvents
}

export default getActiveHolidayEvents
