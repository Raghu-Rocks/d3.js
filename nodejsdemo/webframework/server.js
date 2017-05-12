var express = require('express')
var app = express()
var bodyParser = require('body-parser')


// app.use(express.static('webcontent'))
app.use('/static', express.static('webcontent'))

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/user', function(req, res){
    var user = {name: 'Ravi'}
    res.json(user);
})

app.post('/user', function(req, res){
    console.log('Recieved from the client' + req.body.name)
    var user = {name: 'Ravi'}
    res.json(req.body);
})



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})