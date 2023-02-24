var buttonClick = document.querySelector(".button"); // Select Button
var timerSet = document.getElementById("timer"); // Select Timer
var options = document.querySelector(".options"); // Select ul in main

// Timer that counts down from 30 once start button is clicked 
// (need to add code that decreases 5 seconds every time wrong answer is selected)
function timeRemaining() {
    var timeLeft = 30; // Set starting time

    var timerInterval = setInterval(function(event) {
        if (timeLeft > 1) {
            timerSet.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
         } else if(timeLeft === 1) {
            timerSet.textContent = timeLeft + ' second remaining';
            timeLeft--;
         } else {
            timerSet.textContent = '';
            clearInterval(timerInterval);
            // Create a function to display message that time has run out below this function
            // sendMessage();
         }
    }, 1000);
}
// QUESTIONS 1 - 5
// First question that appears when clicking start button
function firstQuestion() {
 var question = document.querySelector(".main-title"); //Select h2 in main
 var optionOne = document.createElement('li')

   question.textContent = '1: What does HTML stand for?';
   optionOne.textContent = 'Hyper Text Markup Language';
   options.appendChild(optionOne);
   buttonClick.addEventListener('click', secondClick);
}
// Second question appears after submitting first question
function secondQuestion() {
   var question = document.querySelector(".main-title"); //Select h2 in main
   question.textContent = 'Test Question 2';
   buttonClick.addEventListener('click', thirdClick);
}

function thirdQuestion() {
   var question = document.querySelector(".main-title"); //Select h2 in main
   question.textContent = 'Test Question 3';
}

// Functions that contain what will happen on clicks in order
function firstClick() {
   timeRemaining();
   firstQuestion();
   this.removeEventListener('click', firstClick);
}

function secondClick() {
   secondQuestion();
   this.removeEventListener('click', secondClick);
}

function thirdClick() {
   thirdQuestion();
   this.removeEventListener('click', thirdClick);
}
// Event Listener to click button to start timer
buttonClick.addEventListener('click', firstClick);




// QUESTIONS

// Function for creating first question form

// Event listener to submit first question/begin second question

// Function for creating second question form

// Event listener to submit second question/begin third question

// Function for creating third question form

// Event listener to 

// GAME OVER: SAVE SCORE AND 