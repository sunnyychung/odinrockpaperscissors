let humanScore = 0;
let computerScore = 0;
let round = 0;

const container = document.querySelector("#container");
const roundsCont = document.querySelector("#rounds");

const message = document.createElement("div");
message.classList.add("result");

const roundCount = document.createElement("div");
message.classList.add("rounds");
roundsCont.appendChild(roundCount);

const scoreCount = document.createElement("div");
message.classList.add("score");
container.appendChild(scoreCount);

function generateRandomNum() {
    return Math.random();
}

function getComputerChoice() {
    randomNum = generateRandomNum();
    if (randomNum <= 0.33) {
        return "rock";
    }
    else if (randomNum <= 0.66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(compChoice, userInput) {
    let win = undefined;

    if (userInput == "rock" || userInput == "paper" || userInput == "scissors") {
        // User Chooses Rock
        if (userInput == "rock") {
            if (compChoice == "paper") {
                win = false;
            }
            else if (compChoice == "scissors") {
                win = true;
            }
        }

        // User Chooses Paper
        else if (userInput == "paper") {
            if (compChoice == "scissors") {
                win = false;
            }
            else if (compChoice == "rock") {
                win = true;
            }
        }

        // User Chooses Scissors
        else if (userInput == "scissors") {
            if (compChoice == "rock") {
                win = false;
            }
            else if (compChoice == "paper") {
                win = true;
            }
        }

        displayWin(win, userInput, compChoice);
    }
}

function displayWin(win, user, comp) {
    if (win === true) {
        humanScore++
        message.textContent = "You Won! " +user+ " beats " +comp+ ".";
    }
    else if (win === false) {
        computerScore++
        message.textContent = "You Lost! " +comp+ " beats " +user+".";
    }
    else {
        message.textContent = "You drew! Computer chose " +comp+ " too.";
    }

    container.appendChild(message);
}

document.addEventListener("click", (event) => {
    const target = event.target;

    if (target.tagName === "BUTTON" && round < 5) {
        const computer = getComputerChoice();

        switch(target.id) {
            case "rock":
                playRound(computer, "rock");
                round++
                break;
            case "paper":
                playRound(computer, "paper");
                round++
                break;
            case "scissors":
                playRound(computer, "scissors");
                round++
                break;
        }
    }
    if (target.tagName === "BUTTON" && round >= 5) {
        if (humanScore > computerScore) {
            message.textContent = "Human's Win!";
        }
        else if (humanScore < computerScore) {
            message.textContent = "Computer's Win";
        }
        else {
            message.textContent = "Draw :(";
        }
    }

    roundCount.textContent = "Round: " +round;
    scoreCount.textContent = "Human: "+humanScore+ " Computer: "+computerScore;
}); 