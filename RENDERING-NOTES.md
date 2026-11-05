# Rendering Strategies — Lab 06

## Task 3: Rendering Comparison

### 1. Refresh Behavior

- **CSR:** JavaScript renders the page content in the browser.
- **SSR:** The server generates HTML for every request.
- **SSG:** The server serves a previously generated static HTML file.
- **ISR:** The generated HTML is cached and regenerated after the revalidation period.

### 2. View Page Source

- **CSR:** The initial HTML contains an almost empty root element. JavaScript generates the page content.
- **SSR:** The HTML source contains the rendered page content.
- **SSG:** The HTML source contains the pre-generated page content.
- **ISR:** The HTML source contains the generated page content.

### 3. JavaScript Disabled

- **CSR:** The actual page content does not appear because JavaScript is responsible for rendering it.
- **SSR:** The page content remains visible.
- **SSG:** The page content remains visible.
- **ISR:** The page content remains visible.

### 4. Conclusion

CSR depends on JavaScript to render the page content in the browser. SSR generates HTML on the server for each request, while SSG serves pre-generated HTML. ISR combines static generation with periodic regeneration of cached content.

## Task 4: Streaming Performance

- TTFB: [Write your measured value]
- Total time: [Write your measured value]

### Observation

Streaming sends the first part of the HTML immediately and sends the remaining content after a delay. This allows users to see initial content without waiting for the entire page to finish loading.

## Task 5: Choosing Rendering Strategies

### 1. Blog Post

**Strategy: SSG (Static Site Generation)**

A blog post usually contains content that does not change frequently. SSG generates HTML during the build process, making pages fast to load and suitable for search engine optimization.

### 2. Live Stock-Price Dashboard

**Strategy: CSR (Client-Side Rendering)**

Stock prices change continuously. CSR allows JavaScript to fetch updated stock prices from an API and dynamically update the dashboard without reloading the entire page.

### 3. User Account Page

**Strategy: SSR (Server-Side Rendering)**

A user account page contains private and personalized information. SSR allows the server to authenticate the user and generate HTML containing the appropriate account information for each request.
