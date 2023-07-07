import React from 'react'
import rehypeRaw from 'rehype-raw' // plugin to parse the tree again (and raw nodes). Improper use of rehype-raw can open you up to a cross-site scripting (XSS) attack. Either do not combine this plugin with user content or use rehype-sanitize.
import rehypeSanitize from 'rehype-sanitize' // plugin to sanitize HTML
import { useHasRendered } from 'base-components'
import Markdown, { Options } from 'react-markdown'

type ReactMarkdownProps = Options & {
  cmsContent?: boolean
}

const ReactMarkdown = ({ children, cmsContent = false, ...props }: ReactMarkdownProps) => {
  const hasRendered = useHasRendered()
  const propsFinal = { ...props }

  return !hasRendered ? (
    <Markdown rehypePlugins={[rehypeRaw, rehypeSanitize]} {...propsFinal}>
      {children}
    </Markdown>
  ) : (
    <Markdown rehypePlugins={[rehypeRaw]} {...propsFinal}>
      {children}
    </Markdown>
  )
}

export default ReactMarkdown
