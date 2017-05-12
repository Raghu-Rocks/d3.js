var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

// Connection URL 
var url = 'mongodb://localhost:27017/myproject';
// Use connect method to connect to the Server 
MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
    var collection = db.collection('user');
    // Insert some documents 
    collection.insert({
        name: 'Ravi',
        password: 'test'
    }
        , function (err, result) {
            if(err) throw err;
            console.log("Inserted user document");

        });

    db.close();
});


