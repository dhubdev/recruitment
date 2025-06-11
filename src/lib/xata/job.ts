import { onError, onSuccess } from "@toolsntuts/utils"
import { getXataClient } from "."
import type { iJob } from "$lib/interface"

export const getJob = async (id: string) => {
  const xata = getXataClient()
  try {
    const job = await xata.db.job
      .filter({ xata_id: id })
      .select(["*", "file.*", "category.*"])
      .getFirst()

    return onSuccess(job)
  } catch (error: any) {
    console.log("getJob()", error.message)
    return onError(error.message)
  }
}

export const addJob = async (partialJob: Partial<iJob>) => {
  const xata = getXataClient()
  try {
    console.log({ partialJob, from: "addJob" })
    const job = await xata.db.job.create(partialJob)
    return onSuccess(job)
  } catch (error: any) {
    console.log("addJob()", error.message)
    return onError(error.message)
  }
}

export const deleteJob = async (id: string) => {
  const xata = getXataClient()

  try {
    const job = await xata.db.job.delete(id)
    return onSuccess(job)
  } catch (error: any) {
    console.log("deleteJob()", error.message)
    return onError(error.message)
  }
}

export const updateJob = async (id: string, data: any) => {

  console.log({ data, from: "updateJob" })
  const xata = getXataClient()

  try {
    const job = await xata.db.job.update(id, data)
    return onSuccess(job)
  } catch (error: any) {
    console.log("updateJob()", error.message)
    return onError(error.message)
  }
}

export const getJobs = async () => {
  const xata = getXataClient()

  try {
    const jobs = await xata.db.job
      .select(["*", "file.*", "category.*"])
      .sort("xata_updatedat", "desc")
      .getMany({ pagination: { size: 200 } })

    return onSuccess(jobs)
  } catch (error: any) {
    console.log("getJobs()", error.message)
    return onError(error.message)
  }
}