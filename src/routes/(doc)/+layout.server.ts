import type { iUser } from '$lib/interface';
import type { LayoutServerLoad } from './$types';
import { getMe } from '$lib/xata/user'

export const load = (async ({ locals }) => {

  const user = locals.user

  const me = await getMe(user.emailAddresses[0].emailAddress) as iUser

  return { me };
}) satisfies LayoutServerLoad;