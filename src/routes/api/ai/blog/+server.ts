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
      ` - Write a one page blog for the following: ${input}.
        - Include a contact us for more information section with an anchor "<a></a>" tag that opens whatsapp "https://api.whatsapp.com/send/?phone=%2B447930739927&text=Hello" when clicked
        - Make it SEO optimized. Include a follow us section with our social media links as anchor element "<a></a>" beneath the blog:
          - WhatsApp (${SocialMediaLinks.WHATSAPP})
        - Also include study abroad SEO keywords or hashtags that can index the blog on google search
    `,
    evaluatePrompt: (copy) =>
      `
          Evaluate this copy for:
          1. Presence social media links
          2. Hash Tags or SEO links
          3. Clarity (1-10)

          From the copy generate:
          1. Title of the blog
          3. Brief description of the blog
          4. URL slug / pathname for the blog
          5. Return response in html format

          Copy to evaluate: ${copy}`,
    improvePrompt: (copy, qm) =>
      `Rewrite this marketing copy with:
      ${qm.clarity < 5 ? "- Improved clarity and directness" : ""}

      Original copy: ${copy}`
  });



  return json(result)
};