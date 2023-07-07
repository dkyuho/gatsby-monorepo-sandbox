export const sortArrayByKey = (array, key, type, direction = true) => {
  let compareFunction
  if (type === 'number') compareFunction = (a, b) => Number(a[key]) - Number(b[key])
  if (type === 'string')
    compareFunction = (a, b) => (String(a[key]).toLowerCase()[0] < String(b[key]).toLowerCase()[0] ? -1 : 1)
  if (type === 'date') compareFunction = (a, b) => new Date(a[key]) - new Date(b[key])

  if (direction) return array.sort(compareFunction)
  return array.sort(compareFunction).reverse()
}

export default sortArrayByKey
