const randomNum = (n) => Math.round(Math.random() * n) - 1;

const words = ['welcome', 'hello world', 'chocolate', 'ice cream', 'sunshine', 'green forest', 'clear blue sky', 'calm sea', 'peaceful sunrise', 'summer breeze', 'relaxing beach', 'swimming pool', 'blue lagoon', 'clouds'];

const getRandomWord = () => {
  const num = randomNum(words.length);
  return words[num];
}

module.exports = {
  getRandomWord
}