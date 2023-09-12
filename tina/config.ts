import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: "ff6389e9-e1ba-424b-82c3-1a27c40493d3",
  token: "15be0c4a8b83d036883cafe8f570027ebc36701c",

  build: {
    basePath: "astro-tina",
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "src/assets",
      publicFolder: "",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
