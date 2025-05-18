import type { iUser } from '$lib/interface';
import type { LayoutServerLoad } from './$types';
import { getMe } from '$lib/xata/user'
import { getDocuments } from '$lib/xata/document';

export const load = (async ({ locals }) => {

  const user = locals.user

  const me = await getMe(user.emailAddresses[0].emailAddress) as iUser

  return { me, getDocuments: getDocuments() };
}) satisfies LayoutServerLoad;