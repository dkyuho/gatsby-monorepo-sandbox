import { css } from '@emotion/react'
import {
  tabItemLarge,
  tabItemActive,
  tabbedList,
  tabbedItem,
  cardWrapper,
  locationsTokens,
  coloursBase,
} from 'base-components'

export const locationsTabbedWrapperStyles = css`
  background-color: ${coloursBase.white};

  /* only add cardWrapper if the component is added to standard page */
  &.classStandardComponent {
    padding-block-start: ${locationsTokens.lcTabbedStandardWrapperPadTop};
    ${cardWrapper()};
  }
`
export const locationsTabbedContentWrapperStyles = css``

export const locationsCardsContentWrapperStyles = css``

export const locationsTabbedListStyles = css`
  ${tabbedList(`center`)};
  padding-top: 0;
`
export const locationsTabbedItemStyles = css`
  ${tabbedItem()};
`
export const locationsTabbedButtonStyles = css`
  ${tabItemLarge()};

  &.classActiveTab,
  &:hover {
    ${tabItemActive()};
  }
`
