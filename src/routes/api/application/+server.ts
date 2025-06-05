import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { addApplication } from '$lib/xata/application';

export const GET: RequestHandler = async () => {
  return new Response();
};

export const POST: RequestHandler = async ({ request }) => {
  
  const partialApply = await request.json()

  const result = await addApplication(partialApply)
  return json(result)
};