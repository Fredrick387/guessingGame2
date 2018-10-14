let randomNumber = Math.floor(Math.random() * 100);
var statusOutput = document.getElementById('status_output');
var guessInput = document.getElementById('guessInput');
let counter = 0;
function checkGuess() {
  let guessVal = parseInt(guessInput.value);
  if (counter < 10 && guessVal) {
       counter++;
         if (guessVal < randomNumber) {
           statusOutput.value = "Too small! Try Again!";
         }
         if (guessVal > randomNumber) {
             statusOutput.value = "Too large! Guess Again!";
         }
         if (guessVal === randomNumber) {
             statusOutput.value = "You Guessed the correct number! It was " + randomNumber + "." + "It only took you" + counter + "tries to get it right.";
         }
  }
  else if (counter === 10) {
      statusOutput.value = "You weren't able to guess the correct number. The number was " + randomNumber;
  }
    return false;
}

function clearFields() {
    guessInput.value = "";
    counter = 0;
    statusOutput.value = "You have yet to guess anything.";
    randomNumber = Math.floor(Math.random() * 100) + 1;
    return false;
}