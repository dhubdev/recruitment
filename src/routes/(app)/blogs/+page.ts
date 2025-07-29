// src/routes/blog/+page.server.ts
import type { PageLoad } from './$types';
import type { iPost } from '$lib/interface'; // adjust path as needed

export const load: PageLoad = async () => {
  const modules = import.meta.glob('/src/lib/content/blogs/*.md', { eager: true });

  const posts: iPost[] = Object.entries(modules).map(([path, mod]) => {
    const metadata = (mod as any).metadata as Record<string, any>;
    const slug = path.split('/').pop()?.replace(/\.md$/, '') as string;

    return {
      slug,
      author: metadata.author,
      imageUrl: metadata.imageUrl,
      title: metadata.title,
      imageHint: metadata.imageHint,
      date: metadata.date,
      excerpt: metadata.excerpt,
      // content: (mod as any).default as string
      content: ''
    };
  });

  // optionally sort by date descending
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return { posts };
};
