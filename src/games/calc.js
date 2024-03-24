import runGameLogic from '../gameLogic.js';
import { getRandomNumber } from '../tools.js';

const description = 'What is the result of the expression?';

const getOperator = () => {
  const operators = ['+', '-', '*'];
  const randOperatorIndex = getRandomNumber(0, operators.length - 1);
  return operators[randOperatorIndex];
};

const calculate = (operator, number1, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return Error('Incorrect operator');
  }
};

const generateRound = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const operator = getOperator();
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = String(calculate(operator, firstNumber, secondNumber));
  return [question, correctAnswer];
};

export default () => runGameLogic(generateRound, description);
