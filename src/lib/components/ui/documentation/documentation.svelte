<script lang="ts" module>
  export interface iHeading {
    id: string;
    text: string;
  }

  export interface iDocumentation {
    title: string;
    slug: string;
  }

  export interface iSection {
    id: string;
    title: string;
    content: string;
  }
</script>

<script lang="ts">
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { Drawer, DrawerContent, DrawerTrigger } from '../drawer';
  import { Button } from '../button';
  import { cn } from '$lib/utils';

  interface Props {
    documentations: iDocumentation[];
    headings: iHeading[];
    sections: iSection[];
  }

  let { documentations, headings, sections }: Props = $props();
  const activeHeading = writable<string>('');

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeHeading.set(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -70% 0px', threshold: 0.1 }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  });
</script>

<div class="flex flex-col min-h-screen">
  <header class="p-4 border-b bg-white sticky top-0 z-40 shadow-sm">
    <div class="flex justify-between items-center">
      <h1 class="text-lg font-semibold">Documentation</h1>
      <div class="flex gap-2 lg:hidden">
        <Drawer>
          <DrawerTrigger><Button variant="outline" size="sm">Blogs</Button></DrawerTrigger>
          <DrawerContent class="p-6 overflow-y-auto max-h-[80vh]">
            <h2 class="text-lg font-semibold mb-4">All Blogs</h2>
            <ul class="space-y-2">
              {#each documentations as post}
                <li><a href={post.slug} class="hover:text-blue-600 block truncate">{post.title}</a></li>
              {/each}
            </ul>
          </DrawerContent>
        </Drawer>

        <Drawer>
          <DrawerTrigger><Button variant="outline" size="sm">On This Page</Button></DrawerTrigger>
          <DrawerContent class="p-6 overflow-y-auto max-h-[80vh]">
            <h2 class="text-lg font-semibold mb-4">On This Page</h2>
            <ul class="space-y-2 text-sm">
              {#each headings as h}
                <li>
                  <a href={'#' + h.id} class={cn(
                    'block hover:text-blue-600',
                    $activeHeading === h.id ? 'text-blue-600 font-medium' : 'text-gray-600'
                  )}>{h.text}</a>
                </li>
              {/each}
            </ul>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  </header>

  <div class="flex flex-1 w-full">
    <aside class="hidden md:block w-64 border-r border-gray-200 p-6 overflow-y-auto sticky top-20">
      <h2 class="text-xl font-semibold mb-4">All Blogs</h2>
      <ul class="space-y-2">
        {#each documentations as post}
          <li><a href={post.slug} class="hover:text-blue-600 block truncate">{post.title}</a></li>
        {/each}
      </ul>
    </aside>

    <main class="flex-1 max-w-4xl p-6 prose dark:prose-invert">
      {#each sections as section}
        <section id={section.id}>
          <h2>{section.title}</h2>
          {@html section.content}
        </section>
      {/each}
    </main>

    <aside class="hidden lg:block w-64 border-l border-gray-200 p-6 overflow-y-auto sticky top-20">
      <h2 class="text-xl font-semibold mb-4">On This Page</h2>
      <ul class="space-y-2 text-sm">
        {#each headings as h}
          <li>
            <a href={'#' + h.id} class={cn(
              'block hover:text-blue-600',
              $activeHeading === h.id ? 'text-blue-600 font-medium' : 'text-gray-600'
            )}>{h.text}</a>
          </li>
        {/each}
      </ul>
    </aside>
  </div>

  <footer class="p-6 border-t text-center text-sm bg-gray-50">
    © 2025 Your Name. All rights reserved.
  </footer>
</div>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
</style>
