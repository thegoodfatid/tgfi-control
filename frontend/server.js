const path = require('path');

const express = require('express');
const compress = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const { redirectToHTTPS } = require('express-http-to-https');

const app = express();

// Enable security, CORS, compression
app.use(helmet());
app.use(cors());
app.use(compress());
app.use(redirectToHTTPS([/localhost:(\d{4})/], [], 301));
app.enable('trust proxy');

// Serve static path
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = 3333;

app.listen(port, '0.0.0.0', err => {
  if (err) throw err;
  console.info(`==> 🌎 app listening on http://localhost:${port}.`);
});
