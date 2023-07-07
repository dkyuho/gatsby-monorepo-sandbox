const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
export const weekdaysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

// if no index passed in, return current weekday
export const getWeekday = (index = new Date().getDay()) => weekdaysArray[index]

// if no index passed in, return current month
export const getMonth = (index = new Date().getMonth()) => months[index]
