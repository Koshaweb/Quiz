callId = ($id) => {
 return document.getElementById($id);
}


const startBtn = callId('start-btn');
const WelScreen = callId('welcome-screen');
const QzScreen = callId('quiz-screen');
const RstScreen = callId('result-screen');
const RstBtn = callId('restart-btn');
const QuestionNumber = callId('question-number');
const questionTitle = callId('question-title');
const options = callId('options');
const scoreDisplay = callId('score');


let questionsData = [
  {
    question: "What is the capital of Australia?",
    options: ["Melbourne", "Sydney", "Adelaide", "Canberra"],
    correct: "Canberra",
  },

  {
    question: "Who is the author of Becoming?",
    options: ["Obama", "Michelle Obama", "Brian Tracy", "Shokrullah Kosha"],
    correct: "Michelle Obama",
  },

  {
    question: "What is the currency of Australia?",
    options: ["USD", "AUD", "EURO", "AFG"],
    correct: "AUD",
  },

  {
    question: "How many states does Australia have?",
    options: ["6", "2", "8", "5"],
    correct: "6",
  },

  {
    question: "What is the iconic of Australia?",
    options: ["Opera House", "Harbour Bridge", "Blue Mountains", "All"],
    correct: "All",
  },

];

let currentQuestionIndex = 0;
let score = 0;


startQuiz = () =>{
  WelScreen.classList.add("hidden");
  QzScreen.classList.remove("hidden");
  currentQuestionIndex = 0;
  score = 0;
  showQuestion ();
}

showQuestion = () => {
  const currentQuestion = questionsData[currentQuestionIndex];
  QuestionNumber.textContent = `${currentQuestionIndex + 1} of ${questionsData.length}`;
  questionTitle.textContent = currentQuestion.question;
  options.innerHTML = "";

  currentQuestion.options.forEach((option) =>{
    const button = document.createElement("button");
    button.textContent = option;
    button.className ="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all";
    button.onclick = () => checkAnswer(option);
    options.appendChild(button);
  })
};

checkAnswer = (selectedOption) => {
  const currentQuestion = questionsData[currentQuestionIndex];

  if(selectedOption === currentQuestion.correct){
    score++;
  } 

  currentQuestionIndex++;
  if(currentQuestionIndex < questionsData.length){
    showQuestion();
  }else{
    showResult();
  }
};


showResult = () => {
  QzScreen.classList.add("hidden");
  RstScreen.classList.remove("hidden");

  scoreDisplay.textContent = `your Score is ${score} out of ${questionsData.length}`;
}

RstBtn.addEventListener("click", () => {
    RstScreen.classList.add("hidden");
    WelScreen.classList.remove("hidden");
   });

 startBtn.addEventListener("click", startQuiz);
