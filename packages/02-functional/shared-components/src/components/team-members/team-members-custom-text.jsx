import React from 'react'
import PropTypes from 'prop-types'
import { ReactMarkdown } from 'base-components'
import { tmCustomTextStyles } from 'shared-components'

const TeamMembersCustomText = ({ customText, tmCustomTextCustom }) => {
  const { label, value } = customText
  const getCustomTextMarkup = () => {
    const customTextMarkup = `<strong class="classTmCardTextKey">${label.trim()}</strong>:&nbsp;${value.trim()}`
    return customTextMarkup
  }

  return (
    <ReactMarkdown css={[tmCustomTextStyles, tmCustomTextCustom]} itemProp="additionalProperty">
      {getCustomTextMarkup()}
    </ReactMarkdown>
  )
}

TeamMembersCustomText.defaultProps = {
  tmCustomTextCustom: {},
}

TeamMembersCustomText.propTypes = {
  customText: PropTypes.oneOfType([PropTypes.object]).isRequired,
  tmCustomTextCustom: PropTypes.oneOfType([PropTypes.object]),
}

export default TeamMembersCustomText
