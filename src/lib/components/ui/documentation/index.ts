import type { iDoc } from "$lib/interface"; 

// utils/convert.ts
export interface iSection {
  id: string;
  title: string;
  content: string;
}

export interface iHeading {
  id: string;
  text: string;
}

export function convertHtmlToSections(html: string): iSection[] {
  const sections: iSection[] = [];
  const headingRegex = /<(h[1-6])[^>]*>(.*?)<\/\1>/gi;

  let match: RegExpExecArray | null;
  const headingMatches: { tag: string; title: string; index: number; fullMatch: string }[] = [];

  // Step 1: Find all headings and their positions
  while ((match = headingRegex.exec(html)) !== null) {
    headingMatches.push({
      tag: match[1],
      title: match[2].trim(),
      index: match.index,
      fullMatch: match[0]
    });
  }

  // Step 2: Use heading positions to extract sections
  for (let i = 0; i < headingMatches.length; i++) {
    const current = headingMatches[i];
    const next = headingMatches[i + 1];

    const contentStart = current.index + current.fullMatch.length;
    const contentEnd = next ? next.index : html.length;
    const content = html.slice(contentStart, contentEnd).trim();

    const id = current.title
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9\-]/g, '');

    sections.push({
      id,
      title: current.title.replace(/<[^>]+>/g, ''), // strip any nested tags
      content
    });
  }

  return sections;
}


export function extractHeadings(sections: iSection[]): iHeading[] {
  return sections.map(({ id, title }) => ({
    id,
    text: title,
  }));
}

export const extractDocumentations = (docs: iDoc[]) => docs.map(doc => ({ title: doc.title, slug: doc.slug }))