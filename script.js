
const choices = ['rock', 'paper', 'scissors'];
const round = 3;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'tie game';
    } else if ( (playerSelection === 'rock') && (computerSelection === 'scissors') ||
                (playerSelection === 'scissors') && (computerSelection === 'paper') ||
                (playerSelection === 'paper') && (computerSelection === 'rock')
    ) {
        return 'player wins';
    } else {
        return 'computer wins';
    }
}

function game() {

    let playerScore = 0, computerScore = 0;

    for (let i=0; i<round; i++) {

        let playerSelection = prompt(`what is your selection? (round ${i+1})`).trim().toLowerCase();
        if ( !choices.includes(playerSelection) ) {
            playerSelection = prompt(`invalid, what is your selection? (round ${i+1})`).trim().toLowerCase();
        }

        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));

        
        if (playRound(playerSelection, computerSelection) === 'player wins') {
            playerScore++;
        } else if (playRound(playerSelection, computerSelection) === 'computer wins') {
            computerScore++;
        }

    }

    console.log([playerScore, computerScore]);
    return [playerScore, computerScore];

}

game();