const express = require('express');
const request = require('request');

const app = express();

app.get('/find-bike-stations', (req, res) => {
  request('https://dkw6qugbfeznv.cloudfront.net',function (error, response, body) {
    res.send(body);
  });
});

app.get('/get-weather-data', (req, res) => {
  request('http://api.openweathermap.org/data/2.5/weather?id=4560349&appid=e20f7e6f6e530f74645391c0f22d04c6',function (error, response, body) {
      res.send(body);
    });
});

app.listen(5000, () => console.log('Listening on port 5000!'));