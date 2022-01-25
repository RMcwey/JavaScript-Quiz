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
const nextButton = document.body.querySelector('.next-btn')
const restartButton = document.body.querySelector('.restart-btn')
const questionEl = document.getElementById('question')
const answersEl = document.getElementById('answer-container')


var timerEl = document.getElementById('timer');
var timeLeft = '';

let randomizedQuestions, currentQuestionIndex

startButton.addEventListener('click', startQuiz)

nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  nextQuestion()
})
restartButton.addEventListener('click', () => {
  timeLeft = 60;

})

function startQuiz() {
  startButton.classList.add('hide')
  answersEl.classList.remove('hide')
  randomizedQuestions = possibleQuestions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  timeLeft = 60;
  timerfunc();
  nextQuestion();
  
}
var timerfunc = function timer() {
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.innerText= "Time Left: " + timeLeft;
      timeLeft--;
    // } else if () {
    //   clearInterval(timeInterval);
    }else {
      timerEl.textContent = '';
      clearInterval(timeInterval);
    }
  }, 1000)
};

function nextQuestion() {
  resetState()
  showQuestion(randomizedQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionEl.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('btn')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
      
    }
    button.addEventListener('click', selectAnswer)
    answersEl.appendChild(button)
  })
}

function resetState() {
  nextButton.classList.add('hide')
  while (answersEl.firstChild) {
    answersEl.removeChild(answersEl.firstChild)
  }
}

function selectAnswer(e) {
  const clickedButton = e.target
  const correct = clickedButton.dataset.correct
  Array.from(answersEl.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (randomizedQuestions.length > currentQuestionIndex + 1) {
  nextButton.classList.remove('hide');
  } else {
    restartButton.classList.remove('hide');
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
    // add correct script below
  } else {
    element.classList.add('wrong');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
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
    question: 'What type of language is JavaScript?',
    answers: [
      {text: 'Functional programming language', correct: false },
      {text: 'Spanish', correct: false},
      {text: 'The language of Starbucks', correct: false},
      {text: 'Object-oriented language', correct: true},
    ]
  },
  {
    question: 'What does "var" stand for?',
    answers: [
      {text: 'Vector Applied Research', correct: false },
      {text: 'Variance', correct: false},
      {text: 'Variable', correct: true},
      {text: 'Constant', correct: false},
    ]
  },
  {
    question: 'What can you do with JavaScript?',
    answers: [
      {text: 'Make coffee', correct: false },
      {text: 'Make Games', correct: true},
      {text: '3D print mugs', correct: false},
      {text: 'Animate Websites', correct: true},
    ]
  },
  {
    question: 'Aside from the end, where might a semi-colon go in JS?',
    answers: [
      {text: 'The end', correct: true},
      {text: 'The middle', correct: false},
      {text: 'The top', correct: false},
      {text: 'Next to a colon', correct: false},
    ]
  },
  {
    question: 'What year was JavaScript created?',
    answers: [
      {text: '2003', correct: false },
      {text: '2014', correct: false},
      {text: '2000', correct: false},
      {text: '1995', correct: true},
    ]
  },
]

var totalQuestions = possibleQuestions.length