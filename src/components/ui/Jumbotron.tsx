/** @jsx createElement */

import { createElement, FC } from 'react'
import Image from 'gatsby-image'
import { Link } from 'gatsby'
import AnimatedLink from '@/components/ui/AnimatedLink'

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
          <AnimatedLink to={buttonSlug} className="cta-button">
            {buttonText}
          </AnimatedLink>
        )}
      </section>
    </section>
  )
}

export default Jumbotron
