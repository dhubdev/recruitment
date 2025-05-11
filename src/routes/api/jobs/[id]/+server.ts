import type { iJob } from '$lib/interface';
import { authGuard } from '$lib/server';
import { updateJob } from '$lib/xata/job';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

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