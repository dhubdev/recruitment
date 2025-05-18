import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { iDocument } from '$lib/interface';
import { addDoc } from '$lib/xata/document';
import { authGuard } from '$lib/server';

export const GET: RequestHandler = async () => {
  return new Response();
};

export const POST: RequestHandler = async ({ request, locals }) => {

  authGuard(locals)

  const partialDoc = await request.json() as Partial<iDocument>
  const addDocResult = await addDoc(partialDoc)
  return json(addDocResult)
};
