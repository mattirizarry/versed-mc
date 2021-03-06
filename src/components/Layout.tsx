/** @jsx createElement */

import { createElement, FC, ReactNode } from 'react'

import Header from '@/components/Header'

import '@/assets/styles/app.sass'

interface Props {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <section className="main-site">
      <Header />
      <main className="site-content">{children}</main>
    </section>
  )
}

export default Layout
