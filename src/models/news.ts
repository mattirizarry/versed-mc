import { RoleModel } from "@/models/role"

export interface NewsModel {
  postBody: {
    json: any
  }
  postTitle: string
  pageSlug: string
  author: {
    name: string
    roles: RoleModel[]
    profilePicture: {
      fluid: any
    }
  }
  featuredImage: {
    fluid: any
  }
}

export interface ContentfulNewsResponse {
  data: {
    allContentfulFeature: {
      nodes: NewsModel[]
    }
  }
}
