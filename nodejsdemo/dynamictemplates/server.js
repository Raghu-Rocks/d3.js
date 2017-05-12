var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var MongoClient = require('mongodb').MongoClient

// Connection URL 
var url = 'mongodb://localhost:27017/myproject';

app.set('view engine', 'pug')
app.set('views', './views')

// app.use(express.static('webcontent'))
app.use('/static', express.static('webcontent'))

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())


app.post('/register', function(req, res){
    console.log('Recieved from the client' + req.body.email)

    //Basic validation
    if(!req.body.email){
       res.render('register', {errorMessage: 'No Email supplied!!'})
    }

    
    //Connect and insert
    console.log('Insert to DB code...');

    MongoClient.connect(url, function (err, db) {
    // assert.equal(null, err);
    console.log("Connected correctly to server");
        var user = {
            name: req.body.email,
            password: req.body.pwd
        }
        insertIntoDB(db ,user, function(err, data){
             console.log("Inserted user document");
             //response write
             res.render('profile', {email: req.body.email})
        })
        console.log('insert')
    db.close();
  });
  
  //  res.render('profile', {email: req.body.email})

    
    
    
    // var response = {success: true}
    // res.json(response);
    // res.render()
    
})

function insertIntoDB(db, obj, callback){
    var collection = db.collection('user');
    // Insert some documents 
    collection.insert(
        obj, function (err, result) {
            if(err) callback(err, null); 
            callback(null, result);
        });
}


app.get('/register', function(req,res){
  console.log('In register');
  res.render('register', {errorMessage: ''})
})



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})