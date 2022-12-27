const CHOICES = ["rock", "paper", "scissors"];

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
        return `You lose! ${computer} beats ${player}`
    } else if (player === CHOICES[0] && computer === CHOICES[2] ||
               player === CHOICES[1] && computer === CHOICES[0] ||
               player === CHOICES[2] && computer === CHOICES[1]) {
        return "You win!"
    } else {
        return "It's a tie!";
    }
}


