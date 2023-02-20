var buttonClick = document.querySelector(".button"); // Select Button
var timerSet = document.querySelector("#timer"); // Select Timer

// Timer that counts down from 30 once start button is clicked 
// (add code that decreases 5 seconds every time wrong answer is selected)
function timeRemaining() {
    var timeLeft = 30; // Set starting time

    var timerInterval = setInterval(function() {

        if (timeLeft > 1) {
            timerSet.textContent = timeLeft + ' seconds remaining';
            timeLeft--
         } else if(timeLeft === 1) {
            timerSet.textContent = timeLeft + ' second remaining';
            timeLeft--;
         } else {
            timerSet.textContent = '';
            clearInterval(timerInterval)
            // Create a function to display message that time has run out below this function
            // sendMessage();
         }
    }, 1000);
}

// Event Listener to click button to start timer
buttonClick.addEventListener("click", timeRemaining());


// QUESTIONS

// Function for creating first question form

// Event listener to submit first question/begin second question

// Function for creating second question form

// Event listener to submit second question/begin third question

// Function for creating third question form

// Event listener to 

// GAME OVER: SAVE SCORE AND 