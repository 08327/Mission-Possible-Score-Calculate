// Minimal static file server using Node built-ins (no external deps)
// Run with: `node server.js` or `npm start` (provided `package.json` exists)

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8000;
// Prefer serving from a `src` directory if it exists; otherwise serve
// from the current working directory. This helps when project files
// (like `index.html`) are placed under `src/`.
const CWD = process.cwd();
let BASE = CWD;
const SRC_DIR = path.join(CWD, 'src');
if (fs.existsSync(SRC_DIR) && fs.statSync(SRC_DIR).isDirectory()) {
  BASE = SRC_DIR;
}

const MIME = {
  '.html': 'text/html',
  '.htm': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.txt': 'text/plain'
};

const server = http.createServer((req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    let pathname = decodeURIComponent(url.pathname);

    // default to index.html
    if (pathname === '/') pathname = '/index.html';

    const filePath = path.join(BASE, pathname);

    // Prevent path traversal attacks
    if (!filePath.startsWith(BASE)) {
      res.writeHead(403, { 'Content-Type': 'text/plain' });
      res.end('Forbidden');
      return;
    }

    fs.stat(filePath, (err, stats) => {
      if (err || !stats.isFile()) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not found');
        return;
      }

      const ext = path.extname(filePath).toLowerCase();
      const type = MIME[ext] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': type });
      const stream = fs.createReadStream(filePath);
      stream.pipe(res);
      stream.on('error', () => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Server error');
      });
    });
  } catch (e) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Server error');
  }
});

server.listen(PORT, () => {
  console.log(`Static server running at http://localhost:${PORT}/`);
  if (BASE !== CWD) console.log(`Serving files from: ${BASE}`);
});
