import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '6bd00339edc80eb41eda0a3d7d93d175bab13d0d', queries });
export default client;
  