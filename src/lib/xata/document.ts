import type { iDocument } from "$lib/interface";
import { onError, onSuccess } from "@toolsntuts/utils";
import { getXataClient } from ".";

export const addDoc = async (partialDoc: Partial<iDocument>) => {
  const xata = getXataClient()

  try {
    const document = await xata.db.document.create(partialDoc)
    return onSuccess(document)
  } catch (error: any) {
    console.log("addDoc()", error.message)
    return onError(error.message)
  }
}

export const getDocument = async (docId: string) => {
  const xata = getXataClient()

  try {
    const document = await xata.db.document
      .filter({ xata_id: docId })
      .select(["*", "category.*"])
      .getFirst()

    return onSuccess(document)
  } catch (error: any) {
    console.log("addDoc()", error.message)
    return onError(error.message)
  }
}

export const getDocBySlug = async (slug: string) => {
  const xata = getXataClient()

  try {
    const document = await xata.db.document.filter({
      slug
    }).getFirst()
    return onSuccess(document)
  } catch (error: any) {
    console.log("addDoc()", error.message)
    return onError(error.message)
  }
}

export const updateDoc = async (id: string, data: any) => {
  const xata = getXataClient()
  try {
    const document = await xata.db.document.update(id, data)
    return onSuccess(document)
  } catch (error: any) {
    console.log("updateDoc()", error.message)
    return onError(error.message)
  }
}

export const deleteDoc = async (docId: string) => {
  const xata = getXataClient()

  try {
    const exists = await xata.db.document.filter({ xata_id: docId }).getFirst()

    if (exists) {
      const document = await xata.db.document.delete(exists.xata_id)
      return onSuccess(document)
    } else {
      throw new Error("document doesn't exist")
    }
  } catch (error: any) {
    console.log("deleteDoc()", error.message)
    return onError(error.message)
  }
}

export const getDocuments = async () => {
  const xata = getXataClient()

  try {
    const docs = await xata.db.document
      .select(["*", "category.*"])
      .getMany({ pagination: { size: 200 } })
    return onSuccess(docs)
  } catch (error: any) {
    console.log("getDocuments()", error.message)
    return onError(error.message)
  }
}