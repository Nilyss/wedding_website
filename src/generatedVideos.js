import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, "assets", "galerie");
const outputModule = path.join(__dirname, "generated", "videos.js");

fs.readdir(assetsDir, (err, files) => {
  if (err) {
    console.error("Error reading assets directory:", err);
    return;
  }

  const videoFiles = files.filter((file) => /\.mp4$/i.test(file));

  const importStatements = videoFiles.map((file, index) => {
    const videoName = `video${index}`;
    return `import ${videoName} from '../assets/galerie/${file}';`;
  });

  const exportStatement = `export default [${videoFiles
    .map((_, index) => `video${index}`)
    .join(", ")}];`;

  const fullModule = `${importStatements.join("\n")}\n\n${exportStatement}\n`;

  fs.writeFile(outputModule, fullModule, (err) => {
    if (err) {
      console.error("Error writing output module:", err);
      return;
    }
    console.log("Video module generated successfully!");
  });
});
