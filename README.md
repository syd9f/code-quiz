# code-quiz
Challenge 4 - Code Quiz: Web APIs

## User Story
```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```
## Acceptance Criteria
```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```
## Usage
When visiting the webpaage, the user will see:

![Webpage Screenshot](./assets/images/codequiz-firstopen.png)

After clicking start, the first question appears and the timer starts at 30 seconds. Clicking the correct answer moves to the next question, and incorrect answers subtract 5 seconds from the timer. 

The quiz ends when either the last question is clicked or the time runs out.

![Webpage Recording](./assets/images/codequiz-timeout.mp4)

When the submit score button is clicked, the page will reset and the most recent score will display.

![Webpage Screenshot](./assets/images/codequiz-savescore.png)


## Credits
CSS Reset file : https://meyerweb.com/eric/tools/css/reset/
