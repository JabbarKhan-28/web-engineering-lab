import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;

// ISR cache
let cachedHTML = "";
let lastGenerated = 0;
const REVALIDATE_TIME = 10000;

function createHTML(title, content) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>${title}</title>
    </head>
    <body>
      <h1>${title}</h1>
      ${content}
    </body>
    </html>
  `;
}

const server = createServer(async (req, res) => {
  // Task 2: CSR - Client-Side Rendering
  if (req.url === "/csr") {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(`
      <!DOCTYPE html>
      <html>
      <head><title>CSR</title></head>
      <body>
        <div id="root">Loading...</div>

        <script>
          document.getElementById("root").innerHTML =
            "<h1>Client-Side Rendering</h1><p>Content rendered using JavaScript.</p>";
        </script>
      </body>
      </html>
    `);
  }

  // Task 2: SSR - Server-Side Rendering
  else if (req.url === "/ssr") {
    const html = createHTML(
      "Server-Side Rendering",
      `<p>This content was generated on the server at ${new Date().toLocaleString()}.</p>`,
    );

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  }

  // Task 2: SSG - Static Site Generation
  else if (req.url === "/ssg") {
    try {
      const html = await readFile(
        path.join(__dirname, "dist", "ssg.html"),
        "utf-8",
      );

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(html);
    } catch (error) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Static page not found. Run the static build first.");
    }
  }

  // Task 2: ISR - Incremental Static Regeneration
  else if (req.url === "/isr") {
    const now = Date.now();

    if (!cachedHTML || now - lastGenerated > REVALIDATE_TIME) {
      cachedHTML = createHTML(
        "Incremental Static Regeneration",
        `<p>This page was regenerated at ${new Date().toLocaleString()}.</p>`,
      );

      lastGenerated = now;
    }

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(cachedHTML);
  }

  // Task 2: Streaming
  else if (req.url === "/stream") {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.write(`
      <!DOCTYPE html>
      <html>
      <head><title>Streaming</title></head>
      <body>
        <h1>Streaming Rendering</h1>
        <p>The first part of the page has arrived.</p>
    `);

    setTimeout(() => {
      res.write("<p>The second part arrived after a delay.</p>");
      res.end("</body></html>");
    }, 2000);
  }

  // Unknown route
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 - Page Not Found");
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
