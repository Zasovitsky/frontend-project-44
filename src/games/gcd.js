import runGameLogic from '../gameLogic.js';
import { getRandomNumber } from '../tools.js';

const description = 'Find the graetest common divisor of given numbers.';

const getGcd = (number1, number2) => {
  if (number1 === 0) {
    return number2;
  }
  return getGcd(number2 % number1, number1);
};

const generateRound = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const correctAnswer = String(getGcd(firstNumber, secondNumber));
  const question = `${firstNumber} ${secondNumber}`;
  return [question, correctAnswer];
};

// const runGcdGame = () => {
//   const rounds = [];
//   for (let i = 0; i < roundsNumber; i += 1) {

//   }

// }

export default () => runGameLogic(generateRound, description);
