import runGameLogic from '../gameLogic.js';
import { generateRoundLogic } from '../tools.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => generateRoundLogic(isEven);

// const runEvenGame = () => {
//   const rounds = [];
//   for (let i = 0; i < roundsNumber; i+=1) {
//     rounds[i] = generateRound();
//   }
//   return runGameLogic(rounds, description);
// }

export default () => runGameLogic(generateRound, description);
