/** @jsx createElement */

import { createElement, FC } from 'react'

import { RoleModel } from '@/models/role'

const Role: FC<RoleModel> = ({ roleName, colorCode }) => {
  return (
    <strong className="author-role" style={{ background: colorCode }}>
      {roleName}
    </strong>
  )
}

export default Role
