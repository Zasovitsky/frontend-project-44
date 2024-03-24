import { generateRoundLogic } from '../tools.js';
import runGameLogic from '../gameLogic.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= (number / 2); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => generateRoundLogic(isPrime);

export default () => runGameLogic(generateRound, description);
