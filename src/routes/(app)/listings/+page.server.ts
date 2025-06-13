import { getJobs } from '$lib/xata/job';
import type { PageServerLoad } from './$types';

export const load = (async () => {

  return { getJobs: getJobs() }
}) satisfies PageServerLoad;