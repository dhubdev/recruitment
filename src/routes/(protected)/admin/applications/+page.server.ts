import { getApplications } from '$lib/xata/application';
import type { PageServerLoad } from './$types';

export const load = (async ({ }) => {
  
  return { getApplications: getApplications()}
}) satisfies PageServerLoad;