const express = require('express');

const app = express();

const phoneword = require('./server/phoneword');

app.use('/static', express.static(__dirname + '/public'));

app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/phonewords/:numeric', function (req, res) {
  res.send(phoneword(req.params.numeric))
});

app.listen(3000, function () {
  console.log('server is running');
});