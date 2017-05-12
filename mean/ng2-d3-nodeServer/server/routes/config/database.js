var mongodb_connection_string = 'mongodb://127.0.0.1:27017/';

//take advantage of openshift env vars when available:
if(process.env.OPENSHIFT_MONGODB_DB_URL){
  mongodb_connection_string = process.env.OPENSHIFT_MONGODB_DB_URL;
}

// config/database.js
/*
module.exports = {
    'secret': 'puneetvashisht',
    'url' : 'mongodb://localhost/auth' // looks like mongodb://<user>:<pass>@mongo.onmodulus.net:27017/Mikha4ot
};
*/

module.exports = {
    // 'secret': 'puneetvashisht',
    'url' : mongodb_connection_string
};
