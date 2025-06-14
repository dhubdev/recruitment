import { getJob } from '$lib/xata/job';
import type { iResult } from '@toolsntuts/utils';
import type { PageServerLoad } from './$types';
import type { iDocumentCategory } from '$lib/interface';

export const load = (async ({ params, parent }) => {

  const { getDocumentCategories } = await parent()
  const { id } = params

  const result = await getDocumentCategories as iResult

  const documentCategories = result.data as iDocumentCategory[]
  return { getJob: getJob(id), documentCategories };
}) satisfies PageServerLoad;