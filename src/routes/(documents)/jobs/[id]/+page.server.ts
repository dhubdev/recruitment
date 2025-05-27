import { getJob } from '$lib/xata/job';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
  const { id } = params

  const result = await getJob(id)
  return { result };
}) satisfies PageServerLoad;