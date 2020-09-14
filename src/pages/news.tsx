/** @jsx createElement */

import { createElement } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { v4 } from 'uuid'

import { NewsModel } from '@/models/news'

import NewsCard from '@/components/ui/NewsCard'
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import Jumbotron from '@/components/ui/Jumbotron'

const News = () => {
  const query = useStaticQuery(
    graphql`
      {
        allContentfulAsset(filter: { title: { eq: "jumbotron" } }) {
          nodes {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
        allContentfulNews {
          nodes {
            postBody {
              json
            }
            postTitle
            author {
              name
              roles {
                colorCode
                roleName
              }
              profilePicture {
                fluid {
                  ...GatsbyContentfulFluid
                }
              }
            }
            pageSlug
            featuredImage {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    `
  )

  const _renderNewsCards = (news: NewsModel[]) => {
    return news.map(newsPost => <NewsCard key={v4()} {...newsPost} />)
  }

  return (
    <Layout>
      <SEO title="News" />
      <Jumbotron
        fluid={query.allContentfulAsset.nodes[0].fluid}
        header="News, Announcements and More"
      />
      <section className="news">
        {_renderNewsCards(query.allContentfulNews.nodes)}
      </section>
    </Layout>
  )
}

export default News
