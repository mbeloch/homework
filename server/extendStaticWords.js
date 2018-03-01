const wordList = require('../static/words.json');

function extend(words) {
  if (!validation(words)) return false;

  let modified = false;

  words.forEach(word => {
    if (wordList.indexOf(word) < 0) {
      wordList.push(word);
      modified = true
    }
  });

  return modified;
}

function validation(words) {
  for (let i = 0; i < words.length; i++) {
    if (typeof words[i] !== 'string') return false
  }
  return true
}

module.exports = extend;