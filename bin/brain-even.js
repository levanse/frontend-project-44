#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (Math.floor(max)
    - Math.ceil(min) + 1)) + Math.ceil(min);

const startBrainEven = () => {
  const min = 1;
  const max = 100;

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomNumber(min, max);
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ').trim();

    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}`);
};

startBrainEven();
