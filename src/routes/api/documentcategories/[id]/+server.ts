import type { RequestHandler } from './$types';
import { deleteFile } from '$lib/server/imagekit';
import { deleteXataFile } from '$lib/xata/file';
import { deleteDocumentCategory } from '$lib/xata/documentcategory';
import { onError } from '@toolsntuts/utils';
import { authGuard, throwIfError } from '$lib/server';
import { json } from '@sveltejs/kit';
import type { iDocumentCategory } from '$lib/interface';
import { updateDocumentCategory } from '$lib/xata/documentcategory';

export const GET: RequestHandler = async () => {
  return new Response();
};


export const PATCH: RequestHandler = async ({ request, params, locals }) => {
  
  const { id } = params

  authGuard(locals)

  const documentcategory = await request.json() as iDocumentCategory

  const result = updateDocumentCategory(id, documentcategory)

  return json(result)
};

export const DELETE: RequestHandler = async ({ request, params, locals }) => {

  const { id } = params

  authGuard(locals)
  try {
    const result = await deleteDocumentCategory(id)

    return json(result)
  } catch (error: any) {
    return json(onError(error.message))
  }
};