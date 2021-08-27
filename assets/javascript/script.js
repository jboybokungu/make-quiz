var timerElement = document.querySelector("#timer");
var startEl = document.querySelector("#start");
var endingElement = document.querySelector("#end");
var questionContainerEl = document.querySelector("#question-container");
var questionEl = document.querySelector("#question");
var answerEl = document.querySelector("#answer-button");

var timeLeft = 60;
var currentIndex = 0;

var beginTimer = function () {
    var interval = setInterval(function() {
        timeLeft--;
        timerElement.textContent = timeLeft;
        if (timeLeft <= 0) {
            timeLeft = 0;
            clearInterval(interval);
            endQuiz();
        }
    }, 1000);
}


function startQuiz() {
    startEl.classList.add("jb")
    questionContainerEl.classList.remove("jb")

}

function endQuiz() {
    startEl.classList.remove("start-btn");
    endingElement.classList.add("start-btn");
}



var questions = [
    {
        question: 'what is 1 + 1 ?',
        answers: [
            { text: '2', correct: true },
            { text: '40', correct: false },
            { text: '4', correct: false},
            { text: '25', correct: false}
        ]
    },
    {
        question: 'what is 1000 / 10 ?',
        answers: [
            { text: '1000', correct: false },
            { text: '100', correct: true },
            { text: '90', correct: false},
            { text: '40', correct: false}
        ]
    },
    {
        question: 'what does CSS stand for ?',
        answers: [
            { text: 'Nothing', correct: false },
            { text: 'Cascading Style Shop', correct: false },
            { text: 'Ceasar Sauce Salad', correct: false},
            { text: 'Cascading Style Sheets', correct: true}
        ]
    },
    {
        question: 'what programs do we need for this assignment?',
        answers: [
            { text: 'jQuery and bootstrap', correct: false },
            { text: 'only HTLM', correct: false },
            { text: 'HTML, CSS, and JavaScript', correct: true},
            { text: 'only CSS', correct: false}
        ]
    }

]
startEl.addEventListener('click', function() {
    beginTimer();
    startQuiz();
});
