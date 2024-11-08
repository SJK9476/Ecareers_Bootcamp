const apiURL = "http://127.0.0.1:5000/api";

async function loadQuizOptions() {
  const quizList = document.getElementById("quiz-list");

  try {
    const response = await fetch(`${apiURL}/quizzes`);
    const data = await response.json();

    console.log(data);

    data.forEach((quiz) => {
      const button = document.createElement("button");
      button.className = "btn btn-primary justify-content-center p-4 m-2 w-50";
      button.id = `quiz-${quiz.id}`;
      button.innerHTML = quiz.title + "<br><br>" + quiz.quiz_description;

      // Add click event listener directly to the button
      button.addEventListener("click", () => {
        window.location.href = `quiz.html?quiz_id=${quiz.id}`;
      });

      quizList.appendChild(button);
    });
  } catch (error) {
    console.error("Failed to load quizzes:", error);
  }
}

async function loadQuiz(quizId) {
  const quizForm = document.getElementById("quiz-form");
  try {
      const response = await fetch(`${apiURL}/quizzes/${quizId}/questions`);
      const data = await response.json();

      console.log(data);

      if (quizId === "1") {
        document.getElementById("quiz-title").textContent = `Video Game Trivia`;
      } else if (quizId === "2") {
        document.getElementById("quiz-title").textContent = `Sports Trivia`;
      } else if (quizId === "3") {
        document.getElementById("quiz-title").textContent = `Comic Book Trivia`;
      }
      
      data.forEach((question) => {
        const questionElement = document.createElement("div");
        questionElement.className = "question w-75 text-center mb-3 mt-3 p-3 bg-danger mx-auto rounded border border-2 border-black";

        const questionText = document.createElement("p");
        questionText.innerHTML = question.question_text;
        questionText.className = "question-text text-light";
        questionElement.appendChild(questionText);

        const choicesDiv = document.createElement("div");
        choicesDiv.className = "choices d-flex flex-wrap justify-content-center gap-5";

        question.choices.forEach((choice) => {
          const choiceLabel = document.createElement("label");
          choiceLabel.className = 'text-light';
          const choiceInput = document.createElement("input");
          choiceInput.className = 'mx-2';
          choiceInput.type = 'radio';
          choiceInput.name = `question-${question.question_id}-choice-${choice.choice_id}`;
          choiceInput.value = choice.choice_id;
          choiceLabel.appendChild(choiceInput);
          choiceLabel.appendChild(document.createTextNode(choice.choice_text));
          choicesDiv.appendChild(choiceLabel);
          
        });

        questionElement.appendChild(choicesDiv);
        quizForm.appendChild(questionElement);
        })

    
  } catch (error) {
      console.error("Error loading questions:", error);
  }
}

async function submitQuiz() {
  const urlParams = new URLSearchParams(window.location.search);
  const quizId = urlParams.get('quiz_id');

  const answers = Array.from(document.querySelectorAll("input[type='radio']:checked")).map(input =>{
      console.log(input.name)
      const [question, questionId, choice, choiceId] = input.name.split('-');
      return{question_id: parseInt(questionId), choice_id: parseInt(input.value)};
  });


  try {

      console.log(answers)
      const response = await fetch(`${apiURL}/submit`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ quiz_id: quizId, answers: answers })
      });
      const result = await response.json();

      console.log(result);

      localStorage.setItem('score', result.score);
      localStorage.setItem('totalQuestions', result.total_questions);

      setTimeout(() => {
        window.location.href = 'result.html'; 
    }, 1000);
      
  } catch (error) {
      console.error("Error submitting quiz:", error);
  }
}

function displayScore(score, totalQuestions) {
  const scoreMessage = document.getElementById("score-message");
  scoreMessage.textContent = `You got ${score}/${totalQuestions} correct.`;
}
