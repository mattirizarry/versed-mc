/** @jsx createElement */

import { createElement } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import Layout from '@/components/Layout'
import SEO from '@/components/SEO'

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
        allContentfulAsset(filter: { title: { eq: "jumbotron" } }) {
          nodes {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO title="Home" />
      <section className="jumbotron">
        <Image fluid={query.allContentfulAsset.nodes[0].fluid} />
        <section className="jumbotron-text">
          <h1>A premier SMP experience</h1>
          <code>play.versedmc.com</code>
        </section>
      </section>
    </Layout>
  )
}

export default IndexPage
