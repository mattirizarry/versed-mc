/** @jsx createElement */

import { createElement, FC } from 'react'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import Jumbotron from '@/components/ui/Jumbotron'

import { options } from '@/helpers/richTextOptions'

import { NewsModel } from '@/models/news'

interface Props {
  pageContext: NewsModel
}

const NewsPage: FC<Props> = ({
  pageContext: {
    postBody: { json }, featuredImage: { fluid }, postTitle
  },
}) => {
  return (
    <Layout>
      <SEO title="News Page" />
      <Jumbotron 
        fluid={ fluid }
        header={ postTitle }
      />
      <section className="post-content">
        {documentToReactComponents(json, options)}
      </section>
    </Layout>
  )
}

export default NewsPage
