/** @jsx createElement */

import { createElement, FC } from 'react'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import { options } from '@/helpers/richTextOptions'

interface Props {
  pageContext: {
    pageSlug: string
    postBody: {
      json: any
    }
  }
}

const NewsPage: FC<Props> = ({ pageContext: { postBody: { json }}}) => {
  return (
    <Layout>
      <SEO title="News Page" />
      { documentToReactComponents(json, options) }
    </Layout>
  )
}

export default NewsPage