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
    }) 
}

function returnHome() {
    window.open('./index.html', '_self');
}

function getCorrectAnswers(n) {
    let correctAnswers = [];
    const url = 'http://127.0.0.1:5000/api/quizzes/' + n + '/questions';
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
    return correctAnswers;
}
