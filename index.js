const express = require('express');

const app = express();
const config = require('./config');

const phoneword = require('./server/phoneword');
const extend = require('./server/extendStaticWords');
const wordList = require('./static/words.json');
const bodyParser = require('body-parser');

app.use('/static', express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/phonewords/:numeric', function (req, res) {
  let words = phoneword(req.params.numeric);

  // filtering based on word list
  if (config.useWordslist) {
    // Words may be null so you cannot access "words[0]" here. Try for
    // example "123" again - it won't work and server will fail.
    const suitableWords = wordList.filter(word => word.length === words[0].length);
    words = words.reduce((result, word) => {
      if (suitableWords.indexOf(word) > -1) {
        result.push(word);
        return result;
      }
      return result
    }, [])
  }

  res.send(words)
});

app.put('/phonewords', function (req, res) {
  // body should be array
  if (!Array.isArray(req.body)) {
    res.sendStatus(400);
    return;
  }

  // add new words - if are not added return not modified
  if (!extend(req.body)) {
    res.sendStatus(304);
    return;
  }

  res.sendStatus(200);
});

app.listen(config.port, function () {
  console.log('server is running');
});