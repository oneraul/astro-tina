import { getEntry } from "astro:content";
import path from "path";

const entry = await getEntry("siteConfig", "config");
const fave_post = path.parse(entry.data.fave_post).name;

export default { ...entry.data, fave_post };
