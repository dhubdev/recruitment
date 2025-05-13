import { runAgent } from '$lib/ai/agents';
import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import { z } from 'zod'

export const POST: RequestHandler = async ({ request }) => {
  const { prompt } = await request.json() as { prompt: string }

  console.log({ prompt })

  const result = await runAgent({
    input: prompt,
    schema: z.object({
      hasCallToAction: z.boolean(),
      clarity: z.number().min(0).max(1)
    }),
    generatePrompt: (input) =>
      `Write a world class document for: ${input}.`,
    evaluatePrompt: (copy) =>
      `Evaluate this copy for:
      1. Call to action
      2. Clarity

      Requirements:
      1. Every **section must begin** with a heading tag ('<h2>', '<h3>', or '<h4>' depending on context).
      2. The **heading tag must have an id** that is a URL-friendly slug of its text content (e.g., "Privacy Policy" becomes 'id="privacy-policy"').
      3. Do **not** use '<strong>' or other inline tags to simulate section headings — **only use real heading tags** ('<h2>'–'<h4>') for titles or subtitles.
      4. Use appropriate HTML tags for content like '<p>', '<ul>', '<ol>', '<table>', and '<code>' as needed.
      5. The output must be wrapped in a single '<section>' or a set of semantic '<section>' tags.
      6. The output must be pure HTML. Do not include any Markdown or commentary.

      Copy to evaluate: ${copy}`,
    improvePrompt: (copy, qm) =>
      `Rewrite this marketing copy with:
      ${qm.clarity < 0.5 ? "- Improved clarity and directness" : ""}

      Original copy: ${copy}`
  });



  return json(result)
};