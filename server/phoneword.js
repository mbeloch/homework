const numbers = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz'
};

function phoneword(numeric) {
  if (!validation(numeric)) return null;
  return []
}

function validation(number) {
  if (!parseInt(number)) return false;
  const stringNumber = String(number);
  for (let i = 0; i < stringNumber.length; i++) {
    console.log(numbers[stringNumber[i]]);
    if (!numbers[stringNumber[i]]) return false;
  }
  return true;
}

module.exports = phoneword;