export interface FeatureModel {
  feature: string
  description: string
  icon: {
    file: {
      url: string
    }
  }
}

export interface ContentfulFeatureResponse {
  data: {
    allContentfulFeature: {
      nodes: FeatureModel[]
    }
  }
}