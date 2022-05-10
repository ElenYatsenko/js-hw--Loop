"use strict";
//секретное число хранится в константе SECRET_NUMBER
/**
 *
 * @returns {boolean}
 */
const startGame = function guessCorrectNumber() {
  let userVariant = prompt(`Please, guess the number:`); //string
  if (isNaN(userVariant) || userVariant <= 0) {
    alert("The game is impossible. Enter number for example 6.");
  }
  return winGameUser(userVariant);
};

/**
 *
 * @param {string} guessNumber
 * @returns {boolean}
 */
function winGameUser(guessNumber) {
  const guessSecretNumber = Number(guessNumber);
  if (Number(guessSecretNumber) === SECRET_NUMBER) {
    alert("You guessed the secret number for the first time!");
    return true;
  }
  return beGameWhiteWin(guessSecretNumber);
}

//будем играть пока пользователь не угадает секретное число
/**
 *
 * @param {number} number
 * @returns {boolean}
 */
function beGameWhiteWin(number = 5) {
  for (let countAttempt = 1; number !== SECRET_NUMBER; countAttempt++) {
    const resultCheck = checkAnswerUser(number);
    if (resultCheck === "winner") {
      alert(`You guessed the secret number on the ${countAttempt} try.`);
      break;
    }
    number = prompt(`Your number is ${resultCheck}. Try again:`);
  }
  return true;
}

//проверим ответ пользователя: подсказка или победа
/**
 *
 * @param {string} userNumber
 * @returns {string}
 */
function checkAnswerUser(userNumber) {
  const userNumberIs = Number(userNumber);
  if (userNumberIs > SECRET_NUMBER) {
    return "higher";
  } else if (userNumberIs < SECRET_NUMBER) {
    return "smaller";
  } else if (userNumberIs === SECRET_NUMBER) {
    return "winner";
  } else {
    return "error";
  }
}

console.log(startGame());
