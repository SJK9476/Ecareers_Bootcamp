import {renderQuizQuestions, returnHome, getCorrectAnswers} from './triviaFunctions.js';

renderQuizQuestions(quizId);
getCorrectAnswers(quizId);

console.log(getCorrectAnswers(1));

document.getElementById('return-home').addEventListener('click', returnHome);















