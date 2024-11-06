function renderQuizOptions() {
    const url = 'http://127.0.0.1:5000/api/quizzes';
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          const quizOptionsContainer = document.getElementById('quiz-options');
          data.forEach((quiz) => {
            const button = document.createElement('button');
            button.className = 'btn btn-primary justify-content-center p-4 m-2 w-50';
            button.id = 'quiz-' + quiz.id;
            button.innerHTML = quiz.title + '<br><br>' + quiz.quiz_description;
  
            // Add click event listener directly to the button
            button.addEventListener('click', openQuiz); 
  
            quizOptionsContainer.appendChild(button);
          });
        }
      });
  }

renderQuizOptions();

function openQuiz(event) {
  console.log(event.target.id);
  
}