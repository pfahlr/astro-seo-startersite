import fs from 'fs-extra';
import path from "path";
import sharp from "sharp";

const isBuild = process.argv.includes('build');

const IMAGE_DIR = isBuild ?  "dist/optimized-images" : "public/optimized-images";

// Convert an image to WebP and return the new path
export async function optimizeImage(originalPath: string, width: number = 0, height: number = 0): Promise<string> {
  if (!originalPath.startsWith("/")) return originalPath; // Ignore external images

  var ext = path.extname(originalPath);
  var fullInputPath = path.join(process.cwd(), "public", originalPath);
  var baseName = "";
  var optimizedPath = "";
  var fullOutputPath = "";


  if ( width != 0 && height != 0) {
    console.log(fullInputPath);
    baseName = path.basename(originalPath, ext)+"-"+width+"x"+height;
    console.log(baseName);
    optimizedPath = `/optimized-images/${baseName}.webp`; 
    console.log(baseName);
    fullOutputPath = path.join(process.cwd(), IMAGE_DIR, `${baseName}.webp`);
    console.log(fullOutputPath);
  }
  else {

    baseName = path.basename(originalPath, ext);
    console.log(baseName);
    optimizedPath = `/optimized-images/${baseName}.webp`; 
    fullOutputPath = path.join(process.cwd(), IMAGE_DIR, `${baseName}.webp`);
  }
  // Ensure output directory exists
  fs.ensureDirSync(IMAGE_DIR);


  // Convert image if it doesn't already exist
  if (!fs.existsSync(fullOutputPath)) {
    try {
      if (width != 0 && height != 0) {
        await sharp(fullInputPath).resize(width, height,  {fit:'cover'}).toFormat("webp",{quality: 70}).toFile(fullOutputPath);
      }
      else {
        await sharp(fullInputPath).toFormat("webp",{quality: 80}).toFile(fullOutputPath);

      }
    } catch (err) {
      console.error(`Error processing ${originalPath}:`, err);
    }
  }
  return optimizedPath;
}
