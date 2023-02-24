var buttonClick = document.querySelector(".button"); // Select Button
var timerSet = document.getElementById("timer"); // Select Timer

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

// First question that appears when clicking start button
function firstQuestion() {
 var question = document.querySelector(".main-title"); //Select h2 in main
   question.textContent = 'Test Question';
   buttonClick.addEventListener('click', secondClick);
}

function secondQuestion() {
   var question = document.querySelector(".main-title"); //Select h2 in main
   question.textContent = 'Test Question 2';
}

function firstClick() {
   timeRemaining();
   firstQuestion();
   this.removeEventListener('click', firstClick);
}

function secondClick() {
   secondQuestion();
   this.removeEventListener('click', secondClick);
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