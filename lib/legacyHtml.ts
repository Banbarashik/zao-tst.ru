import path from "path";
import fs from "fs/promises";

export async function getLegacyHtmls(paths: string[]) {
  const fullPaths = paths.map((p) => path.join(process.cwd(), "public", p));

  const htmls = await Promise.all(
    fullPaths.map((fp) => fs.readFile(fp, "utf-8")),
  );

  return htmls;
}

export async function getLegacyHtml(path: string) {
  const [html] = await getLegacyHtmls([path]);
  return html;
}
