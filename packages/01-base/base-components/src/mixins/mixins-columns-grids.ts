import { css } from '@emotion/react'

// Example ${gridMaker(3, 1, 20)};
export const gridMaker = (itemsRow: number, marginRight: number, marginBottom: number) => {
  const widthValue = (100 - (itemsRow - 1) * marginRight) / itemsRow

  return css`
    width: ${widthValue}%;
    margin-right: ${marginRight}%;
    margin-bottom: ${marginBottom}%;

    &:nth-of-type(n) {
      margin-right: ${marginRight}%;
    }

    &:nth-of-type(${itemsRow}n) {
      margin-right: 0;
    }
  `
}

export default gridMaker
