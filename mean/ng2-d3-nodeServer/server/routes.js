var models = require('./models/schema');
var pollroutes = require('./routes/pollroutes');
var socketapp = require('./sockets');


module.exports = function (io, app, logger) {

    pollroutes(app, logger);
    socketapp(io, logger);

};
