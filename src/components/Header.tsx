/** @jsx createElement */

import { createElement, useState, SyntheticEvent } from 'react'

import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import Navigation from './Navigation'

const Header = () => {
  const query = useStaticQuery(
    graphql`
      {
        allContentfulAsset(filter: { title: { eq: "VersedMC Logo" } }) {
          nodes {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    `
  )

  const [navigationActive, setNavigationActive] = useState<boolean>(false)

  const _handleNavigation = (e: SyntheticEvent) => {
    setNavigationActive(!navigationActive)
  }

  return (
    <header className={`site-header ${navigationActive && 'nav-active'}`}>
      <button
        className={`hamburger hamburger--elastic ${navigationActive &&
          'is-active'}`}
        type="button"
        onClick={() => setNavigationActive(!navigationActive)}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      <Image fluid={query.allContentfulAsset.nodes[0].fluid} />
      <Navigation active={navigationActive} />
      <section className="quick-info">
        {/** server IP and online count */}
        {/** discord online and link */}
      </section>
    </header>
  )
}

export default Header
