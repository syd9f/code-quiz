// Declare variables to select elements on page
var buttonClick = document.querySelector(".start"); // Select Button
var timerSet = document.getElementById("timer"); // Select Timer
var options = document.querySelector(".options"); // Select ul in main
var mainText = document.querySelector('.main-text'); //select p in main

timerSet.style.display = 'none';
// Timer that counts down from 60 once start button is clicked 
function timeRemaining() {
    var timeLeft = 60; // Set starting time

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
            sendMessage();
         }
    }, 1000);
}

// Message that appears when time has run out
function sendMessage() {
   timerSet.textContent = 'No time left!'
}

// QUESTIONS 1 - 5
// First question that appears when clicking start button
function firstQuestion() {
 var question = document.querySelector(".main-title"); //Select h2 in main
 var optionOne = document.createElement('button');
 var optionTwo = document.createElement('button');
 var optionThree = document.createElement('button');

   question.textContent = '1: What does HTML stand for?';
   optionOne.textContent = 'Hyper Text Markup Language';
   optionTwo.textContent = 'Hyper Text Marketing Language';
   optionThree.textContent = 'Hyper Tool Markup Language';

   options.appendChild(optionOne);
   options.appendChild(optionTwo);
   options.appendChild(optionThree);
   buttonClick.addEventListener('click', secondClick);
}

// Second question appears after submitting first question
function secondQuestion() {
   var question = document.querySelector(".main-title"); //Select h2 in main
   question.textContent = 'Test Question 2';
   optionOne.textContent = 'Test Option 2';
   buttonClick.addEventListener('click', thirdClick);
}

// Third Question appears after submitting second question
function thirdQuestion() {
   var question = document.querySelector(".main-title"); //Select h2 in main
   question.textContent = 'Test Question 3';
}

// Functions that contain what will happen on clicks in order
function firstClick() {
   timeRemaining();
   firstQuestion();
   timerSet.style.display = 'block';
   buttonClick.style.display ='none';
   mainText.style.display ='none';
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





// Event listener to submit first question/begin second question

// Event listener to submit second question/begin third question

// Event listener to 

// GAME OVER: SAVE SCORE AND 