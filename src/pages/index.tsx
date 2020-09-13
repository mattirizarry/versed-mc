/** @jsx createElement */

import { createElement } from 'react'

import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import { useStaticQuery, graphql } from 'gatsby'

const IndexPage = () => {
  const query = useStaticQuery(
    graphql`
      {
        allContentfulNews {
          nodes {
            id
            postBody {
              id
              json
            }
            pageSlug
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO title="Home" />
    </Layout>
  )
}

export default IndexPage
