/** @jsx createElement */

import { createElement, ReactNode, Fragment } from 'react'

import { Options } from '@contentful/rich-text-react-renderer'
import { MARKS, BLOCKS, INLINES } from '@contentful/rich-text-types'
import ContentfulImage from '@/components/ui/ContentfulImage'

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
      
    },
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      let id = node.data.target.sys.contentful_id

      return <ContentfulImage id={ id } />
    }
  },
}
