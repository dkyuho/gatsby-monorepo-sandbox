import React from 'react'
import { ReactMarkdown, staticQueryPrivacy } from 'base-components'

const PrivacyPage = () => {
  const privacyJson = staticQueryPrivacy()
  const { privacyPolicy } = JSON.parse(privacyJson.internal.content)

  return <ReactMarkdown>{privacyPolicy}</ReactMarkdown>
}

export default PrivacyPage
