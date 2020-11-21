const express = require('express');
const bodyParser = require('body-parser'); //parse incoming request as json
const morgan = require('morgan'); //logging framework for requests
const app = express();
const router = require('./router');
const cors = require('cors');

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

const http = require("http").createServer(app);
const io = require("socket.io")(http);

const cvNamespace = io.of('/cv');
const webNamespace = io.of('/web');

cvNamespace.on("connection", (socket) => {
    console.log("CV client connected");
    socket.on('ocv_image', (data) => {
        webNamespace.emit('incoming-cv', data);
    });
    socket.on('disconnect', () => {
        console.log('CV client disconnected');
    });
});

webNamespace.on("connection", (socket) => {
    console.log("Web client connected");
    socket.on('disconnect', () => {
        console.log('Web client disconnected');
    });
});

const port = process.env.PORT || 6969;
http.listen(port, () => {
    console.log('server listening on port '+port);
});