// var cardContent = document.getElementsByClassName(".card");
// var questionClick = document.querySelectorAll("li");
// let possibleQuestions = {
//         question: 'Which is the true name of JavaScript',
//         answer1: 'JavaScript',
//         answer2: 'ECMAScript',
//         answer3: 'Jscript',
//         answer4: 'All the Above',
// }

// // var pushQuestions = function(event){
// //     event.preventDefault();
// //     cardContent.textContent = possibleQuestions[0];

// // }
// questionClick.addEventListener("click", function() {
    
// });

const startButton = document.body.querySelector('.start-btn')
const answersEl = document.getElementById('answer-container')
const questionEl = document.getElementById('question')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startQuiz)


function startQuiz() {
  console.log('Started')
  startButton.classList.add('hide')
  answersEl.classList.remove('hide')
  shuffledQuestions = possibleQuestions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  nextQuestion()
}

function nextQuestion() {
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionEl.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
  })
}

function selectAnswer() {

}

function startTimer () {

}

const possibleQuestions = [
  {
    question: 'Which of the following are the true names of JavaScript',
    answers: [
      {text: 'JavaScript', correct: false },
      {text: 'ECMAScript', correct: false},
      {text: 'Jscript', correct: false},
      {text: 'All of the Above', correct: true},
    ]
  },
  {
    question: 'This is Question 2',
    answers: [
      {text: 'JavaScript', correct: false },
      {text: 'ECMAScript', correct: false},
      {text: '3', correct: false},
      {text: 'All', correct: true},
    ]
  },
  {
    question: 'This is Question 3',
    answers: [
      {text: 'JavaScript', correct: false },
      {text: 'ECMAScript', correct: false},
      {text: 'Jscript', correct: false},
      {text: 'All of the Above', correct: true},
    ]
  },
  {
    question: 'This is Question 4',
    answers: [
      {text: 'JavaScript', correct: false },
      {text: 'ECMAScript', correct: false},
      {text: 'Jscript', correct: false},
      {text: 'All of the Above', correct: true},
    ]
  },
  {
    question: 'This is Question 4',
    answers: [
      {text: 'JavaScript', correct: false },
      {text: 'ECMAScript', correct: false},
      {text: 'Jscript', correct: false},
      {text: 'All of the Above', correct: true},
    ]
  },
  {
    question: 'This is Question 5',
    answers: [
      {text: 'JavaScript', correct: false },
      {text: 'ECMAScript', correct: false},
      {text: 'Jscript', correct: false},
      {text: 'All of the Above', correct: true},
    ]
  },
]

var totalQuestions = possibleQuestions.length