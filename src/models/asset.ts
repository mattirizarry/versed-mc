export interface AssetModel {
  fluid: any
}

export interface ContentfulAssetResponse {
  allContentfulAsset: {
    nodes: AssetModel[]
  }
}