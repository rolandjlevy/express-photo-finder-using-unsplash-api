const wordsFromLocal = [
  'blue lagoon',
  'calm sea',
  'cake',
  'chocolate',
  'clear blue sky',
  'clouds',
  'friend',
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

async function getWordsFromPackage() {
  try {
    const { default: randomWords } = await import('random-words');
    return randomWords({ exactly: 25, maxLength: 8 });
  } catch (error) {
    console.error('Error fetching words from package:', error);
    return null;
  }
}

async function wordsPromise() {
  const wordsFromPackage = await getWordsFromPackage();
  return wordsFromPackage?.length ? wordsFromPackage : wordsFromLocal;
}

const getRandomInt = (max) => Math.floor(Math.random() * max);

async function getRandomWord() {
  const words = wordsFromLocal; // await wordsPromise();
  const num = getRandomInt(words.length);
  return words[num];
}

module.exports = {
  getRandomWord
};
