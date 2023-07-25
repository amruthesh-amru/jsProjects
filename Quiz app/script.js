const submitButton = document.getElementById("primary_btn")
const questionEl = document.getElementById("question")
const userInput = document.getElementById("answerInput")
const scoreEl = document.getElementById("score")
const form = document.getElementById("questionForm")
let score = 0;
let storedVariable;
function generateRandomNumber(min, max) {
    const random = Math.floor(Math.random() * max) + min;
    return random;
}
function loadQuestion() {
    random1 = generateRandomNumber(1, 10)
    random2 = generateRandomNumber(1, 10)
    console.log(typeof (random1), typeof (random2));

    questionEl.innerHTML = `What is ${random1} multipiled by ${random2}`;
    answer = random1 * random2;
    storedVariable = answer
   
}
loadQuestion();

function checkAnswer(event) {
    event.preventDefault();
    const userValue = userInput.value;
    console.log(userValue, storedVariable);
    if (userValue == storedVariable) {
        score++;
    } else {
        score--;
    }
    scoreEl.innerHTML = `${score}`;
   
    userInput.value = ""
    loadQuestion();
}


// submitButton.addEventListener("click", function callsOtherFunction(e) {
   
// })
















//----------------------------------------------
// console.log(score.innerHTML);
// const loadQuestion = () => {
//     const random1 = Math.floor(Math.random() * 10) + 1;
//     const random2 = Math.floor(Math.random() * 10) + 1;

//     question.innerHTML = `What is ${random1} multipiled by ${random2}`;

//     let i = 0;

//     score.innerHTML = parseInt(`${i}`);
//     const value = parseInt(userInput.value)
//     const result = random1 * random2;
//     console.log(value, result);
//     if (value == result) {
//         score.innerText = `${i++}`
//     } else {
//         score.innerText = `${i--}`
//     }
//     console.log(userInput.value + typeof (value));
// }
// function load(event) {
//     event.preventDefault();
//     loadQuestion();
// }
//----------------------------------------------------------
// const generateRandomNumber = (min, max){
//     const random = Math.floor(Math.random() * max) + min;
//     return random;
// }
// const generateQuestion = () => {
//     ranmdom1 = generateRandomNumber(1, 10);
//     ranmdom2 = generateRandomNumber(1, 10);

//     question = `What is ${random1} multipiled by ${random2}`;
//     const answer = random1 * random2;
//     return { question, answer };
// }
// const showQuestion = () => {
//     const { question, answer } = generateQuestion()
//     questionEl.innerText = question;
//     storedAnswer = answer;
// }
// showQuestion();

// const checkAnswer = (event) => {
//     event.preventDefault();
//     const formData = new FormData(questionEl);
//     const userAnswer = +formData.get("answer")
//     if (userAnswer === storedAnswer) {
//         score += 1;
//     } else {
//         score -= 1;
//     }
//     score.innerText = score;
//     showQuestion();
// }


// const questionEl = document.getElementById("question");
// const questionFormEl = document.getElementById("questionForm");
// const scoreEl = document.getElementById("score");
// let storedAnswer;
// let score = 0;

// const randomNumber = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const generateQuestion = () => {
//   const randomNumber1 = randomNumber(1, 10);
//   const randomNumber2 = randomNumber(1, 10);
//   const question = `Q. What is ${randomNumber1} multiply by ${randomNumber2} ?`;
//   const answer = randomNumber1 * randomNumber2;
//   return { question, answer };
// };

// const showQuestion = () => {
//   const { question, answer } = generateQuestion();
//   questionEl.innerText = question;
//   storedAnswer = answer;
// };
// showQuestion();

// const checkAnswer = (event) => {
//   event.preventDefault();
//   const formData = new FormData(questionFormEl);

//   const userAnswer = +formData.get("answer");
//   if (userAnswer === storedAnswer) {
//     score += 1;
//   } else {
//     score -= 1;
//   }
//   scoreEl.innerText = score;
//   event.target.reset();
//   showQuestion();
//   console.log("answer", userAnswer);
// };