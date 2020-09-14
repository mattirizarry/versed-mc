/** @jsx createElement */

import { createElement, FC } from 'react'
import Image from 'gatsby-image'
import { FeatureModel } from '@/models/feature'

const Feature: FC<FeatureModel> = ({ feature, description, icon: { file: { url }} }) => {
  return (
    <section className="feature">
      <svg width="90" height="90">       
        <image xlinkHref={ url } width="90" height="90"/>    
      </svg>
      <h2>{ feature }</h2>
      <p>{ description }</p>
    </section>
  )
}

export default Feature