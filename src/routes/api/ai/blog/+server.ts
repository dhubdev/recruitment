import { runAgent } from '$lib/ai/agents';
import { SocialMediaLinks } from '$lib/constants';
import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import { z } from 'zod'

export const POST: RequestHandler = async ({ request }) => {
  const { prompt } = await request.json() as { prompt: string }


  const result = await runAgent({
    input: prompt,
    schema: z.object({
      hasCallToAction: z.boolean(),
      benefit: z.number().min(1).max(10),
      clarity: z.number().min(1).max(10),
      name: z.string(),
      title: z.string(),
      description: z.string(),
      slug: z.string()
    }),
    generatePrompt: (input) =>
      `Write a world class blog for: ${input}.
      
      - Include a contact us for more information section with an anchor "<a></a>" tag that opens whatsapp "https://api.whatsapp.com/send/?phone=%2B447930739927&text=Hello" when clicked
      - Make it SEO optimized. Include a follow us section with our social media links as anchor element "<a></a>" beneath the campaign:
        - Facebook (${SocialMediaLinks.WHATSAPP})
      - Also include study abroad SEO keywords or hashtags that can index the campaign on google search
    `,
    evaluatePrompt: (copy) =>
      `
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