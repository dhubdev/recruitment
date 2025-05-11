import type { iJob } from '$lib/interface';
import { authGuard } from '$lib/server';
import { addJob } from '$lib/xata/job';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
  return new Response();
};

export const DELETE: RequestHandler = async ({ request, locals }) => {
  
  return new Response();
};

export const POST: RequestHandler = async ({ locals, request }) => {
  authGuard(locals)

  const partialJob = await request.json() as Partial<iJob>

  const result = await addJob(partialJob)
  return new Response();
};