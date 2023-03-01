// Declare variables to select elements on page
var buttonClick = document.querySelector(".start"); // Select start Button
var timerSet = document.getElementById("timer"); // Select Timer
var options = document.querySelector(".options"); // Select ul in main
var mainText = document.querySelector('.main-text'); //select p in main
var mainTitle = document.querySelector('.main-title'); // select h2 in main
var form = document.querySelector('.form'); // select form
var foot = document.querySelector('.last-score');
var footTitle = document.querySelector('.footer-title');
let timerInterval;

// SCORING----------------------------------------------
// declare variable for keeping score
var score = 0; // set starting score as 0

function displayScore() {
   // calculate final score
   var finalScore = Math.round((100 * score) / 3);
   // display final score in main p element
   mainText.textContent = 'Score: ' + finalScore + '%';
   // create user initial input
   var userInitials = document.createElement('input');
   userInitials.setAttribute('type', 'text');
   userInitials.setAttribute('class','initials')
   userInitials.setAttribute('placeholder','Enter Initials');
   // create submit button
   var submitButton = document.createElement('button');
   submitButton.setAttribute('class','submit-button');
   submitButton.textContent = 'Submit Score';
   // append input + button to form
   form.appendChild(userInitials);
   form.appendChild(submitButton);
   // event listener to save score on button click
   submitButton.addEventListener("click", saveScore);
}

function saveScore() {
   // select user input
   var initialInput = document.querySelector('.initials');

   // create object to store high score
   var highScore = {
      user: initialInput.value,
      score: mainText.textContent
   };
   // store score and input to local storage
   localStorage.setItem("highScore", JSON.stringify(highScore));
} 
   // display previous score to screen
var lastScore = JSON.parse(localStorage.getItem("highScore"));
if (lastScore !== null) {
   footTitle.textContent = "Previous Score:";
   foot.textContent = "Name: " + lastScore.user + " " + lastScore.score;
}

// TIMER-----------------------------------------------------
// Hide timer on page load
timerSet.style.display = 'none';

var timeLeft = 30; // Set starting time

// Timer that counts down from 30 once start button is clicked 
function timeRemaining() {
   
   var timerInterval = setInterval(function(event) {
      if (timeLeft > 1) {
         timerSet.textContent = timeLeft + ' seconds remaining';
         timeLeft--;
      } else if(timeLeft === 1) {
         timerSet.textContent = timeLeft + ' second remaining';
         timeLeft--;
      // } else if(document.querySelector(".end-timer").clicked === true){
      //    clearInterval(timerInterval);
      } else {
         timerSet.textContent = '';
         clearInterval(timerInterval);
         sendMessage();
         mainTitle.textContent = 'Save your score:';
         options.style.display ='none';
         mainText.style.display ='block';
         displayScore();
      }
   }, 1000);
}

// Message that appears when time has run out
function sendMessage() {
   timerSet.textContent = 'No time left!'
}

// QUESTIONS 1 - 3 --------------------------------------------------
// First question that appears when clicking start button
function firstQuestion() {
   // create 4 option buttons and assign class attributes
   var optionOne = document.createElement('button');
   optionOne.setAttribute("class","first");
   var optionTwo = document.createElement('button');
   optionTwo.setAttribute("class","second");
   var optionThree = document.createElement('button');
   optionThree.setAttribute("class","third");
   var optionFour = document.createElement('button');
   optionFour.setAttribute("class","fourth");

   //  set text content
   mainTitle.textContent = '1: What does HTML stand for?';
   optionOne.textContent = 'Hyper Text Markup Language';
   optionTwo.textContent = 'Hyper Text Marketing Language';
   optionThree.textContent = 'Hyper Tool Markup Language';
   optionFour.textContent = 'Hot Text Makeup Language'

   // display buttons to option ul in main
   options.appendChild(optionOne);
   options.appendChild(optionTwo);
   options.appendChild(optionThree);
   options.appendChild(optionFour);

   // assign event listeners for buttons
   optionOne.addEventListener('click', secondClick);
   optionTwo.addEventListener('click',incorrectAnswer);
   optionThree.addEventListener('click',incorrectAnswer);
   optionFour.addEventListener('click',incorrectAnswer);
}

// Second question appears after correctly answering first question
function secondQuestion() {
   // refer to option buttons
   var optionOne = document.querySelector(".first");
   var optionTwo = document.querySelector(".second");
   var optionThree = document.querySelector(".third");
   var optionFour = document.querySelector(".fourth");
   // reset text content
   mainTitle.textContent = '2: Commonly used data types DO NOT include:';
   optionOne.textContent = 'strings';
   optionTwo.textContent = 'booleans';
   optionThree.textContent = 'alerts';
   optionFour.textContent = 'numbers';
   // display buttons in options section
   options.appendChild(optionOne);
   options.appendChild(optionTwo);
   options.appendChild(optionThree);
   options.appendChild(optionFour);
   // assign event listeners to buttons
   optionOne.addEventListener('click', incorrectAnswer);
   optionTwo.addEventListener('click',thirdClick);
   optionThree.addEventListener('click',incorrectAnswer);
   optionFour.addEventListener('click',incorrectAnswer);
}

// Third Question appears after submitting second question
function thirdQuestion() {
   // refer to option buttons
   var optionOne = document.querySelector(".first");
   var optionTwo = document.querySelector(".second");
   var optionThree = document.querySelector(".third");
   var optionFour = document.querySelector(".fourth");
   optionFour.setAttribute("class","end-timer")
   // reset text content
   mainTitle.textContent = '3: Arrays in JavaScript can be used to store ____';
   optionOne.textContent = 'numbers and strings';
   optionTwo.textContent = 'other arrays';
   optionThree.textContent = 'booleans';
   optionFour.textContent = 'all of the above';
   // display buttons in options section
   options.appendChild(optionOne);
   options.appendChild(optionTwo);
   options.appendChild(optionThree);
   options.appendChild(optionFour);
   // assign event listeners to buttons
   optionOne.addEventListener('click', incorrectAnswer);
   optionTwo.addEventListener('click',incorrectAnswer);
   optionThree.addEventListener('click',incorrectAnswer);
   optionFour.addEventListener('click',fourthClick);
}

// ON CLICK FUNCTIONS -------------------------------------------
// Start button is clicked
function firstClick() {
   timerSet.style.display = 'block';
   buttonClick.style.display ='none';
   mainText.style.display ='none';

   timeRemaining();
   firstQuestion();
}
// Questions answered incorrectly remove 5 seconds
function incorrectAnswer(){
   timeLeft = timeLeft - 5;
}

// First Question answered correctly
function secondClick() {
   secondQuestion();
   score++;
   this.removeEventListener('click', secondClick);
   console.log('current score: ' + score + '/3');
}

// Second Question answered correctly
function thirdClick() {
   thirdQuestion();
   score++;
   this.removeEventListener('click', thirdClick);
   console.log('current score: ' + score + '/3');
}

// Third Question answered correctly
function fourthClick() {
   score++;
   timeLeft = 0;
   timerSet.style.display = 'none';
   mainText.style.display = 'block';
   options.style.display ='none';
   mainTitle.textContent = 'Save your score:';

   console.log('current score: ' + score + '/3');
   clearInterval(timerInterval);
   timerInterval.preventDefault();
}

// function stopTimer() {
//    if(document.querySelector(".end-timer").clicked === true){
//       clearInterval(timerInterval);
//       return timerInterval(fourthClick);
//    } 
// }
// Event Listener to click button to start timer
buttonClick.addEventListener('click', firstClick);