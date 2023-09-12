import { join } from "path";
import * as fs from "fs";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const directoryPath = join(__dirname, "../src/content/posts");

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }

  files.forEach((file) => {
    console.log(file);

    const path = `${directoryPath}/${file}`;
    fs.readFile(path, "utf-8", (err, contents) => {
      if (err) {
        return console.error(err);
      }

      // Replace string occurrences
      const updated = contents.replace("/src/assets", "../../assets");

      // Write back to file
      fs.writeFile(path, updated, "utf-8", (err2) => {
        if (err2) {
          console.log(err2);
        }
      });
    });
  });
});
