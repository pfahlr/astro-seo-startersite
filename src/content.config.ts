import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';
import { removeDupsAndLowerCase } from './utils/functions';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		keywords:z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
    // Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
	}),
});

const podcast = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    audioUrl: z.string(),
    keywords: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
    pubDate: z.coerce.date(),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    explicit: z.boolean().optional(),
    episode: z.number().optional(),
    season: z.number().optional(),
    episodeType: z.string().optional(),
    duration: z.coerce.string(), //duration in format hh:mm:ss
    size: z.number(), // size in megabytes
    })
});


export const collections = { blog, podcast };
