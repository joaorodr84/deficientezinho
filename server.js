// Angular's client-side routes (e.g. /projects/watchr) have no matching
// file on disk and need the SPA shell on a direct hit or refresh, but the
// static mini sites under /projects/<slug>/ are real directories with
// their own real index.html and must be served as themselves — `serve -s`
// (serve-handler's blanket `rewrites: [{ source: '**', destination:
// '/index.html' }]`) rewrites every non-exact-file request before the
// static lookup runs, so it swallows the mini sites into the SPA shell
// too (DEF-55). Overriding `sendError` instead only falls back to the
// shell once a real static lookup has already come up empty.
const http = require('http');
const path = require('path');
const fs = require('fs');
const handler = require('serve-handler');

const PUBLIC = path.join(__dirname, 'dist/deficientezinho/browser');
const INDEX_HTML = path.join(PUBLIC, 'index.html');

// Streamed directly from disk rather than re-run through `handler`, so
// this doesn't also trigger serve-handler's own cleanUrls/trailingSlash
// redirect logic for the already-failed original URL.
const spaFallback = (_absolutePath, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html; charset=utf-8');
  fs.createReadStream(INDEX_HTML).pipe(response);
};

http
  .createServer((request, response) => {
    handler(request, response, { public: PUBLIC }, { sendError: spaFallback });
  })
  .listen(process.env.PORT);
