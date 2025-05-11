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
      jobDescription: z.boolean(),
      jobRequirements: z.boolean(),
      whatWeOffer: z.boolean(),
      clarity: z.number().min(0).max(1)
    }),
    generatePrompt: (input) =>
      `Write a world class job vacancy: ${input}. Focus on the job description requirements, and what we offer`,
    evaluatePrompt: (copy) =>
      `Evaluate this copy for:
      1. Job description
      2. Job requirements
      3. What we offer
      Return response in html tag

      Copy to evaluate: ${copy}`,
    improvePrompt: (copy, qm) =>
      `Rewrite this marketing copy with:
      ${!qm.jobRequirements ? "- A list of job requirements" : ""}
      ${qm.jobDescription ? "- A world class job description" : ""}
      ${qm.whatWeOffer ? "- The perks we offer" : ""}
      ${qm.clarity < 0.5 ? "- Improved clarity and directness" : ""}

      Original copy: ${copy}`
  });



  return json(result)
};