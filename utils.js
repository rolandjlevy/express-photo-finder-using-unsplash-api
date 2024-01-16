const randomWords = require('random-words');

const randomNum = (n) => Math.round(Math.random() * n) - 1;

const wordsFromPackage = randomWords({ exactly: 25, maxLength: 8 });

const wordsFromLocal = [
  'blue lagoon',
  'calm sea',
  'chocolate',
  'clear blue sky',
  'clouds',
  'garden',
  'green forest',
  'hello world',
  'ice cream',
  'mountain',
  'peaceful sunrise',
  'relaxing beach',
  'summer breeze',
  'sunshine',
  'swimming pool',
  'welcome'
];

const words =
  wordsFromPackage && wordsFromPackage.length
    ? wordsFromPackage
    : wordsFromLocal;

const getRandomWord = () => {
  const num = randomNum(words.length);
  return words[num];
};

module.exports = {
  getRandomWord
};
