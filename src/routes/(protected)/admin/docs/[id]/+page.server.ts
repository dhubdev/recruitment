import { getDoc } from '$lib/xata/doc';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {

  const { id } = params

  return { getDoc: getDoc(id) };
}) satisfies PageServerLoad;