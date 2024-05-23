let humanScore = 0;
let computerScore = 0;

const btns = document.querySelectorAll("button");

const result = document.querySelector(".results");

const human_score = document.querySelector("#human_score");
const computer_score = document.querySelector("#computer_score");

const restart_btn = document.querySelector(".restart_btn");

const reset = document.createElement("button");
reset.textContent = "Restart";

btns.forEach((button) => {
    button.addEventListener("click", () => {
        if (humanScore < 5 && computerScore < 5) {
            result.textContent = playRound(button.id, getComputerChoice()); 
            human_score.textContent = humanScore;
            computer_score.textContent = computerScore;
        }
        
        if (humanScore == 5) {
            result.textContent = "You have won :D";
            console.log("test");
            restart_btn.appendChild(reset);
        } else if (computerScore == 5) {
            result.textContent = "You have lost :(";
            restart_btn.appendChild(reset);
        }
    });
});

reset.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    human_score.textContent = humanScore;
    computer_score.textContent = computerScore;
    result.textContent = "";
});


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