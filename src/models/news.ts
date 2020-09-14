export interface NewsModel {
  postBody: {
    json: any
  }
  pageSlug: string
}

export interface ContentfulNewsResponse {
  data: {
    allContentfulFeature: {
      nodes: NewsModel[]
    }
  }
}
