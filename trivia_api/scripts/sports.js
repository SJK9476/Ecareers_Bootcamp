import {renderQuizQuestions, returnHome, getCorrectAnswers} from './triviaFunctions.js';

renderQuizQuestions(3);
getCorrectAnswers(3);

console.log(getCorrectAnswers(3));

document.getElementById('return-home').addEventListener('click', returnHome);