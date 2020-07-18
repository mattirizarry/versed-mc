/** @jsx createElement */

import { createElement, FC } from 'react'
import { Link } from 'gatsby'
import { v4 } from 'uuid'

import { navigationRoutes } from '@/config/routes'

import { Route } from '@/models/route'

interface Props {
  handler: any
  isOpen: boolean
}

const Navigation: FC<Props> = ({ handler, isOpen }) => {
  const _renderLinks = () => {
    return navigationRoutes.map((route: Route) => {
      const { slug, label } = route

      return (
        <Link
          key={v4()}
          to={slug}
          className="nav-link"
          activeClassName={'active'}
        >
          {label.toLowerCase()}
        </Link>
      )
    })
  }

  return (
    <nav className="site-nav">
      {_renderLinks()}
    </nav>
  )
}

export default Navigation
