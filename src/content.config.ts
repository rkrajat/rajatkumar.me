import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const blogPosts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog/posts" }),
  schema: z.object({
    publishedDate: z.date(),
    description: z.string(),
    title: z.string(),
    updatedDate: z.date().optional(),
    status: z.enum(["draft", "ready", "published"]),
    tags: z.array(z.string()).optional(),
    heroImage: z
      .object({
        src: z.string(),
        alt: z.string().optional(),
      })
      .optional(),
  }),
});

export const collections = { blogPosts };
