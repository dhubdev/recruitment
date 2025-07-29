import matter from 'gray-matter'
import { parse } from 'marked'

export const markedToHtml = (rawContent: any) => {
  const {data, content: markdownBody } = matter(rawContent)
  const content = parse(markdownBody)
  return { ...data, content }
}