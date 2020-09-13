/** @jsx createElement */

import { createElement } from 'react'

import Layout from '@/components/Layout'
import SEO from '@/components/SEO'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <main className="site-content">
      <aside>
        <iframe
          src="https://discordapp.com/widget?id=311419744567820289&theme=dark"
          width="350"
          height="500"
          allowtransparency="true"
          frameborder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        ></iframe>
      </aside>
    </main>
  </Layout>
)

export default IndexPage
