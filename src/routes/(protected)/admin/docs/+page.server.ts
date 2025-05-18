import type { iJob } from '$lib/interface';
import type { PageServerLoad } from './$types';
import { getDocuments } from '$lib/xata/document';

export const load = (async ({ }) => {

  return { getDocuments: getDocuments() }
}) satisfies PageServerLoad;