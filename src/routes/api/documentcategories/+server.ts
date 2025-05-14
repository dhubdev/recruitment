import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { iDocumentCategory } from '$lib/interface';
import { addDocumentCategory } from '$lib/xata/documentcategory';
import { authGuard } from '$lib/server';

export const GET: RequestHandler = async () => {
  return new Response();
}; 

export const POST: RequestHandler = async ({ request, locals }) => {

  authGuard(locals)

  const partialDocumentCategory = await request.json() as Partial<iDocumentCategory>
  const addDocumentCategoryResult = await addDocumentCategory(partialDocumentCategory)
  return json(addDocumentCategoryResult)
};
