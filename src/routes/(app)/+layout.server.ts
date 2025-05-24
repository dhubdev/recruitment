import type { iUser } from '$lib/interface';
import { getDocuments } from '$lib/xata/document';
import { getMe } from '$lib/xata/user';
import type { LayoutServerLoad } from './$types'; 

export const load = (async ({ locals, setHeaders }) => {

  setHeaders({
    'cache-control': 'no-store'
  });
  const user = locals.user

  let me = null

  if (user) {
    me = await getMe(user.emailAddresses[0].emailAddress) as iUser
  }
  
  return { me, getDocuments: getDocuments() };
}) satisfies LayoutServerLoad;