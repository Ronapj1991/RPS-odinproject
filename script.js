const CHOICES = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * 3);
    return CHOICES[randomIndex];
}

function getPlayerChoice() {
    let playerChoice = prompt("Enter your choice:\nrock\npaper\nscissors");
    playerChoice = playerChoice.toLowerCase();
    while(!CHOICES.includes(playerChoice)) {
        playerChoice = prompt("Please type your choice carefully:\nrock\npaper\nscissors");
        if (CHOICES.includes(playerChoice)) break;
    }
    return playerChoice
}

function playRound(computer, player) {
    if (computer === CHOICES[0] && player === CHOICES[2] ||
        computer === CHOICES[1] && player === CHOICES[0] ||
        computer ===  CHOICES[2] && player === CHOICES[1]) {
        computerScore++;
        return `You lose! ${computer} beats ${player}`
    } else if (player === CHOICES[0] && computer === CHOICES[2] ||
               player === CHOICES[1] && computer === CHOICES[0] ||
               player === CHOICES[2] && computer === CHOICES[1]) {
        playerScore++;
        return "You win!"
    } else {
        return "It's a tie!";
    }
}


function game() {
    console.log("Welcome to the Rock Paper Scissors Game!");
    while(true) {
        let computer = getComputerChoice();
        let player = getPlayerChoice();
        console.log(playRound(computer, player))
        console.log(`You: ${playerScore}, Computer:${computerScore}`)
        
        if (playerScore === 5) {
            console.log("You are the champion!");
            break;
        }
        
        if (computerScore === 5) {
            console.log("Too bad! Try again next time");
            break;
        }
    }
}