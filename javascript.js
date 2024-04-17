// The code below will get the cpu's choice between "rock", "paper", and "scissors".

function getComputerChoice() {

    let cpuChoice = Math.floor(Math.random() * 3);

    if (cpuChoice === 0) {
        
        cpuChoice = "rock"; 

    } else if (cpuChoice === 1) {

        cpuChoice = "paper";

    } else if (cpuChoice === 2) {

        cpuChoice = "scissors";

    }

    return cpuChoice;
}

// console.log(getComputerChoice() + " is the computer's choice")

// The code below will compare the values of getComputerChoice() and getPlayerChoice, compare them and declare a result while keeping track of score count and round count

let roundResult;
let cpuScore = 0;
let playerScore =0;

let final;
let score;

function playRound(playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() === "rock" && computerSelection === "rock") {

        roundResult = "Rock vs rock! It's a tie.";
       
        return roundResult + " The score is: Player- " + playerScore + " vs CPU- " + cpuScore + ".";

    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {

        roundResult = "Rock loses to paper! You lose.";

        cpuScore++;

        return roundResult + " The score is: Player- " + playerScore + " vs CPU- " + cpuScore + ".";

    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {

        roundResult = "Rock beats scissors! You win!";
        
        playerScore++;

        return roundResult + " The score is: Player- " + playerScore + " vs CPU- " + cpuScore + ".";

    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {

        roundResult = "Paper beats rock! You win!";
       
        playerScore++;

        return roundResult + " The score is: Player- " + playerScore + " vs CPU- " + cpuScore + ".";

    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "paper") {

        roundResult = "Paper vs paper! It's a tie.";

        return roundResult + " The score is: Player- " + playerScore + " vs CPU- " + cpuScore + ".";

    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {

        roundResult = "Paper loses to scissors! You lose.";

        cpuScore++;

        return roundResult + " The score is: Player- " + playerScore + " vs CPU- " + cpuScore + ".";

    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {

        roundResult = "Scissors loses to rock! You lose.";

        cpuScore++;

        return roundResult + " The score is: Player- " + playerScore + " vs CPU- " + cpuScore + ".";

    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {

        roundResult = "Scissors beats paper! You win!";

        playerScore++;

        return roundResult + " The score is: Player- " + playerScore + " vs CPU- " + cpuScore + ".";

    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "scissors") {

        roundResult = "Scissors vs scissors! It's a tie.";

        return roundResult + " The score is: Player- " + playerScore + " vs CPU- " + cpuScore + ".";
    
    } else if (playerSelection === "final" && computerSelection === "score" && playerScore > cpuScore) {

        return "The final score is: Player- " + playerScore + " vs CPU- " + cpuScore + ". Congratulations, you won!";

    } else if (playerSelection === "final" && computerSelection === "score" && playerScore < cpuScore) {

        return "The final score is: Player- " + playerScore + " vs CPU- " + cpuScore + ". Better luck next time, you lost!";

    } else if (playerSelection === "final" && computerSelection === "score" && playerScore === cpuScore) {

        return "The final score is: Player- " + playerScore + " vs CPU- " + cpuScore + ". What are the oods, you tied!";

    } else {

        roundResult = "Invalid player choice";

        return roundResult + " The score is: Player- " + playerScore + " vs CPU- " + cpuScore + ".";

    }

    

}

for (let roundCount = 0; roundCount < 7; roundCount++) {

    if (roundCount < 5) {
    const playerSelection = prompt("Rock, paper or scissors?")
    const computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection));

    } else if (roundCount === 6) {

        console.log(playRound("final", "score"));

        }
    
    }

