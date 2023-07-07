export default (timeString) => {
  const [sHours, minutes] = timeString.match(/([0-9]{1,2}):([0-9]{2})/).slice(1)
  const period = +sHours < 12 ? 'am' : 'pm'
  const hours = +sHours % 12 || 12
  return `${hours}:${minutes}${period}`
}
