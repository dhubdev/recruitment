import type { iJob } from '$lib/interface';
import type { PageServerLoad } from './$types';
import { getJobs } from '$lib/xata/job';

export const load = (async ({ }) => {
  
  return { getJobs: getJobs() }
}) satisfies PageServerLoad;