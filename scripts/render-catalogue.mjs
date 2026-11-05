import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { createCanvas, DOMMatrix, ImageData, Path2D } from "@napi-rs/canvas";

globalThis.DOMMatrix ??= DOMMatrix;
globalThis.ImageData ??= ImageData;
globalThis.Path2D ??= Path2D;

const pdfPath = fileURLToPath(new URL("../public/wenside_product_catalogue.pdf", import.meta.url));
const outputDirectory = fileURLToPath(new URL("../public/catalogue-pages/", import.meta.url));
const { getDocument } = await import("pdfjs-dist/legacy/build/pdf.mjs");
const pdf = await getDocument({ data: new Uint8Array(await readFile(pdfPath)) }).promise;
const renderScale = 3;

if (pdf.numPages !== 15) {
  throw new Error(`Expected a 15-page catalogue, but found ${pdf.numPages} pages.`);
}

await mkdir(outputDirectory, { recursive: true });

try {
  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber);
    const viewport = page.getViewport({ scale: renderScale });
    const canvas = createCanvas(Math.ceil(viewport.width), Math.ceil(viewport.height));

    await page.render({ canvasContext: canvas.getContext("2d"), viewport }).promise;

    const pageName = `page-${String(pageNumber).padStart(2, "0")}.png`;
    const image = canvas.toBuffer("image/png");
    await writeFile(join(outputDirectory, pageName), image);
    await page.cleanup();
    console.log(`Rendered page ${pageNumber}/${pdf.numPages} (${image.length} bytes).`);
  }
} finally {
  await pdf.destroy();
}
