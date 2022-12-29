const CHOICES = ["rock", "paper", "scissors"];
const playGameBtn = document.querySelector(".playGame");
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const output = document.querySelector(".output");

const WINMESSAGE = document.createElement('p')
WINMESSAGE.innerText = "You are the champion!";
WINMESSAGE.style.paddingTop = "5px";

const LOSEMESSAGE = document.createElement('p')
LOSEMESSAGE.innerText = "Too bad! Try again next time";
LOSEMESSAGE.style.paddingTop = "5px";

const FINALMESSAGE = document.createElement('p')
FINALMESSAGE.innerText = "Please Referesh the page to reset the app";
FINALMESSAGE.style.paddingTop = "10px";


let playerScore = 0;
let computerScore = 0;
let playerChoice= "";
let playBtnText = document.createElement('p');

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * 3);
    return CHOICES[randomIndex];
}

function playRound(computer, player) {
    if (computer === CHOICES[0] && player === CHOICES[2] ||
        computer === CHOICES[1] && player === CHOICES[0] ||
        computer ===  CHOICES[2] && player === CHOICES[1]) {
        computerScore += 1;
        return `You lose! ${computer} beats ${player}`
    } else if (player === CHOICES[0] && computer === CHOICES[2] ||
               player === CHOICES[1] && computer === CHOICES[0] ||
               player === CHOICES[2] && computer === CHOICES[1]) {
        playerScore += 1;
        return "You win!"
    } else {
        return "It's a tie!";
    }
}

rockBtn.disabled = true;
paperBtn.disabled = true;
scissorsBtn.disabled = true;


playGameBtn.addEventListener("click", (e) => {
    playGameBtn.disabled = true;
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;

    playerScore = 0;
    computerScore = 0;

    let welcome1 = document.createElement('p');
    welcome1.innerText = "Welcome To Rock Paper Scissors Game!";

    let welcome2 = document.createElement('p');
    welcome2.innerText = "If you reach 5 points before the computer does, you win! Goodluck!";
    welcome2.style.paddingTop = "5px";

    output.appendChild(welcome1);
    output.appendChild(welcome2);

    let playerUIScore = document.createElement('p');
    let computerUIScore = document.createElement('p');

    rockBtn.addEventListener("click", () => {
        playerChoice = CHOICES[0];
        playBtnText.innerText = playRound(getComputerChoice(), playerChoice);
        playBtnText.style.paddingTop = "5px"
        playerUIScore.innerText = `You: ${playerScore}`;
        playerUIScore.style.paddingTop = "5px"
        computerUIScore.innerText = `Computer: ${computerScore}`;

        output.appendChild(playBtnText);
        output.appendChild(playerUIScore);
        output.appendChild(computerUIScore);

        if (playerScore === 5) {
            output.appendChild(WINMESSAGE)
            output.appendChild(FINALMESSAGE)
            rockBtn.disabled = true;
            paperBtn.disabled = true;
            scissorsBtn.disabled = true;
        }

        if (computerScore === 5) {
           output.appendChild(LOSEMESSAGE)
           output.appendChild(FINALMESSAGE)
           rockBtn.disabled = true;
           paperBtn.disabled = true;
           scissorsBtn.disabled = true;
        }

        e.stopPropagation()
    })
    
    paperBtn.addEventListener("click", (e) => {
        playerChoice = CHOICES[1];
        console.log(playRound(getComputerChoice(), playerChoice))
        playBtnText.innerText = playRound(getComputerChoice(), playerChoice);
        playBtnText.style.paddingTop = "5px"
        playerUIScore.innerText = `You: ${playerScore}`;
        playerUIScore.style.paddingTop = "5px";
        computerUIScore.innerText = `Computer: ${computerScore}`;

        output.appendChild(playBtnText);
        output.appendChild(playerUIScore);
        output.appendChild(computerUIScore);

        if (playerScore === 5) {
            output.appendChild(WINMESSAGE);
            output.appendChild(FINALMESSAGE);
            rockBtn.disabled = true;
            paperBtn.disabled = true;
            scissorsBtn.disabled = true;
        }

        if (computerScore === 5) {
           output.appendChild(LOSEMESSAGE);
           output.appendChild(FINALMESSAGE);
           rockBtn.disabled = true;
           paperBtn.disabled = true;
           scissorsBtn.disabled = true;
        }

        e.stopPropagation()
    })
    
    scissorsBtn.addEventListener("click", (e) => {
        playerChoice = CHOICES[2];
        console.log(playRound(getComputerChoice(), playerChoice))
        playBtnText.innerText = playRound(getComputerChoice(), playerChoice);
        playBtnText.style.paddingTop = "5px"
        playerUIScore.innerText = `You: ${playerScore}`;
        playerUIScore.style.paddingTop = "5px"
        computerUIScore.innerText = `Computer: ${computerScore}`;

        output.appendChild(playBtnText);
        output.appendChild(playerUIScore);
        output.appendChild(computerUIScore);

        if (playerScore === 5) {
            output.appendChild(WINMESSAGE)
            output.appendChild(FINALMESSAGE)
            scissorsBtn.disabled = true;
            rockBtn.disabled = true;
            paperBtn.disabled = true;
            scissorsBtn.disabled = true;
        }

        if (computerScore === 5) {
           output.appendChild(LOSEMESSAGE)
           output.appendChild(FINALMESSAGE)
           rockBtn.disabled = true;
           paperBtn.disabled = true;
           scissorsBtn.disabled = true;
        }
    
        e.stopPropagation()
    })

    e.stopPropagation()
})