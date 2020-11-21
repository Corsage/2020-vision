const express = require('express');
const http = require('http');
const bodyParser = require('body-parser'); //parse incoming request as json
const morgan = require('morgan'); //logging framework for requests
const app = express();
const router = require('./router');
const cors = require('cors');

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

const port = process.env.PORT || 8080;
const server = http.createServer(app);
server.listen(port);
console.log('server listening on port '+port);