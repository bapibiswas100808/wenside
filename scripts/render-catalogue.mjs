import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { PDFiumLibrary } from "@hyzyla/pdfium";
import sharp from "sharp";

const pdfPath = fileURLToPath(
  new URL("../public/WSD%20ZapWrap%20Product%20Brochure.pdf", import.meta.url),
);
const outputDirectory = fileURLToPath(
  new URL("../public/wsd-zapwrap-brochure-pages/", import.meta.url),
);
const library = await PDFiumLibrary.init();
const document = await library.loadDocument(new Uint8Array(await readFile(pdfPath)));
const renderScale = 3;
const pageCount = document.getPageCount();

if (pageCount !== 15) {
  document.destroy();
  library.destroy();
  throw new Error(`Expected a 15-page brochure, but found ${pageCount} pages.`);
}

await mkdir(outputDirectory, { recursive: true });

try {
  for (let pageIndex = 0; pageIndex < pageCount; pageIndex += 1) {
    const page = document.getPage(pageIndex);

    try {
      const image = await page.render({
        scale: renderScale,
        render: ({ data, width, height }) =>
          sharp(data, { raw: { width, height, channels: 4 } })
            .png()
            .toBuffer(),
      });

      const pageName = `page-${String(pageIndex + 1).padStart(2, "0")}.png`;
      await writeFile(join(outputDirectory, pageName), image.data);
      console.log(`Rendered page ${pageIndex + 1}/${pageCount} (${image.data.length} bytes).`);
    } finally {
      page.close();
    }
  }
} finally {
  document.destroy();
  library.destroy();
}
