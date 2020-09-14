/** @jsx createElement */

import { createElement, FC } from 'react'
import Image from 'gatsby-image'
import { Link } from 'gatsby'

interface Props {
  fluid: any
  header: string
  subHeader?: string
  buttonText?: string
  buttonSlug?: string
}

const Jumbotron: FC<Props> = ({
  fluid,
  header,
  subHeader,
  buttonSlug,
  buttonText,
}) => {
  return (
    <section className="jumbotron">
      <Image fluid={fluid} />
      <section className="jumbotron-text">
        <h1>{header}</h1>
        {subHeader && <code>{subHeader}</code>}
        {buttonText && (
          <button className="cta-button">
            <Link to={buttonSlug}>{buttonText}</Link>
          </button>
        )}
      </section>
    </section>
  )
}

export default Jumbotron
