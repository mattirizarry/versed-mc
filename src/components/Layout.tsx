/** @jsx createElement */

import { createElement, FC, ReactNode } from 'react'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

import '@/assets/styles/app.sass'

interface Props {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <section className="main-site">
      <Header />
      {children}
      <Footer />
    </section>
  )
}

export default Layout
