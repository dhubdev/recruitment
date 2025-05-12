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

      Return response in html tag

      Copy to evaluate: ${copy}`,
    improvePrompt: (copy, qm) =>
      `Rewrite this marketing copy with:
      ${qm.clarity < 0.5 ? "- Improved clarity and directness" : ""}

      Original copy: ${copy}`
  });



  return json(result)
};