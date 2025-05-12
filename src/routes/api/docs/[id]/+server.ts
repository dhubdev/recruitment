import type { RequestHandler } from './$types';
import { deleteFile } from '$lib/server/imagekit';
import { deleteXataFile } from '$lib/xata/file';
import { addDoc, deleteDoc } from '$lib/xata/doc';
import { onError } from '@toolsntuts/utils';
import { authGuard, throwIfError } from '$lib/server';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
  return new Response();
};


export const DELETE: RequestHandler = async ({ request, params }) => {

  const { id } = params
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