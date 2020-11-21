/**
 * server.js
 * This is the entry-point of the server.
 */

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');

const socket = require('./socket');

const app = express();

const morgan = require('morgan'); //logging framework for requests
const router = require('./router');
const server = http.createServer(app);

// Socket setup.
socket(server);

// JSON API setup.
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// Start the server.
server.listen(8080, () => {
    console.log(`Server started on port 8080.`);
});