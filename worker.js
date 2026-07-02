// Cloudflare Worker for the Rubab's Digital API Platform page.
// The HTML is imported as a text module (see the [Text] rule in wrangler.toml),
// so index.html stays the single source of truth shared with the Vercel deploy.
import html from "./index.html";

export default {
  fetch() {
    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "public, max-age=3600",
        "x-content-type-options": "nosniff",
      },
    });
  },
};
