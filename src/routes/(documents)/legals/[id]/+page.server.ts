import { getDocument } from '$lib/xata/document';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
  const { id } = params

  const result = await getDocument(id)
  return { result };
}) satisfies PageServerLoad;