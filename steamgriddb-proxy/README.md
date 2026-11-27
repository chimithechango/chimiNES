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
Put it in `DEFAULT_SGDB_PROXY` in `index.html` (search for that name) and
publish. Players then only need to paste their own API key in
Settings → Artwork. Each player's key is sent with their own requests; the
Worker stores nothing.

(Players can also point chimiNES at a different relay under
Settings → Artwork → Advanced.)

## API key

Get a free key at https://www.steamgriddb.com/profile/preferences/api, then either:

- each player pastes their own key into chimiNES → Settings → Artwork (normal setup), or
- for a private copy, keep one key on the Worker so nobody has to enter one:

  ```bash
  npx wrangler secret put SGDB_KEY
  ```

## Lock it to your site (recommended if the key lives on the Worker)

Uncomment `ALLOWED_ORIGINS` in `wrangler.toml` and redeploy.
