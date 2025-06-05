import { getApplication } from '$lib/xata/application';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ params, url, locals }) => {

  const { id } = params
  const {userId} = locals.auth()
  const pathname = url.pathname
  if (!userId) {
    throw redirect(302, `/sign-in?redirect=${pathname}`)
  }

  const result = await getApplication(id)
  return { result };
}) satisfies PageServerLoad;