import { getJob } from '$lib/xata/job';
import type { iResult } from '@toolsntuts/utils';
import type { PageServerLoad } from './$types';

export const load = (async ({ params, parent }) => {

  const { getDocumentCategories } = await parent()
  const { id } = params

  const documentCategories = await getDocumentCategories as iResult

  return { getJob: getJob(id), documentCategories };
}) satisfies PageServerLoad;