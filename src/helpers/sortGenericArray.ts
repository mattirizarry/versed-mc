import { ContentfulComparable } from "@/models/comparable"

export function ascendingSortGenericArray<T extends ContentfulComparable>(
  genericArray: T[]
) {
  let sortedGenericArray: T[] = genericArray.sort(
    (genericItemOne: T, genericItemTwo: T) => {
      if (genericItemOne.weight > genericItemTwo.weight) return 1
      else if (genericItemOne.weight < genericItemTwo.weight) return -1

      return 0
    }
  )

  return sortedGenericArray
}

export function descendingSortGenericArray<T extends ContentfulComparable>(
  genericArray: T[]
) {
  let sortedGenericArray: T[] = genericArray.sort(
    (genericItemOne: T, genericItemTwo: T) => {
      if (genericItemOne.weight > genericItemTwo.weight) return -1
      else if (genericItemOne.weight < genericItemTwo.weight) return 1

      return 0
    }
  )

  return sortedGenericArray
}