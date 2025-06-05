import { getApplication } from '$lib/xata/application';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {

  const { id } = params

  const result = await getApplication(id)
  return { result };
}) satisfies PageServerLoad;