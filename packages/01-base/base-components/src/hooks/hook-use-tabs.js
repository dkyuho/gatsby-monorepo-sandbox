import { useState } from 'react'

export default (tabsArray, tabKeyName, tabKeyId, tabItemsArray) => {
  if (!Array.isArray(tabsArray)) return {}
  if (!tabsArray.length) return {}

  const [activeTabIndex, setActiveTabIndex] = useState(tabsArray[0][tabKeyId])
  const filteredItemsArray =
    activeTabIndex === 'all'
      ? tabItemsArray
      : tabItemsArray.filter((item) => item[tabKeyName].some((itemObject) => itemObject[tabKeyId] === activeTabIndex))

  return {
    activeTabIndex,
    setActiveTabIndex,
    filteredItemsArray,
  }
}
