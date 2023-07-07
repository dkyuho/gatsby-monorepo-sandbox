export default (objectArray, key) =>
  Array.from(new Set(objectArray.map((a) => a[key]))).map((id) => objectArray.find((a) => a[key] === id))
