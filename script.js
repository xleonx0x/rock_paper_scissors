let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let key = Math.random();
    if (key >= 0 && key <= 0.33) {
        return "scissors";
    } else if (key > 0.33 && key < 0.66) {
        return "rock";
    } else {
        return "paper";
    }
}

function getHumanChoice() {
    return prompt("Rock, Paper or Scissors?");
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    switch (humanChoice) {
        case "rock":
            if (computerChoice == "scissors") {
                humanScore++;
            } else if (computerChoice == "paper") {
                computerScore++;
            }
            return computerChoice === "scissors" ? "You win! Rock beats Scissors" :
                   computerChoice === "paper" ? "You lose! Paper beats Rock" :
                   "It's a tie!";
        case "paper":
            if (computerChoice == "rock") {
                humanScore++;
            } else if (computerChoice == "scissors") {
                computerScore++;
            }
            return computerChoice === "rock" ? "You win! Paper beats Rock" :
                   computerChoice === "scissors" ? "You lose! Scissors beats Paper" :
                   "It's a tie!";
        case "scissors":
            if (computerChoice == "paper") {
                humanScore++;
            } else if (computerChoice == "rock") {
                computerScore++;
            }
            return computerChoice === "paper" ? "You win! Scissors beats Paper" :
                   computerChoice === "rock" ? "You lose! Rock beats Scissors" :
                   "It's a tie!";
        default:
            return "Invalid choice!";
    }
}

function playGame() {
    for (i = 0; i < 5; i++) {
        console.log(playRound(getHumanChoice(), getComputerChoice()));
        console.log("Human: " + humanScore + "\nComputer: " + computerScore);
    }
    let humanScore = 0;
    let computerScore = 0;
}

playGame();