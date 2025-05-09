import type { iUser } from '$lib/interface';
import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { getMe } from '$lib/xata/user'
import { Role } from '$lib/constants';

export const load = (async ({ locals, url }) => {

  const {userId} = locals.auth()
  const user = locals.user
  const pathname = url.pathname
  if (!userId) {
    throw redirect(302, `/sign-in?redirect=${pathname}`)
  }

  const me = await getMe(user.emailAddresses[0].emailAddress) as iUser


  if (!me || me.role !== Role.ADMIN) {
    throw redirect(302, '/')
  }
  
  return { me };
}) satisfies LayoutServerLoad;