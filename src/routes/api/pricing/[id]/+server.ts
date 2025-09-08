import type { iFile, iPricing } from '$lib/interface';
import { authGuard, throwIfError } from '$lib/server';
import { deletePricing, updatePricing } from '$lib/xata/pricing';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { deleteXataFile } from '$lib/xata/file';
import { deleteFile } from '$lib/server/imagekit';
import { onError, type iResult } from '@toolsntuts/utils';

export const GET: RequestHandler = async () => {
  return new Response();
};

export const PATCH: RequestHandler = async ({ locals, request, params }) => {

  const { id } = params

  authGuard(locals)

  const partialPricing = await request.json() as Partial<iPricing>

  const result = await updatePricing(id, partialPricing)

  return json(result);
};

const deletePricingFile = async (file: iFile) => {
  const fileId = file ? file?.fileId : null

  if (fileId) {
    const xataFileResult = await deleteXataFile(fileId) as iResult
    throwIfError(xataFileResult)
    const fileResult = await deleteFile(fileId)
    throwIfError(fileResult)
  }
}

export const DELETE: RequestHandler = async ({ locals, request, params }) => {
  const { id } = params

  authGuard(locals)

  try {
    const pricing = await request.json() as iPricing
    await deletePricingFile(pricing.cv as iFile)
    await deletePricingFile(pricing.coverLetter as iFile)
    // const cvFileId = pricing.cv ? (pricing.cv as iFile)?.fileId : null

    // if (cvFileId) {
    //   const xataFileResult = await deleteXataFile(cvFileId)
    //   throwIfError(xataFileResult)
    //   const fileResult = await deleteFile(cvFileId)
    //   throwIfError(fileResult)
    // }

    const result = await deletePricing(id)
    return json(result)
  } catch (error: any) {
    return json(onError(error.message))
  }

};