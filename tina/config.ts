import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: process.env.TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

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
        name: "posts",
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
      {
        name: "siteConfig",
        label: "Site config",
        path: "src/content/siteConfig",
        ui: {
          global: true,
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "thing",
            label: "Thing",
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            ui: {
              timeFormat: "HH:mm",
            },
          },
          {
            type: "reference",
            name: "fave_post",
            label: "Favourite post",
            collections: ["posts"],
          },
          {
            type: "boolean",
            name: "yes",
            label: "Yes",
          },
          {
            type: "number",
            name: "number",
            label: "Numero",
            description: "El número es grande pero solo Alah es GRANDE",
          },
          {
            type: "image",
            label: "Hero image",
            name: "imgSrc",
          },
          {
            type: "string",
            name: "color",
            label: "Background Color",
            ui: {
              component: "color",
              colorFormat: "hex",
              colors: ["#EC4815", "#241748", "#B4F4E0", "#E6FAF8"],
              widget: "sketch",
            },
          },
        ],
      },
    ],
  },
});
