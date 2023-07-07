export const isNotEmptyArray = (array) => Array.isArray(array) && array.length !== 0

export const isEmptyObject = (obj) => Object.keys(obj).length === 0 && obj.constructor === Object
