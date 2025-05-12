import type { iDoc } from "$lib/interface";
import { onError, onSuccess } from "@toolsntuts/utils";
import { getXataClient } from ".";

export const addDoc = async (partialDoc: Partial<iDoc>) => {
  const xata = getXataClient()

  try {
    const doc = await xata.db.doc.create(partialDoc)
    return onSuccess(doc)
  } catch (error: any) {
    console.log("addDoc()", error.message)
    return onError(error.message)
  }
}

export const getDoc = async (docId: string) => {
  const xata = getXataClient()

  try {
    const doc = await xata.db.doc.read(docId)
    return onSuccess(doc)
  } catch (error: any) {
    console.log("addDoc()", error.message)
    return onError(error.message)
  }
}

export const updateDoc = async (docId: string, data: any) => {
  const xata = getXataClient()
  try {
    const doc = await xata.db.doc.update(docId, data)
    return onSuccess(doc)
  } catch (error: any) {
    console.log("updateDoc()", error.message)
    return onError(error.message)
  }
}

export const deleteDoc = async (docId: string) => {
  const xata = getXataClient()

  try {
    const exists = await xata.db.doc.filter({ xata_id: docId }).getFirst()

    if (exists) {
      const doc = await xata.db.doc.delete(exists.xata_id)
      return onSuccess(doc)
    } else {
      throw new Error("doc doesn't exist")
    }
  } catch (error: any) {
    console.log("deleteDoc()", error.message)
    return onError(error.message)
  }
}

export const getDocs = async () => {
  const xata = getXataClient()

  try {
    const docs = await xata.db.doc
      .getMany({ pagination: { size: 200 } })
    return onSuccess(docs)
  } catch (error: any) {
    console.log("getDocs()", error.message)
    return onError(error.message)
  }
}