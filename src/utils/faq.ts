// Extracts the FAQ of a blog article from its markdown, for FAQPage structured data.
// Convention (see .claude/skills/seo-blog-article): a "## أسئلة شائعة" (or "## الأسئلة الشائعة")
// section whose questions are "###" headings followed by their answer paragraphs.

export interface FaqItem {
  q: string;
  a: string;
}

const plain = (md: string) =>
  md
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '') // images
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1') // links -> text
    .replace(/[*_`]+/g, '') // emphasis / code
    .replace(/^\s*[-*]\s+/gm, '') // list bullets
    .replace(/\s+/g, ' ')
    .trim();

export function extractFaq(markdown = ''): FaqItem[] {
  const start = markdown.search(/^##\s+(?:الأسئلة الشائعة|أسئلة شائعة)\s*$/m);
  if (start === -1) return [];
  const afterHeading = markdown.slice(start).replace(/^.*\n/, '');
  const end = afterHeading.search(/^##\s/m);
  const section = end === -1 ? afterHeading : afterHeading.slice(0, end);

  return section
    .split(/^###\s+/m)
    .slice(1)
    .map((block) => {
      const [first, ...rest] = block.split('\n');
      return { q: plain(first), a: plain(rest.join('\n')) };
    })
    .filter((f) => f.q && f.a);
}
