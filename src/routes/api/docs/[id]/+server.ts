import type { RequestHandler } from './$types';
import { deleteFile } from '$lib/server/imagekit';
import { deleteXataFile } from '$lib/xata/file';
import { addDoc, deleteDoc } from '$lib/xata/doc';
import { onError } from '@toolsntuts/utils';
import { authGuard, throwIfError } from '$lib/server';
import { json } from '@sveltejs/kit';
import type { iDoc } from '$lib/interface';
import { updateDoc } from '$lib/xata/doc';

export const GET: RequestHandler = async () => {
  return new Response();
};


export const PATCH: RequestHandler = async ({ request, params, locals }) => {
  
  const { id } = params

  authGuard(locals)

  const doc = await request.json() as iDoc

  const result = updateDoc(id, doc)

  return json(result)
};

export const DELETE: RequestHandler = async ({ request, params, locals }) => {

  const { id } = params

  authGuard(locals)
  try {
    const formData = await request.formData()
    const fileId = formData.get("fileId") as string

    if (fileId) {
      const xataDocResult = await deleteXataFile(fileId)
      throwIfError(xataDocResult)
      const docResult = await deleteFile(fileId)
      throwIfError(docResult)
  
    }
    const result = await deleteDoc(id)

    return json(result)
  } catch (error: any) {
    return json(onError(error.message))
  }
};