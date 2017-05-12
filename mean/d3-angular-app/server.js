const express = require('express');
const http = require('http');
const path = require('path');
const twit = require('twitter');

const app = express();
const port = process.env.PORT || 3000;
const router = express.Router();
const staticRoot = __dirname+"/dist";


const CONSUMER_KEY = "sXxb6X1pa6MpszklZdwDcv55M";
const CONSUMER_SECRET = "u18FLZ7bxT2pgZg1mWALmpnZs1GnvVuCiQj5g3sQhCMe3ShEVo";
const ACCESS_TOKEN_KEY = "3639012920-A20PWYXXozMLA0H5VIKDz7ghTB5vyEnfXERRWlO";
const ACCESS_TOKEN_SECRET = "r7PqecwKxEYe8GyYsGR97en5pOkHdiv463yimaosjBYCJ";
const twitter = new twit({
  consumer_key: CONSUMER_KEY,
  consumer_secret: CONSUMER_SECRET,
  access_token_key: ACCESS_TOKEN_KEY,
  access_token_secret: ACCESS_TOKEN_SECRET
});

app.set('port', (port));
app.use(express.static(staticRoot));

app.get('/', (req, res) => {
  res.sendFile('./dist/index.html');
});

const server = http.createServer(app).listen(port, () => console.log(`Server listening on port ${port}`));

const io = require('socket.io').listen(server);

app.get('/stream/:searchTerm', (req, res, next) => {
  const searchTerm = req.params.searchTerm

  twitter.stream('statuses/filter', {track: searchTerm}, (stream) => {
    stream.on('data', (data) => {
      data.location = data.geo ? data.geo.coordinates : [];
      const tweet = {
        created_at: data.created_at,
        text: data.text,
        username: data.user ? data.user.screen_name : '',
        followers_count: data.user ? data.user.followers_count : '',
        following_count: data.user ? data.user.friends_count : '',
        statuses_count: data.user ? data.user.statuses_count : '',
        profile_image_url: data.user ? data.user.profile_image_url : '',
        coordinates: data.location
      };
      io.emit('tweet', tweet);
    });

    stream.on('error', (error) => {
      throw error;
    });
  });
});


const mapUsaData = require('./json/us-states.json');
const mapInData = require('./json/in-states.json');
app.get('/mapUsaData', (req, res) => {
  res.status(200).json({data: mapUsaData});
});
app.get('/mapInData', (req, res) => {
  res.status(200).json({data: mapInData});
});
