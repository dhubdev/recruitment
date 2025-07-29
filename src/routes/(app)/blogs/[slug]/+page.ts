// src/routes/blog/[slug]/+page.ts
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { iPost } from '$lib/interface';
import { markedToHtml } from '$lib/client';

export const load: PageLoad = async ({ params }) => {
	const slug = params.slug;

	try {
		const files = await import.meta.glob(`/src/lib/content/blogs/*.md`, { query: '?raw', import: 'default' });

		const entries = Object.entries(files)

		const promises = entries.map(async ([path, resolver]) => {
			const rawContent = await resolver()
			const post = markedToHtml(rawContent)
			return post as iPost
		})
		const posts = await Promise.all(promises)
		const post = posts.find(p => p.slug === slug)

		if (!post) {
			throw error(404, `Post not found: ${slug}`);
		}

		return {
			posts, post
		};
	} catch (e) {
		throw error(404, `Post not found: ${slug}`);
	}
};
