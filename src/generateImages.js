import fs from "fs";
import path from "path";
import { fileURLToPath } from "url"; // New import for Node.js ESM

const __filename = fileURLToPath(import.meta.url); // New line to get the current filename
const __dirname = path.dirname(__filename); // New line to get the current directory name

const assetsDir = path.join(__dirname, "assets", "galerie"); // Updated path
const outputModule = path.join(__dirname, "generated", "images.js"); // Updated path

fs.readdir(assetsDir, (err, files) => {
  if (err) {
    console.error("Error reading assets directory:", err);
    return;
  }

  const imageFiles = files.filter((file) => /\.(png|jpe?g|gif)$/i.test(file));

  const importStatements = imageFiles.map((file, index) => {
    const imageName = `image${index}`;
    return `import ${imageName} from '../assets/galerie/${file}';`; // Updated path
  });

  const exportStatement = `export default [${imageFiles
    .map((_, index) => `image${index}`)
    .join(", ")}];`;

  const fullModule = `${importStatements.join("\n")}\n\n${exportStatement}\n`;

  fs.writeFile(outputModule, fullModule, (err) => {
    if (err) {
      console.error("Error writing output module:", err);
      return;
    }
    console.log("Image module generated successfully!");
  });
});
