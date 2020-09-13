/** @jsx createElement */

import { createElement, useState, SyntheticEvent, useEffect } from 'react'

import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

import Navigation from '@/components/Navigation'

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
  const [serverOnline, setServerOnline] = useState<Number>(0)
  const [discordOnline, setDiscordOnline] = useState<Number>(0)

  useEffect(() => {
    fetch('https://discordapp.com/api/guilds/311419744567820289/widget.json', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(resp => resp.json())
      .then(data => setDiscordOnline(data.presence_count))

    fetch('https://api.mcsrvstat.us/2/play.versedmc.com')
      .then(resp => resp.json())
      .then(data => setServerOnline(data.players.online))
  }, [])

  const _handleNavigation = (e: SyntheticEvent) => {
    setNavigationActive(!navigationActive)
  }

  const _handleCopyIp = (e: SyntheticEvent) => {
    const ip = 'play.versedmc.com'

    navigator.clipboard
      .writeText(ip)
      .then(() => {
        console.log('async: copy was successful')
      })
      .catch(() => {
        console.log('async: copy was unsuccessful')
      })
  }

  return (
    <header className={`site-header ${navigationActive && 'nav-active'}`}>
      <button
        className={`hamburger hamburger--elastic ${navigationActive &&
          'is-active'}`}
        type="button"
        onClick={_handleNavigation}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      <Image fluid={query.allContentfulAsset.nodes[0].fluid} />
      <Navigation active={navigationActive} />
      <section className="quick-info">
        <section className="server-info">
          <p>
            <strong>{serverOnline} playing now</strong>
          </p>
          <a onClick={_handleCopyIp}>play.versedmc.com</a>
        </section>
        <section className="discord-info">
          <p>
            <strong>{discordOnline}</strong> online now
          </p>
          <a>Join our Discord!</a>
        </section>
      </section>
    </header>
  )
}

export default Header
