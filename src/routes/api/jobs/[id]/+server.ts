import type { iFile, iJob } from '$lib/interface';
import { authGuard, throwIfError } from '$lib/server';
import { deleteJob, updateJob } from '$lib/xata/job';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { deleteXataFile } from '$lib/xata/file';
import { deleteFile } from '$lib/server/imagekit';
import { onError } from '@toolsntuts/utils';

export const GET: RequestHandler = async () => {
  return new Response();
};

export const PATCH: RequestHandler = async ({ locals, request, params }) => {

  const { id } = params

  authGuard(locals)

  const partialJob = await request.json() as Partial<iJob>

  const result = await updateJob(id, partialJob)

  return json(result);
};

export const DELETE: RequestHandler = async ({ locals, request, params }) => {
  const { id } = params

  authGuard(locals)

  try {
    const job = await request.json() as iJob
    const fileId = (job.file as iFile)?.fileId
    
    if (job.file) {
      const xataFileResult = await deleteXataFile(fileId)
      throwIfError(xataFileResult)
      const fileResult = await deleteFile(fileId)
      throwIfError(fileResult)
    }

    const result = await deleteJob(id)
    return json(result)
  } catch (error: any) {
    return json(onError(error.message))
  }

};