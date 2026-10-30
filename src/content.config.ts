import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Articles live in src/content/blog/*.md (Arabic). Add a file to publish a new article.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.enum(['media', 'podcast', 'print', 'marketing']),
    cover: z.string().optional(), // path under /public, e.g. /work/green-screen-shoot.webp
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
