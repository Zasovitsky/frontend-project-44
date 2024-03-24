import runGameLogic from '../gameLogic.js';
import { generateRoundLogic } from '../tools.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => generateRoundLogic(isEven);

export default () => runGameLogic(generateRound, description);
