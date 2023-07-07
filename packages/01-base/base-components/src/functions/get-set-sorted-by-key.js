import { removeDuplicateObject } from 'base-components'

export default (data, objectKey, objectId, sortKey = objectId) => {
  // get all objects from data
  const allObjects = data
    .map((object) => object[objectKey])
    .reduce((objectArray, objectItem) => objectArray.concat(objectItem), [])
    .filter((object) => object !== null)

  // remove duplicate objects and sort objects by objectId
  const objectSortedSet = removeDuplicateObject(allObjects, objectId).sort((a, b) => a[sortKey] - b[sortKey])
  return objectSortedSet
}
