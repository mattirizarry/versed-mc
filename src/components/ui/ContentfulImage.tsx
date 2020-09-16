/** @jsx createElement */

import { createElement, FC } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

const ContentfulImage: FC<{ id: string }> = ({ id }) => {

  const query = useStaticQuery(
    graphql`
      {
        allContentfulAsset {
          nodes {
            contentful_id
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    `
  )

  const fluid = query.allContentfulAsset.nodes.filter((node) => node.contentful_id == id)[0]

  console.log(fluid)

  return <Image fluid={ fluid.fluid }/>
}

export default ContentfulImage