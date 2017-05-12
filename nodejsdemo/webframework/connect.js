var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

// Connection URL 
var url = 'mongodb://localhost:27017/myproject';
// Use connect method to connect to the Server 

module.exports = insert;
function insert(){

    MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
        var user = {
            name: 'Ravi',
            password: 'test'
        }
        insertIntoDB(user, function(err, data){
             console.log("Inserted user document");
        })
    db.close();
});

}





function insertIntoDB(obj, callback){
    var collection = db.collection('user');
    // Insert some documents 
    collection.insert(
        , function (err, result) {
            if(err) callback(err, null); 
            callback(null, data);
        });
}


