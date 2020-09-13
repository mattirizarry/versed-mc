/** @jsx createElement */

import { createElement, ReactNode } from 'react'

import { Options } from '@contentful/rich-text-react-renderer'
import { MARKS, BLOCKS } from '@contentful/rich-text-types'

export const options: Options = {
  renderMark: {
    [MARKS.BOLD]: (text: ReactNode) => <strong>{text}</strong>,
    [MARKS.ITALIC]: (text: ReactNode) => <em>{text}</em>,
    [MARKS.UNDERLINE]: (text: ReactNode) => <p className="underline">{text}</p>,
    [MARKS.CODE]: (text: ReactNode) => <code>{text}</code>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <span className={node.nodeType}>{children}</span>
    ),
  },
}
