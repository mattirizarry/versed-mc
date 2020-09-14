/** @jsx createElement */

import { createElement } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import Jumbotron from '@/components/ui/Jumbotron'
import Features from '@/components/ui/Features'

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
        allContentfulFeature {
          nodes {
            feature
            description
            icon {
              file {
                url
              }
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO title="Home" />
      <Jumbotron
        fluid={query.allContentfulAsset.nodes[0].fluid}
        header="A premier survival experience"
        subHeader="play.versedmc.com"
        buttonText="news ⟶"
        buttonSlug="/news"
      />
      <Features features={query.allContentfulFeature.nodes} />
    </Layout>
  )
}

export default IndexPage
