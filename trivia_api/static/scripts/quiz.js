let globalCorrectAnswers = [];

function renderQuizOptions() {
    const url = 'http://127.0.0.1:5000/api/quizzes';

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          const title = document.getElementById('title');
          title.innerHTML = '';
          title.innerHTML = 'Choose a quiz below to get started:';
          const quizContainer = document.getElementById('quiz-container');
          quizContainer.innerHTML = '';
          
          data.forEach((quiz) => {
            const button = document.createElement('button');
            button.className = 'btn btn-primary justify-content-center p-4 m-2 w-50';
            button.id = 'quiz-' + quiz.id;
            button.innerHTML = quiz.title + '<br><br>' + quiz.quiz_description;
  
            // Add click event listener directly to the button
            button.addEventListener('click', () => {
              renderQuiz(quiz.id);
              getCorrectAnswers(quiz.id);
              displayCorrectAnswers(quiz.id);
            }); 
  
            quizContainer.appendChild(button);
          });
        }
      });
  }

renderQuizOptions();

function renderQuiz(quizId) {
  const url = 'http://127.0.0.1:5000/api/quizzes/' + quizId + '/questions';

  const returnButton = document.getElementById('back');
  returnButton.classList.remove('d-none');

  fetch(url).then(reponse => reponse.json())
  .then(data => {
    if (data.length > 0) {
      const title = document.getElementById('title');
      title.innerHTML = '';

      if (quizId === 1) {
        title.innerHTML = 'Welcome to the Video Game Trivia Quiz! Have a go at the questions below and see how you do!';
      } else if (quizId === 2) {
        title.innerHTML = 'Welcome to the Sports Trivia Quiz! Have a go at the questions below and see how you do!';
      } else if (quizId === 3) {
        title.innerHTML = 'Welcome to the Comic Book Trivia Quiz! Have a go at the questions below and see how you do!';
      }

      const quizContainer = document.getElementById('quiz-container');
      quizContainer.innerHTML = '';

      data.forEach((question) => {
        const questionContainer = document.createElement('div');
        questionContainer.className = 'question-container w-50 m-auto border border-3 rounded border-black mb-3 bg-primary-subtle p-2';
        const questionText = question.question_text;
        const choice1 = question.choices[0].choice_text;
        const choice2 = question.choices[1].choice_text;
        const choice3 = question.choices[2].choice_text;
        const choice4 = question.choices[3].choice_text;

        questionContainer.innerHTML = `
          <p class="mt-3">${questionText}</p>

                  <div class="row mb-3 mx-auto">
                      <div class="col-sm-6">
                          <div class="form-check ">
                          <input class="form-check-input" type="radio" name="radioGroup" id="choice1" value="${choice1}">
                          <label class="form-check-label" for="choice1">   

                              ${choice1}
                          </label>
                          </div>
                          <div class="form-check">
                          <input class="form-check-input" type="radio"   
                      name="radioGroup" id="choice2" value="${choice2}">
                          <label class="form-check-label" for="choice2">   

                              ${choice2}
                          </label>
                          </div>
                      </div>
                      <div class="col-sm-6">
                          <div class="form-check">
                          <input class="form-check-input" type="radio" name="radioGroup" id="choice3" value="${choice3}">
                          <label class="form-check-label" for="choice3">   

                              ${choice3}
                          </label>
                          </div>
                          <div class="form-check">
                          <input class="form-check-input" type="radio" name="radioGroup" id="choice4" value="${choice4}">
                          <label class="form-check-label" for="choice4">   

                              ${choice4}
                          </label>
                          </div>
                      </div>
                  </div>

                  <button class="btn btn-primary submit" id="submit">Submit</button>

        `;

        quizContainer.appendChild(questionContainer);
      }) 
    }
  })
}


async function getCorrectAnswers(quizId) {
  const url = 'http://127.0.0.1:5000/api/quizzes/' + quizId + '/questions';
  const response = await fetch(url);
  const data = await response.json();

  let correctAnswers = [];

  data.forEach((question) => {
    question.choices.forEach((choice) => {
      if (choice.is_correct === 1) {
        correctAnswers.push(choice.choice_text);
      }
    })
    
  })
    return correctAnswers;
 
}

async function displayCorrectAnswers(quizId) {
  const correctAnswers = await getCorrectAnswers(quizId);
  globalCorrectAnswers = correctAnswers;
 
}

console.log(globalCorrectAnswers);

