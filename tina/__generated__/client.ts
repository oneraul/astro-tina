import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'https://content.tinajs.io/1.4/content/ff6389e9-e1ba-424b-82c3-1a27c40493d3/github/main', token: '15be0c4a8b83d036883cafe8f570027ebc36701c', queries });
export default client;
  