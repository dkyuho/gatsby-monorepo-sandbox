import React from 'react'
import { Link } from 'gatsby'
import { linkBasicStyles, linkBasicExternalStyles, isAbsoluteUrl, EmotionStyles } from 'base-components'

interface LinkBasicProps {
  children: React.ReactNode
  to: string
  activeClassName?: string
  className?: string
  partiallyActive?: boolean
  linkBasicCustom?: EmotionStyles
  state?: Record<string, unknown>
}

// Destructure the props and pass some only to Link
const LinkBasic = ({
  children,
  to,
  activeClassName,
  className,
  partiallyActive = false,
  linkBasicCustom,
  state,
  ...props
}: LinkBasicProps) => {
  // Change the following regex test to suit the application.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to)

  // Use Gatsby's Link API for internal links, and <a> for others
  if (internal) {
    return (
      <Link
        className={`${className} classLinkBasic`}
        css={[linkBasicStyles, linkBasicCustom]}
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        data-testid="gatsby-link"
        state={state}
        {...props}
      >
        {children}
      </Link>
    )
  }
  return (
    <a
      className={`${className} classLinkBasic`}
      css={[linkBasicStyles, linkBasicCustom, linkBasicExternalStyles]}
      href={to}
      {...(isAbsoluteUrl(to) && { target: '_blank', rel: 'noopener noreferrer' })}
      {...props}
    >
      {children}
    </a>
  )
}

export default LinkBasic
