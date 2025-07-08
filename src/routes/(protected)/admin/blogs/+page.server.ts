import { getBlogs } from '$lib/xata/blog';
import type { PageServerLoad } from './$types';

export const load = (async () => {
  const result = await getBlogs()
  const blogs = result.data ?? []
  return { blogs };
}) satisfies PageServerLoad;