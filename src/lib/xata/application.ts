import { onError, onSuccess } from "@toolsntuts/utils"
import { getXataClient } from "."
import type { iApplication } from "$lib/interface"

export const getApplication = async (id: string) => {
  const xata = getXataClient()
  try {
    const application = await xata.db.application
      .filter({ xata_id: id })
      .select(["*", "applicationLetter.*", "cv.*", "job.*", "job.file.*"])
      .getFirst()

    return onSuccess(application)
  } catch (error: any) {
    console.log("getApplication()", error.message)
    return onError(error.message)
  }
}

export const addApplication = async (partialApplication: Partial<iApplication>) => {
  const xata = getXataClient()
  try {
    console.log({ partialApplication, from: "addApplication" })
    const application = await xata.db.application.create(partialApplication)
    return onSuccess(application)
  } catch (error: any) {
    console.log("addApplication()", error.message)
    return onError(error.message)
  }
}

export const deleteApplication = async (id: string) => {
  const xata = getXataClient()

  try {
    const application = await xata.db.application.delete(id)
    return onSuccess(application)
  } catch (error: any) {
    console.log("deleteApplication()", error.message)
    return onError(error.message)
  }
}

export const updateApplication = async (id: string, data: any) => {

  console.log({ data, from: "updateApplication" })
  const xata = getXataClient()

  try {
    const application = await xata.db.application.update(id, data)
    return onSuccess(application)
  } catch (error: any) {
    console.log("updateApplication()", error.message)
    return onError(error.message)
  }
}

export const getApplications = async () => {
  const xata = getXataClient()

  try {
    const applications = await xata.db.application
      .select(["*", "applicationLetter.*", "cv.*", "job.*", "job.file.*"])
      .sort("xata_updatedat", "desc")
      .getMany({ pagination: { size: 200 } })

    return onSuccess(applications)
  } catch (error: any) {
    console.log("getApplications()", error.message)
    return onError(error.message)
  }
}