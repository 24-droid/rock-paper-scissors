let computerChoice, humanChoice;
function getComputerChoice(max) {
    computerChoice = Math.floor(Math.random() * max);
    if (computerChoice === 0) {
        return "rock";
    }
    else if (computerChoice === 1) {
        return "paper";
    }
    else if (computerChoice === 2) {
        return "scissor";
    }

}
function getHumanChoice() {
    humanChoice = (String(prompt("Please enter your choice")));
    return humanChoice;
}
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice) {

    if (humanChoice.toLowerCase() === computerChoice.toLowerCase()) {
        console.log(prompt("Draw!", humanChoice, "ties", computerChoice));
    }
    else if (
        (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper") ||
        (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissor") ||
        (humanChoice.toLowerCase() === "scissor" && computerChoice.toLowerCase() === "rock")
    ) {
        console.log(prompt(`You Lose! ${computerChoice} beats ${humanChoice}.`));
        computerScore++;
    } 

    else {
        console.log(prompt(`You Win! ${humanChoice} beats ${computerChoice}.`));
        humanScore++;
    }

}
function playGame() {
    console.log(prompt(`Your score is:${humanScore},while the computer score is: ${computerScore}`));
}
for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice(3);
    playRound(humanSelection, computerSelection);
}
playGame();