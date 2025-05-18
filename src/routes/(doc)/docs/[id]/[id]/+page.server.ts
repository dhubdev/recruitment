import type { iDocument } from '$lib/interface';
import { getDocument } from '$lib/xata/document';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {

  const { id } = params

  const result = await getDocument(id)
  const doc = result.data as iDocument
  return { doc };
}) satisfies PageServerLoad;