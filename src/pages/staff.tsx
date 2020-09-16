/** @jsx createElement */

import { createElement } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { v4 } from 'uuid'

import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import StaffMember from '@/components/ui/StaffMember'

import { StaffModel, ContentfulStaffResponse } from '@/models/staff'

import { ascendingSortGenericArray } from '@/helpers/sortGenericArray'
import Jumbotron from '@/components/ui/Jumbotron'
import { ContentfulAssetResponse } from '@/models/asset'

const Staff = () => {

  const query = useStaticQuery<ContentfulStaffResponse | ContentfulAssetResponse>(
    graphql`
      {
        allContentfulAsset(filter: { title: { eq: "jumbotron" } }) {
          nodes {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
        allContentfulStaffMember {
          nodes {
            profilePicture {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
            roles {
              colorCode
              roleName
            }
            name
            weight
            biography {
              biography
            }
          }
        }
      }
    `
  )

  const _renderStaffMembers = (staffMembers: StaffModel[]) => {
    return staffMembers.map((staffMember: StaffModel) => <StaffMember key={ v4() } {...staffMember}/>)
  }

  return (
    <Layout>
      <SEO title="Staff" />
      <Jumbotron
        fluid={(query as ContentfulAssetResponse).allContentfulAsset.nodes[0].fluid}
        header="Staff List"
      />
      <section className="staff-list">
        {_renderStaffMembers(ascendingSortGenericArray((query as ContentfulStaffResponse).allContentfulStaffMember.nodes))}
      </section>
    </Layout>
  )
}

export default Staff
