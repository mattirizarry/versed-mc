/** @jsx createElement */

import { createElement, FC } from 'react'
import Image from 'gatsby-image'

import { StaffModel } from '@/models/staff'
import { RoleModel } from '@/models/role'
import Role from '@/components/ui/Role'
import { v4 } from 'uuid'

const StaffMember: FC<StaffModel> = ({ profilePicture, roles, name, biography }) => {

  const _renderStaffRoles = (roles: RoleModel[]) => {
    return roles.map((role) => <Role key={ v4() } {...role} />)
  }

  return (
    <section className="staff-card">
      { profilePicture && <Image fluid={ profilePicture.fluid } /> }
      <h1 className="staff-name">{ name }</h1>
      <section className="staff-roles">
        {_renderStaffRoles(roles)}
      </section>
      <p className="staff-bio">
        { biography && biography.biography || "test"}
      </p>
    </section>
  )
}

export default StaffMember