// server.js

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var app      = express();

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var cors         = require('cors');


let http = require('http').Server(app);
let io = require('socket.io')(http);

var log4js = require('log4js');
var log4js_extend = require("log4js-extend");

log4js.configure('log4js/config.json', { reloadSecs: 1000 });

log4js_extend(log4js, {
    path: __dirname,
    format: ":>> log at @name (@file-@line:@column)"
});

var logger = log4js.getLogger('MyLogger');
logger.setLevel('debug');



var mongoose = require('mongoose');


var configDB = require('./server/routes/config/database.js');

// configuration ===============================================================
var db = mongoose.connect(configDB.url); // connect to our database


// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.options('*', cors());
 

var port     = process.env.NODE_PORT || 4000;
var host     = process.env.NODE_IP;


if(host) {
	http.listen(port, host, () => {
        logger.info("The magic happens on  " + host + ":" + port);
	});
} else {
	http.listen(port, () => {
        logger.info("The magic happens on:" + port);
	});
}

require('./server/routes.js')(io, app, logger); // load our routes and pass in our app and fully configured passport
