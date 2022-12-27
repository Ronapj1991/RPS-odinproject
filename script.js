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