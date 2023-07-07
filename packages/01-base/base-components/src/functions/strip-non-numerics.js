// Use the string's .replace method with a regex of \D,
// which is a shorthand character class that matches all non-digits
export default (string) => {
  if (typeof string === 'string') {
    // strip non-numerics
    return string.replace(/\D/g, '')
  }
  return ''
}
