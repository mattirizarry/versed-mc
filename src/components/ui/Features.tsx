/** @jsx createElement */

import { createElement, FC } from 'react'
import { v4 } from 'uuid'

import { FeatureModel } from '@/models/feature'

import Feature from '@/components/ui/Feature'

interface Props {
  features: FeatureModel[]
}

const Features: FC<Props> = ({ features }) => {
  const _renderFeatures = () => {
    return features.map(feature => <Feature key={v4()} {...feature} />)
  }

  return <section className="features">{_renderFeatures()}</section>
}

export default Features
