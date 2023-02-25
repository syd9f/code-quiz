// Declare variables to select elements on page
var buttonClick = document.querySelector(".start"); // Select Button
var timerSet = document.getElementById("timer"); // Select Timer
var options = document.querySelector(".options"); // Select ul in main
var mainText = document.querySelector('.main-text'); //select p in main
var mainTitle = document.querySelector('.main-title'); // select h2 in main

timerSet.style.display = 'none';
// Timer that counts down from 60 once start button is clicked 
function timeRemaining() {
    var timeLeft = 10; // Set starting time

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
            mainTitle.textContent = 'Save your score:';
            options.style.display ='none';
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
   // create 4 option buttons and assign class attributes
   var optionOne = document.createElement('button');
      optionOne.setAttribute("class","first");
   var optionTwo = document.createElement('button');
      optionTwo.setAttribute("class","second");
   var optionThree = document.createElement('button');
      optionThree.setAttribute("class","third");
   var optionFour = document.createElement('button');
      optionFour.setAttribute("class","fourth");

   //  set button + title text content
   mainTitle.textContent = '1: What does HTML stand for?';
   optionOne.textContent = 'Hyper Text Markup Language';
   optionTwo.textContent = 'Hyper Text Marketing Language';
   optionThree.textContent = 'Hyper Tool Markup Language';
   optionFour.textContent = 'Anotha one'

   // display buttons to option ul in main
   options.appendChild(optionOne);
   options.appendChild(optionTwo);
   options.appendChild(optionThree);
   options.appendChild(optionFour);

   // assign event listeners for buttons
   optionOne.addEventListener('click', secondClick);
}

// Second question appears after submitting first question
function secondQuestion() {
   // refer to option buttons
   var optionOne = document.querySelector(".first");
   var optionTwo = document.querySelector(".second");
   var optionThree = document.querySelector(".third");
   var optionFour = document.querySelector(".fourth");
   // set text content
   mainTitle.textContent = '2: Test Question 2';
   optionOne.textContent = 'Test Option 1';
   optionTwo.textContent = 'Test Option 2';
   optionThree.textContent = 'Test Option 3';
   optionFour.textContent = 'Test Option 4';
   // display buttons in options section
   options.appendChild(optionOne);
   options.appendChild(optionTwo);
   options.appendChild(optionThree);
   options.appendChild(optionFour);
   // assign event listeners to buttons
   optionThree.addEventListener('click',thirdClick);
}

// Third Question appears after submitting second question
function thirdQuestion() {
   mainTitle.textContent = 'Test Question 3';
}

// Functions that contain what will happen on clicks in order
function firstClick() {
   timerSet.style.display = 'block';
   buttonClick.style.display ='none';
   mainText.style.display ='none';

   timeRemaining();
   firstQuestion();
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
// event listener for correct answer #1





// Event listener to submit first question/begin second question

// Event listener to submit second question/begin third question

// Event listener to 

// GAME OVER: SAVE SCORE AND 