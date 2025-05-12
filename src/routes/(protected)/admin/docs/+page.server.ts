import type { iJob } from '$lib/interface';
import type { PageServerLoad } from './$types';
import { getDocs } from '$lib/xata/doc';

export const load = (async ({ }) => {
  
  return { getDocs: getDocs() }
}) satisfies PageServerLoad;