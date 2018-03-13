function gameReset() {
    round = 1;
    userWins = 0;
    userLosses = 0;
    userGuessesRemn = 5;
    userGuessed = [];
    appChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t","u", "v", "w", "x", "y", "z"];
    appChoice = appChoices[Math.floor(Math.random() * appChoices.length)];
    console.log("appChoice " + appChoice);
    pageUpdate();
};
gameReset();

function pageUpdate() {
    document.getElementById("round").innerHTML = round;
    document.getElementById("userWins").innerHTML = userWins;
    document.getElementById("userLosses").innerHTML = userLosses;
    document.getElementById("userGuessed").innerHTML = userGuessed;
    document.getElementById("userGuessesRemn").innerHTML = userGuessesRemn;
};
pageUpdate()

function newRound() {
    appChoice = appChoices[Math.floor(Math.random() * appChoices.length)];
    console.log("appChoice " + appChoice);
    round++;
    userGuessesRemn = 5;
    userGuessed = [];
    pageUpdate();
};

document.onkeyup = function(getTheGuess) {
    var userGuess = getTheGuess.key;
    userGuessed.push(userGuess);
    console.log("userGuessed " + userGuessed);
    userGuessesRemn--;

    if ((userGuess !== appChoice) && (userGuessesRemn > 0)) {
        pageUpdate();
    }
    else if ((userGuess !== appChoice) && (userGuessesRemn == 0)) {
        userLosses++;
        pageUpdate();

        if (round < 10) {
            alert("You lost that round, but keep trying.");
            newRound();
        }
        else if (round === 10) {
            alert("You lost that round");
            gameActive = false;
     
            if (userLosses > userWins) {
                alert("And you lost the game.");
                alert("Press any key to play again");
                gameReset();
            }
            else if (userLosses < userWins) {
                alert("But you WON the game!!");
                alert("Press any key to play again");
                gameReset();
            }
            else if (userLosses === userWins) {
                alert("But you TIED the game!!");
                alert("Press any key to play again");
                gameReset();
            }
        }
    }
    else if (userGuess === appChoice) {
        userWins++;
            
        if (round < 10) {
            alert("You won that round.");
            newRound();
        }
        else if (round === 10) {
            alert("You won that round");

            if (userLosses > userWins) {
                alert("But you LOST the game!!");
                alert("Press any key to play again");
                gameReset();
            }
            else if (userLosses < userWins) {
                alert("And you WON the game!!");
                alert("Press any key to play again");
                gameReset();
            }
            else if (userLosses === userWins) {
                alert("And you TIED the game!!");
                alert("Press any key to play again");
                gameReset();
            }
        }
    }
};