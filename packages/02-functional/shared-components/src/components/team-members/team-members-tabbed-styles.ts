import { css } from '@emotion/react'
import { tabItemLarge, tabItemActive, tabbedItem, tabbedList } from 'base-components'

export const teamMembersWrapperStyles = css`
  width: 100%;
  margin-bottom: 20px;
`
export const teamMembersTabbedWrapperStyles = css``

export const teamMembersTabbedListStyles = css`
  ${tabbedList()};
`
export const teamMembersTabbedItemStyles = css`
  ${tabbedItem()};
`
export const teamMembersTabbedButtonStyles = css`
  ${tabItemLarge()};

  &:hover,
  &.classActiveCategory {
    ${tabItemActive()}
  }
`
export const teamMembersPaneWrapperStyles = css``
