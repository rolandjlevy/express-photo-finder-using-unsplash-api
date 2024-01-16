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

let wordsPromise = (async () => {
  let words = wordsFromLocal;
  try {
    const randomWordsModule = await import('random-words');
    const wordsFromPackage = randomWordsModule.default({ exactly: 25, maxLength: 8 });
    if (wordsFromPackage?.length) {
      words = wordsFromPackage;
    }
  } catch (error) {
    console.error('Error fetching words from package:', error);
  }
  return words;
})();

const getRandomInt = (max) => Math.floor(Math.random() * max);

const getRandomWord = async () => {
  const words = await wordsPromise; 
  const num = getRandomInt(words.length);
  return words[num];
};

module.exports = {
  getRandomWord
};