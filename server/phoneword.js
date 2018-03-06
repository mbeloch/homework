// Show us at least simple stupid test for this file please.
// There is a lot of not very readable code - tests are necessary.
// M: npm run test

const numbers = {
  1: ['.', ',', '?', '!'],
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};

function phoneword(numeric) {
  // This basically means that 123 doesn't work but I can press "1" on T9
  // keyboard. Can you figure out better input handling? For example I got
  // empty response for input "123" so I wanted to end this code review
  // because "hm, it doesn't work"...
  // M: sorry :)
  if (!validation(numeric)) return null;

  return words(1, numeric, numbers[numeric[0]]);
}

function validation(number) {
  if (!parseInt(number)) return false;
  const stringNumber = String(number);
  for (let i = 0; i < stringNumber.length; i++) {
    if (!numbers[stringNumber[i]]) return false;
  }
  return true;
}

function words(index, numeric, results) {
  if (!numbers[numeric[index]]) return results;
  const newer = [];
  results.forEach(res => {
    numbers[numeric[index]].forEach(letter => {
      newer.push(res + letter);
    })
  });
  return words(index + 1, numeric, newer)
}

module.exports = phoneword;