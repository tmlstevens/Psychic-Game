round = 1;
userWins = 0;
userLosses = 0;
userGuessesRemn = 5;
userGuessed = [];
appChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t","u", "v", "w", "x", "y", "z"];

function playPsychic() {
    document.onkeyup = function(getTheGuess) {
        var userGuess = getTheGuess.key;
        appChoice = appChoices[Math.floor(Math.random() * appChoices.length)];
        pushGuess();
    }
};

function pushGuess() {
    userGuessed.push(playPsychic.userGuess);
    document.getElementById("guessed").innerHTML = playPsychic.userGuess;
    checkGuess();
};

function checkGuess() {
    if (playPsychic.userGuess !== playPsychic.appChoice && userGuessesRemn > 0)  {
        userGuessesRemn = userGuessesRemn - 1;
        playPsychic();
    }
    else if (playPsychic.userGuess !== playPsychic.appChoice && userGuessesRemn == 0)  {
        round++;
	    userLosses = userLosses + 1;
	    alert("Try not to be a loser in the next round. Be the Psychic.");
        userGuessed = [];
        userGuessesRemn = 5;
        if (round < 10)  {
            playPsychic();
        }
        else if (round = 10) {
            gameActive = false;
            if (userWins > userLosses)  {
                alert("You WON!! Great job, sport!");
            }
            else if (userWins < userLosses)  {
                confirm("Some psychic you are.");
                alert("Loser");
            }
        }
    }
	else if (playPsychic.userGuess === playPsychic.appChoice)  {
            round++;
            userWins = userWins + 1;
            alert("You won that round, but every blind squirrel finds an acorn.");
            playPsychic();
    }

};
playPsychic();
console.log(playPsychic.userGuess);
console.log(userGuessed);