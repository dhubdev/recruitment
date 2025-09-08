import { onError, onSuccess } from "@toolsntuts/utils"
import { getXataClient } from "."
import type { iPricing } from "$lib/interface"

export const getPricing = async (id: string) => {
  const xata = getXataClient()
  try {
    const pricing = await xata.db.pricing
      .filter({ xata_id: id })
      .select(["*", "coverLetter.*", "cv.*"])
      .getFirst()

    return onSuccess(pricing)
  } catch (error: any) {
    console.log("getPricing()", error.message)
    return onError(error.message)
  }
}

export const addPricing = async (partialPricing: Partial<iPricing>) => {
  const xata = getXataClient()
  try {
    console.log({ partialPricing, from: "addPricing" })
    const pricing = await xata.db.pricing.create(partialPricing)
    return onSuccess(pricing)
  } catch (error: any) {
    console.log("addPricing()", error.message)
    return onError(error.message)
  }
}

export const deletePricing = async (id: string) => {
  const xata = getXataClient()

  try {
    const pricing = await xata.db.pricing.delete(id)
    return onSuccess(pricing)
  } catch (error: any) {
    console.log("deletePricing()", error.message)
    return onError(error.message)
  }
}

export const updatePricing = async (id: string, data: any) => {

  console.log({ data, from: "updatePricing" })
  const xata = getXataClient()

  try {
    const pricing = await xata.db.pricing.update(id, data)
    return onSuccess(pricing)
  } catch (error: any) {
    console.log("updatePricing()", error.message)
    return onError(error.message)
  }
}

export const getPricings = async () => {
  const xata = getXataClient()

  try {
    const pricings = await xata.db.pricing
      .select(["*", "coverLetter.*", "cv.*"])
      .sort("xata_updatedat", "desc")
      .getMany({ pagination: { size: 200 } })

    return onSuccess(pricings)
  } catch (error: any) {
    console.log("getPricings()", error.message)
    return onError(error.message)
  }
}