/** @jsx createElement */

import { createElement, FC } from 'react'
import { Link } from 'gatsby'
import { v4 } from 'uuid'

import { navigationRoutes } from '@/config/routes'

import { Route } from '@/models/route'

interface Props {
  active: boolean
}

const Navigation: FC<Props> = ({ active }) => {
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
    <nav className={`site-nav ${active && 'is-active'}`}>
      <ul className="site-links">{_renderLinks()}</ul>
    </nav>
  )
}

export default Navigation
