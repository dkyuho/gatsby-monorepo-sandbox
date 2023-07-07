import React from 'react'
import { Wrapper, getSetSortedByKey, isNotEmptyArray, useTabs, staticQueryTeams } from 'base-components'
import {
  TeamMembersCard,
  teamMembersWrapperStyles,
  teamMembersTabbedWrapperStyles,
  teamMembersTabbedListStyles,
  teamMembersTabbedItemStyles,
  teamMembersTabbedButtonStyles,
  teamMembersPaneWrapperStyles,
} from 'shared-components'

const TeamMembersTabbed = ({
  teamMembersWrapperCustom,
  teamMembersTabbedWrapperCustom,
  teamMembersListCustom,
  teamMembersTabbedListCustom,
  teamMembersTabbedButtonCustom,
  teamMembersPaneWrapperCustom,
}) => {
  const teamsJson = staticQueryTeams()
  const teamsData = JSON.parse(teamsJson.internal.content)

  const membersAssets = teamsData
  const membersData = membersAssets
  const tabKeyName = 'teamDepartments'
  const tabKeyId = 'id'
  const sortKey = 'position'
  const activeClass = 'classActiveCategory'
  const inActiveClass = 'classNotActiveCategory'

  const teamDepartmentSet = getSetSortedByKey(membersData, tabKeyName, tabKeyId, sortKey)
  const { activeTabIndex, setActiveTabIndex, filteredItemsArray } = useTabs(
    teamDepartmentSet,
    tabKeyName,
    tabKeyId,
    membersData
  )

  return (
    membersData &&
    isNotEmptyArray(membersAssets) && (
      <Wrapper className="classTeamMembersWrapper" wrapperCustom={[teamMembersWrapperStyles, teamMembersWrapperCustom]}>
        <Wrapper wrapperCustom={[teamMembersTabbedWrapperStyles, teamMembersTabbedWrapperCustom]}>
          <ul css={[teamMembersTabbedListStyles, teamMembersListCustom]}>
            {teamDepartmentSet &&
              teamDepartmentSet.map((teamDepartment) => (
                <li key={teamDepartment.id} css={[teamMembersTabbedItemStyles, teamMembersTabbedListCustom]}>
                  <button
                    type="button"
                    className={teamDepartment.id === activeTabIndex ? activeClass : inActiveClass}
                    css={[teamMembersTabbedButtonStyles, teamMembersTabbedButtonCustom]}
                    onClick={() => setActiveTabIndex(teamDepartment.id)}
                  >
                    {teamDepartment.name}
                  </button>
                </li>
              ))}
          </ul>
        </Wrapper>
        <Wrapper wrapperCustom={[teamMembersPaneWrapperStyles, teamMembersPaneWrapperCustom]}>
          {filteredItemsArray &&
            isNotEmptyArray(filteredItemsArray) &&
            filteredItemsArray.map((teamMember) => <TeamMembersCard key={teamMember.id} teamMember={teamMember} />)}
        </Wrapper>
      </Wrapper>
    )
  )
}

export default TeamMembersTabbed
