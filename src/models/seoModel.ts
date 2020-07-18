import { MetaItem, MetaProperty } from '@/models/metaItem'

export interface SEOModel {
  title: string
  lang?: string
  description?: string
  meta?: MetaItem[] | MetaProperty[]
}
