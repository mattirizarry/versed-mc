export interface Meta {
  content: string
}

export interface MetaProperty extends Meta {
  property: string
}

export interface MetaItem extends Meta {
  name: string
}
