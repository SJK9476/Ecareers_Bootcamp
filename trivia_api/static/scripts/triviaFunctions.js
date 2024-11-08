export { renderQuizQuestions, returnHome, getCorrectAnswers};

function renderQuizQuestions(n) {
    const url = 'http://127.0.0.1:5000/api/quizzes/' + n + '/questions';
    
    fetch(url)
    .then(response => response.json())
    .then (data => {
        const quizContainer = document.getElementById('quiz-container');
        let userAnswers = [];
        quizContainer.addEventListener('click', (event) => {
            if (event.target.classList.contains('submit')) {
                const radioGroup = document.getElementsByName('radioGroup');
                radioGroup.forEach((radio) => {
                    if (radio.checked) {
                        userAnswers.push(radio.value);
                    }
                })

                return userAnswers;
                
            }
            
        })

        const checkAnswers = document.getElementById('check-answers');
        checkAnswers.addEventListener('click', () => {
            if (userAnswers.length < 10) {
                alert('Please answer all questions before checking answers.');
                return;
            }
            console.log(getCorrectAnswers(n));
            console.log(userAnswers);

        })

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
                          <input class="form-check-input" type="radio" name="question-${index + 1}" id="choice1" value="${choice1}">
                          <label class="form-check-label" for="choice1-${index + 1}">   

                              ${choice1}
                          </label>
                          </div>
                          <div class="form-check">
                          <input class="form-check-input" type="radio"   
                      name="question-${index + 1}" id="choice2" value="${choice2}">
                          <label class="form-check-label" for="choice2-${index + 1}">   

                              ${choice2}
                          </label>
                          </div>
                      </div>
                      <div class="col-sm-6">
                          <div class="form-check">
                          <input class="form-check-input" type="radio" name="question-${index + 1}" id="choice3" value="${choice3}-${index + 1}">
                          <label class="form-check-label" for="choice3">   

                              ${choice3}
                          </label>
                          </div>
                          <div class="form-check">
                          <input class="form-check-input" type="radio" name="question-${index + 1}" id="choice4" value="${choice4}">
                          <label class="form-check-label" for="choice4-${index + 1}">   

                              ${choice4}
                          </label>
                          </div>
                      </div>
                  </div>

                  <button class="btn btn-primary submit" id="submit">Submit</button>

        `;

        quizContainer.appendChild(questionContainer);

        })
    }) 
}

function returnHome() {
    window.history.back();
}

function getCorrectAnswers(quizId) {
    let correctAnswers = [];
    const url = 'http://127.0.0.1:5000/api/quizzes/' + quizId + '/questions';
    fetch(url)
    .then(response => response.json())
    .then(data => {
        data.forEach((question) => {
            question.choices.forEach((choice) => {
                if (choice.is_correct === 1) {
                    correctAnswers.push(choice.choice_text);
                }
            })
        })
    })
    console.log(correctAnswers);
}

async function renderQuizOptions() {

    
    const url = 'http://127.0.0.1:5000/api/quizzes';

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          const title = document.getElementById('title');
          title.innerHTML = '';
          title.innerHTML = 'Choose a quiz below to get started:';
          const quizContainer = document.getElementById('quiz-list');
          quizContainer.innerHTML = '';
          
          data.forEach((quiz) => {
            const button = document.createElement('button');
            button.className = 'btn btn-primary justify-content-center p-4 m-2 w-50';
            button.id = 'quiz-' + quiz.id;
            button.innerHTML = quiz.title + '<br><br>' + quiz.quiz_description;
  
            // Add click event listener directly to the button
            button.addEventListener('click', () => {
              window.location.href = 'quiz.html?id=${quiz.id}';
            }); 
  
            quizContainer.appendChild(button);
          });
        }
      });
  }
