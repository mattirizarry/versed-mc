/** @jsx createElement */

import { createElement, FC } from 'react'
import { v4 } from 'uuid'

import { navigationRoutes } from '@/config/routes'

import { Route } from '@/models/route'
import AnimatedLink from '@/components/ui/AnimatedLink'

interface Props {
  active: boolean
}

const Navigation: FC<Props> = ({ active }) => {
  const _renderLinks = () => {
    return navigationRoutes.map((route: Route) => {
      const { slug, label } = route

      return (
        <AnimatedLink
          key={v4()}
          to={slug}
          className="nav-link"
          activeClassName="active"
        >
          {label.toLowerCase()}
        </AnimatedLink>
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
