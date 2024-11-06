import {renderQuizQuestions, returnHome, getCorrectAnswers} from './triviaFunctions.js';

let userAnswers = [];

renderQuizQuestions(2);
getCorrectAnswers(2);

console.log(getCorrectAnswers(2));

document.getElementById('return-home').addEventListener('click', returnHome);