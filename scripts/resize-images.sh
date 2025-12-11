#!/bin/bash
# Usage: ./resize-images.sh <json-config-file> <output-dir>
# Example: ./resize-images.sh ./resize-config.json ./resized

set -e

if [ "$#" -lt 2 ]; then
  echo "Usage: $0 <json-config-file> <output-dir>"
  exit 1
fi

CONFIG_FILE="$1"
OUTPUT_DIR="$2"

# Ensure output directory exists
mkdir -p "$OUTPUT_DIR"

# Create a temporary TypeScript file
TS_FILE="resize-images-tmp.ts"

cat > "$TS_FILE" << 'EOF'
import sharp from "sharp";
import fs from "fs";
import path from "path";

const configPath = process.argv[2];
const outputDir = process.argv[3];

const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

if (!Array.isArray(config)) {
  console.error('Config file must be an array of objects: [{ file: "path", width: 100, height: 100 }, ...]');
  process.exit(1);
}

config.forEach(({ file, width, height }) => {
  if (!file || !width || !height) {
    console.error(`Invalid entry: ${JSON.stringify({ file, width, height })}`);
    return;
  }
  const ext = path.extname(file).toLowerCase();
  if ([".jpg", ".jpeg", ".png", ".webp", ".tiff", ".gif", ".avif"].includes(ext)) {
    const baseName = path.basename(file);
    const outputPath = path.join(outputDir, baseName);
    sharp(`${outputDir}logo.png`)
      .resize(width, height)
      .toFile(outputPath)
      .then(() => console.log(`Resized: ${outputDir}${baseName} to ${width}x${height}`))
      .catch(err => console.error(`Error resizing ${outputDir}/${baseName}:`, err));
  } else {
    console.warn(`Skipping unsupported file type: ${file}`);
  }
});
EOF

# Run the TypeScript file with ts-node (ensure ts-node and sharp are installed)
npx ts-node "$TS_FILE" "$CONFIG_FILE" "$OUTPUT_DIR"

# Clean up
echo "Done."
rm "$TS_FILE"
