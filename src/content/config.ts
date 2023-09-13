import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});

const siteConfig = defineCollection({
  type: "data",
  schema: z.object({
    thing: z.string(),
    date: z.coerce.date(),
    fave_post: z.string(), // TODO https://docs.astro.build/en/guides/content-collections/#defining-collection-references
    yes: z.boolean(),
    number: z.number(),
    imgSrc: z.string(),
    color: z.string(),
  }),
});

export const collections = {
  posts,
  siteConfig,
};
