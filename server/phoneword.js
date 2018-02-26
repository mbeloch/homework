const numbers = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'k'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};

function phoneword(numeric) {
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
  let newIndex = index + 1;
  return words(newIndex, numeric, newer)
}

module.exports = phoneword;