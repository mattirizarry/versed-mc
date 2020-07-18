/** @jsx createElement */

import { createElement, useState, SyntheticEvent } from 'react'

import Navigation from '@/components/Navigation'

const Header = () => {
  const [navigationActive, setNavigationActive] = useState<boolean>(false)

  const _handleNavigation = (e: SyntheticEvent) => {
    setNavigationActive(!navigationActive)
  }

  return (
    <header className={`site-header ${navigationActive && 'nav-active'}`}>
      <Navigation isOpen={navigationActive} handler={_handleNavigation} />
    </header>
  )
}

export default Header
