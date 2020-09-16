/** @jsx createElement */

import { createElement, ReactNode, Fragment } from 'react'

import { Options } from '@contentful/rich-text-react-renderer'
import { MARKS, BLOCKS, INLINES } from '@contentful/rich-text-types'

export const options: Options = {
  renderMark: {
    [MARKS.BOLD]: (text: ReactNode) => <strong>{text}</strong>,
    [MARKS.ITALIC]: (text: ReactNode) => <em>{text}</em>,
    [MARKS.UNDERLINE]: (text: ReactNode) => <u>{text}</u>,
    [MARKS.CODE]: (text: ReactNode) => <code>{text}</code>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      let hasCode = false

      node.content.forEach((content: any) => {
        if (content.marks != null) {
          content.marks.forEach((mark) => {
            if (mark.type == "code") {
              hasCode = true
            }
          })
        }
      })

      if (!hasCode)
        return <p>{children}</p>
      else
        return <p className="has-code">{ children }</p>
      
    }
  },
}
