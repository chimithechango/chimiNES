# SteamGridDB proxy for chimiNES

SteamGridDB's API can't be called straight from a web page (it doesn't send
CORS headers), so chimiNES talks to it through this tiny Cloudflare Worker.
It only forwards SteamGridDB API calls and SteamGridDB CDN images.

## Deploy (free Cloudflare account)

```bash
cd steamgriddb-proxy
npx wrangler deploy
```

Wrangler prints a URL like `https://chimines-sgdb-proxy.<you>.workers.dev`.
Paste it into chimiNES → Settings → Artwork → Proxy URL.

## API key

Get a free key at https://www.steamgriddb.com/profile/preferences/api, then either:

- paste it into chimiNES → Settings → Artwork (stored only in your browser), or
- keep it on the Worker so the page never sees it:

  ```bash
  npx wrangler secret put SGDB_KEY
  ```

## Lock it to your site (recommended if the key lives on the Worker)

Uncomment `ALLOWED_ORIGINS` in `wrangler.toml` and redeploy.
