// Creates an array that lists out all of the options.
var computerChoice = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];//computer guess outside. Otherwise it will reset the computer guess each time the user selects.
var guessesSoFar = [];// Array to push user choices to.
var wins = 0;
var losses = 0;
var guessesLeft = 9;

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    var userGuess = event.key.toUpperCase();//taking in user guess and converting to uppercase.

    //Pushing userguess to guessesSoFar.

    // This logic determines if the user chose correctly and increments the appropriate number for wins.
    if (userGuess === computerGuess) {
        wins++;
        alert('Congratulations!  You Won!');
        guessesLeft = 9;//Reseting back to 9 to play again.
        guessesSoFar = [];//Removes guesses from the guessesSoFar Array for the new game.
        computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    }
    // This logic determines if the user guesses incorrectly and increments the appropriate number for losses.
    else if (guessesLeft === 0) {
        losses++;
        alert(`Incorrect guess!  You have LOST. The correct letter was: ${computerGuess}  Try again`);
        guessesLeft = 9;
        guessesSoFar.length = 0;
        computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    } else if (guessesSoFar.includes(userGuess)) {
        alert(`You already guessed ${userGuess}, try guessing another letter!`);
    } else {
        guessesLeft--;
        guessesSoFar.push(userGuess);//
    }
    // else if (userGuess !== computerGuess) {
    //     decrementing the guesses left
    // }
    // Taking and displaying the tallies in HTML.
    var html = "<h1>The Psycho Game</h1>" +
        "<p>Total Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses left: " + guessesLeft + "</p>" +
        "<p>Your guesses so far: " + guessesSoFar + "</p>";
    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html;
}