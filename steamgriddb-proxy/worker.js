// chimiNES — SteamGridDB proxy (Cloudflare Worker)
//
// SteamGridDB's API doesn't send CORS headers, so a web page can't call it
// directly. This Worker forwards two kinds of requests and adds CORS:
//
//   GET /api/v2/...      -> https://www.steamgriddb.com/api/v2/...
//   GET /img?url=<cdn>   -> artwork files on cdn*.steamgriddb.com
//
// The API key comes from the browser's "Authorization: Bearer <key>" header,
// or from the SGDB_KEY secret if you set one (then the page needs no key).
// Optionally restrict which sites may use it with ALLOWED_ORIGINS
// (comma-separated, e.g. "https://you.github.io,http://localhost:8000").

const API = 'https://www.steamgriddb.com/api/v2/';
const CDN = /^https:\/\/cdn\d*\.steamgriddb\.com\/[\w\-./%]+$/;

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin');
    const allowed = env.ALLOWED_ORIGINS ? env.ALLOWED_ORIGINS.split(',').map(s => s.trim()).filter(Boolean) : null;
    const originOk = !allowed || (origin && allowed.includes(origin));
    const cors = {
      'Access-Control-Allow-Origin': allowed ? (originOk ? origin : 'null') : '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Authorization',
      'Access-Control-Max-Age': '86400',
      'Vary': 'Origin'
    };
    const reply = (status, body) => new Response(JSON.stringify(body), { status, headers: { ...cors, 'Content-Type': 'application/json' } });

    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    if (request.method !== 'GET') return reply(405, { success: false, errors: ['Method not allowed'] });
    if (!originOk) return reply(403, { success: false, errors: ['Origin not allowed'] });

    const url = new URL(request.url);
    let target, headers = {};
    if (url.pathname.startsWith('/api/v2/')) {
      target = API + url.pathname.slice('/api/v2/'.length) + url.search;
      const auth = request.headers.get('Authorization') || (env.SGDB_KEY ? 'Bearer ' + env.SGDB_KEY : '');
      if (!auth) return reply(401, { success: false, errors: ['Authentication Required'] });
      headers.Authorization = auth;
    } else if (url.pathname === '/img') {
      target = url.searchParams.get('url') || '';
      if (!CDN.test(target)) return reply(400, { success: false, errors: ['Only SteamGridDB CDN images can be fetched'] });
    } else {
      return reply(404, { success: false, errors: ['Not found'] });
    }

    const upstream = await fetch(target, { headers });
    const out = new Headers(cors);
    out.set('Content-Type', upstream.headers.get('Content-Type') || 'application/octet-stream');
    out.set('Cache-Control', target.startsWith(API) ? 'private, max-age=300' : 'public, max-age=86400');
    return new Response(upstream.body, { status: upstream.status, headers: out });
  }
};
