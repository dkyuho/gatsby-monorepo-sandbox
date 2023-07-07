import React from 'react'
import PropTypes from 'prop-types'
import { LinkBasic, encodeEmail, useHasRendered } from 'base-components'

const EmailEncoded = ({ email, emailHeaders, emailEncodedLinkCustom, emailEncodedTextCustom }) => {
  // Obfuscate email
  const hasRendered = useHasRendered()
  const obfuscatedEmail = email ? encodeEmail(email) : email

  // Filter out unused header items
  const filteredHeaderKeys = Object.keys(emailHeaders).filter((params) => emailHeaders[params] !== null)

  // Combine email header parameters, and generate href string
  const combinedHeaders = filteredHeaderKeys.map((key) => `${key}=${encodeURIComponent(emailHeaders[key])}`).join('&')
  const emailHref = combinedHeaders ? `${email}?${combinedHeaders}` : email

  return (
    email && (
      <LinkBasic
        linkBasicCustom={emailEncodedLinkCustom}
        rel="nofollow"
        to={`mailto:${`${hasRendered ? emailHref : obfuscatedEmail}`}`}
        aria-label="Email Address"
        itemProp="email"
      >
        <span css={emailEncodedTextCustom}>{hasRendered ? email : obfuscatedEmail}</span>
      </LinkBasic>
    )
  )
}

EmailEncoded.defaultProps = {
  emailHeaders: {
    cc: null,
    bcc: null,
    subject: null,
    body: null,
  },
}

EmailEncoded.propTypes = {
  email: PropTypes.string.isRequired,
  emailHeaders: PropTypes.shape({
    cc: PropTypes.string,
    bcc: PropTypes.string,
    subject: PropTypes.string,
    body: PropTypes.string,
  }),
}

export default EmailEncoded
