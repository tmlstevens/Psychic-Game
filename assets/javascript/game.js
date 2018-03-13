var gameActive = true;
var round = 1;
var userWins = 0;
var userLosses = 0;
var userGuessesRemn = 5;
var userGuessed = [];
var appChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t","u", "v", "w", "x", "y", "z"];
var appChoice;
appChoice = appChoices[Math.floor(Math.random() * appChoices.length)];
console.log("appChoice " + appChoice);

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
    if (gameActive) {
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
                }

                else if (userLosses < userWins) {
                    alert("But you WON the game!!");
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
                gameActive = false;
                    
                if (userLosses > userWins) {
                    alert("But you LOST the game!!");
                }

                else if (userLosses < userWins) {
                    alert("And you WON the game!!");
                }
            }
        }
    }
    else {
        alert("Thanks for playing. Refresh the page to play again.");
    }
};

