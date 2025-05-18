import type { PageServerLoad } from './$types';
import { getDocumentCategories } from '$lib/xata/documentcategory';

export const load = (async ({ }) => {

  return { getDocuments: getDocumentCategories() }
}) satisfies PageServerLoad;