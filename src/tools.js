// eslint-disable-next-line import/prefer-default-export
export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const generateRoundLogic = (isExample) => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isExample(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};
