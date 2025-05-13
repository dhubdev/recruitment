import { getDocBySlug, getDocs } from '$lib/xata/doc';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {

  const { id } = params
  return {
    getDoc: getDocBySlug(id),
    getDocs: getDocs()
  };
}) satisfies PageServerLoad;