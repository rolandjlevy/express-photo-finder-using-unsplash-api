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

let words = wordsFromLocal;

(async () => {
  const randomWords = (await import('random-words')).default;
  const wordsFromPackage = randomWords({ exactly: 25, maxLength: 8 });
  if (wordsFromPackage?.length) {
    words = wordsFromPackage;
  }
})();

const getRandomInt = (max) => Math.floor(Math.random() * max);

const getRandomWord = () => {
  const num = getRandomInt(words.length);
  return words[num];
};

module.exports = {
  getRandomWord
};
