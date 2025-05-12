import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { iDoc } from '$lib/interface';
import { addDoc } from '$lib/xata/doc';
import { authGuard } from '$lib/server';

export const GET: RequestHandler = async () => {
  return new Response();
}; 

export const POST: RequestHandler = async ({ request, locals }) => {

  authGuard(locals)

  const partialDoc = await request.json() as Partial<iDoc>
  const addDocResult = await addDoc(partialDoc)
  return json(addDocResult)
};
