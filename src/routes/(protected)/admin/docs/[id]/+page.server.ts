import { getJob } from '$lib/xata/job';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {

  const { id } = params

  return { getJob: getJob(id) };
}) satisfies PageServerLoad;