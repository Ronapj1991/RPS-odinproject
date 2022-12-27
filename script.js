function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * 3);
    
    switch(randomIndex) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

