import type { iDoc } from '$lib/interface';
import { getDoc } from '$lib/xata/doc';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {

  const { id } = params

  const result = await getDoc(id)
  const doc = result.data as iDoc
  return { doc };
}) satisfies PageServerLoad;