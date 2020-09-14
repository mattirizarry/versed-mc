/** @jsx createElement */

import { createElement, ReactNode, FC } from 'react'

import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Link } from 'gatsby'

interface Props {
  children: ReactNode
  to: string
  className?: string
  activeClassName?: string
}

const AnimatedLink: FC<Props> = ({
  children,
  to,
  className,
  activeClassName,
}) => {
  return (
    <AniLink
      paintDrip
      duration={0.4}
      hex="#212529"
      to={to}
      className={className}
      activeClassName={activeClassName}
    >
      {children}
    </AniLink>
  )
}

export default AnimatedLink
