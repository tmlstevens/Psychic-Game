gameActive = true;
round = 1;
userWins = 0;
userLosses = 0;
userGuessesRemn = 5;
userGuessed = [];
appChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t","u", "v", "w", "x", "y", "z"];
appChoice = appChoices[Math.floor(Math.random() * appChoices.length)];
console.log("appChoice " + appChoice);

function gameUpdate() {
    document.getElementById("round").innerHTML = round;
    document.getElementById("userWins").innerHTML = userWins;
    document.getElementById("userLosses").innerHTML = userLosses;
    document.getElementById("userGuessed").innerHTML = userGuessed;
    document.getElementById("userGuessesRemn").innerHTML = userGuessesRemn;
};
gameUpdate();

function gameReset() {
    round = 1;
    userWins = 0;
    userLosses = 0;
    userGuessesRemn = 5;
    userGuessed = [];
    appChoice = appChoices[Math.floor(Math.random() * appChoices.length)];
    console.log("appChoice " + appChoice);
};

// for (var i = 10; i < 10; i++) {
if (gameActive) {
    document.onkeyup = function(getTheGuess) {
        var userGuess = getTheGuess.key;
        userGuessed.push(userGuess);
        console.log("userGuess " + userGuess);
        userGuessesRemn = userGuessesRemn - 1;
    
        if (userGuess !== appChoice && userGuessesRemn > 0) {
            gameUpdate();
        }
        else if (userGuess !== appChoice && userGuessesRemn == 0) {
            round++;
            userLosses++;
            userGuessed = [];
            userGuessesRemn = 5;
            gameUpdate();
            if (round === 10 && userWins < userLosses) {
                confirm("Some psychic you are.");
            }
            else if (round === 10 && userWins > userLosses) {
                confirm("You lost that round, but...");
                alert("You WON the game!!!");
                gameActive = false;
            }
            else if (round < 10) {
            appChoice = appChoices[Math.floor(Math.random() * appChoices.length)];
            console.log("appChoice " + appChoice);
            alert("Try not to be a loser in the next round. Be the Psychic.");
            }
        }
        else if (userGuess === appChoice) {
            round++;
            userWins++;
            userGuessed = [];
            userGuessesRemn = 5;
            gameUpdate();
            if (round < 10) {
                appChoice = appChoices[Math.floor(Math.random() * appChoices.length)];
                console.log("appChoice " + appChoice);
                alert("You won that round, but every blind squirrel finds an acorn.");
            }
            else if (round === 10 && userWins < userLosses) {
                alert("You won that round, but you lost the game");
                confirm("Some psychic you are.");
                gameActive = false;
            }
            else if (round === 10 && userWins > userLosses) {
                alert("You WON!!!");
                gameActive = false;
            }
        }
        else {
            alert("Refresh the page to try again");
        }
    }
};





