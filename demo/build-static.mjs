import { renderPage } from "./page.mjs";
import { mkdir, writeFile } from "node:fs/promises";

async function buildStaticPage() {
  await mkdir("./demo/dist", { recursive: true });

  const html = renderPage();

  await writeFile("./demo/dist/ssg.html", html);

  console.log("Static page generated successfully!");
}

buildStaticPage();
