import { GEMINI_API_KEY } from "$env/static/private";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateObject, generateText } from "ai";
import { z, type ZodRawShape } from "zod";
import { parse } from "marked";
// import { SocialMediaLinks } from "$lib/constants";

const gemini = createGoogleGenerativeAI({
  apiKey: GEMINI_API_KEY
});

type AgentConfig<T extends ZodRawShape> = {
  input: string;
  schema: z.ZodObject<T>;
  generatePrompt: (input: string) => string;
  evaluatePrompt: (generated: string) => string;
  improvePrompt?: (generated: string, metrics: z.infer<z.ZodObject<T>>) => string;
  parseMarkdown?: boolean;
};

export const runAgent = async <T extends ZodRawShape>({
  input,
  schema,
  generatePrompt,
  evaluatePrompt,
  improvePrompt,
  parseMarkdown = true
}: AgentConfig<T>) => {
  const model = gemini("gemini-2.0-flash-exp");

  const { text: generated } = await generateText({
    model,
    prompt: generatePrompt(input)
  });

  console.log({ generated })
  const { object: metrics } = await generateObject({
    model,
    schema,
    prompt: evaluatePrompt(generated)
  });

  let finalCopy = generated;

  const failQuality =
    Object.entries(metrics).some(([key, value]) => {
      if (typeof value === "number") return value < 7;
      if (typeof value === "boolean") return value === false;
      return false;
    });

  if (failQuality && improvePrompt) {
    const { text: improved } = await generateText({
      model,
      prompt: improvePrompt(generated, metrics)
    });
    finalCopy = improved;
  }

  return {
    copy: parseMarkdown ? parse(finalCopy) : finalCopy,
    qualityMetrics: metrics
  };
};
