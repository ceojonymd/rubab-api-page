# Rubab's Digital — API Platform

A premium, dark-themed, fully responsive showcase page for the Rubab's Digital API Platform — **13 production services**: 7 backend APIs and 6 frontend sites.

Single source of truth: [`index.html`](./index.html) (self-contained — no build step, no dependencies for the page itself).

## Services

### Backend APIs (7)
| Service | What it does | URL |
|---|---|---|
| RubabAPI | API marketplace — 25 categories, provider/consumer, usage metering | https://rubabapi-api.rdceojony.workers.dev |
| NewsAPI | Real-time ingestion from 61 RSS sources, full-text search | https://newsapi.rdceojony.workers.dev |
| CyberGuard | IP threat, domain reputation, breach & SSL checks | https://cyberguard-api.rdceojony.workers.dev |
| FinanceFlow | Forex, crypto, stocks, calculators | https://financeflow-api.rdceojony.workers.dev |
| SmartText | AI summarize, sentiment, translate, keywords | https://smarttext-api.rdceojony.workers.dev |
| SocialPulse | Trends, profiles, hashtags, scheduler | https://socialpulse-api.rdceojony.workers.dev |
| ShopRadar | Product search, price compare, deals | https://shopradar-api.rdceojony.workers.dev |

### Frontend Sites (6)
| Site | What it is | URL |
|---|---|---|
| API Hub | Master showcase | https://rubab-api-hub.rdceojony.workers.dev |
| RubabAPI Web | Marketplace frontend (25 pages) | https://rubabapi-web.rdceojony.workers.dev |
| NewsAPI Web | News frontend (19 pages) | https://newsapi-web.rdceojony.workers.dev |
| API Landing Pages | Landing pages for 5 products | https://rubab-api-pages.rdceojony.workers.dev |
| API Dashboards | 7 premium dashboards (44 routes) | https://api-dashboards.rdceojony.workers.dev |
| GhostOps UI | Premium operations UI (32 pages) | https://ghostops-ui.rdceojony.workers.dev |

## Deployment

This one page is deployed two ways from the same `index.html`:

### Vercel (primary)
Static deploy — `vercel.json` sets `framework: null` and serves `index.html` at `/`.
Push to `main` and Vercel auto-deploys the connected project.

### Cloudflare Workers (backup)
`worker.js` imports `index.html` as a text module (see the `[Text]` rule in `wrangler.toml`) and returns it.

```bash
# Requires CLOUDFLARE_API_TOKEN + CLOUDFLARE_ACCOUNT_ID in the environment
npm install
npm run deploy   # wrangler deploy
```

Deployed worker: `rubab-api-page` → https://rubab-api-page.<account>.workers.dev

## Local preview
Just open `index.html` in a browser, or `npm run dev` for the Worker dev server.
