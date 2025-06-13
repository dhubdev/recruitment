import type { iApplication } from '$lib/interface';
import { getApplication } from '$lib/xata/application';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {

  const { id } = params

  const result = await getApplication(id)

  const application = result.data as iApplication
  return { application };
}) satisfies PageServerLoad;