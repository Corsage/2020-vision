var express = require('express');
var app = express(); 

// body parser for requests 
const bodyParser = require('body-parser'); 
var cors = require('cors');

//serve files in static' folder at /public 
//app.use(express.static(__dirname + '/public'));

// routes
const adminRoutes = require('./routes/adminRoutes.js');

// parse incoming request bodys
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
//connect url routes
app.use('/api/admin', adminRoutes);

let listener = app.listen(8080); // start server'
global.listenerPort = listener.address().port;

/* global listenerPort */
console.log('Listening on port' + listenerPort);
