import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob, file } from 'astro/loaders';
const links = z
  .array(z.object({ label: z.string(), url: z.url() }))
  .default([]);
const people = defineCollection({
  loader: file('src/data/people.json'),
  schema: z.object({
    name: z.string(),
    group: z.enum(['lead', 'current', 'past', 'instrumentation']),
    role: z.string().optional(),
    affiliation: z.string().optional(),
    bio: z.string().optional(),
    photo: z.string().optional(),
    order: z.number(),
    links,
  }),
});
const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/research' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number(),
    tag: z.string(),
  }),
});
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.enum(['current', 'past', 'observatory']),
    order: z.number(),
    links,
  }),
});
const publications = defineCollection({
  loader: file('src/data/publications.json'),
  schema: z.object({
    title: z.string(),
    category: z.enum(['refereed', 'non-refereed', 'presentations', 'proceedings']),
    authors: z.string(),
    year: z.number().int(),
    venue: z.string(),
    links,
    draft: z.boolean().default(false),
  }),
});
export const collections = { people, research, projects, publications };
