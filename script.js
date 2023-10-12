
// DOM elements
const resultElem = document.getElementById('result');
const playerScoreElem = document.getElementById('playerScore');
const computerScoreElem = document.getElementById('computerScore');
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const resetBtn = document.getElementById("resetBtn");

// consts
const choices = ['rock', 'paper', 'scissors'];
const rotalRound = 3;
let playerScore = 0, computerScore = 0, roundsPlayed = 0;

rockBtn.addEventListener('click', () => game('rock'));
paperBtn.addEventListener('click', () => game('paper'));
scissorsBtn.addEventListener('click', () => game('scissors'));
resetBtn.addEventListener('click', () => resetGame());

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'tie';
    } else if ( (playerSelection === 'rock') && (computerSelection === 'scissors') ||
                (playerSelection === 'scissors') && (computerSelection === 'paper') ||
                (playerSelection === 'paper') && (computerSelection === 'rock')
    ) {
        return 'player wins';
    } else {
        return 'computer wins';
    }
}

function game(playerSelection) {

    if (roundsPlayed < rotalRound) {

        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        resultElem.textContent = `${result}`;
 
        if ( result === 'player wins') {
            playerScore++;
        } else if ( result === 'computer wins') {
            computerScore++;
        }

        playerScoreElem.textContent = playerScore;
        computerScoreElem.textContent = computerScore;

        roundsPlayed++;

    } else {
        resultElem.textContent = `you've played ${roundsPlayed} rounds. time to reset`;
    }


    console.log([playerScore, computerScore]);

}

function resetGame() {
    playerScore = 0;
    computerScore = 0; 
    roundsPlayed = 0;
    resultElem.textContent = `-`;
    playerScoreElem.textContent = playerScore;
    computerScoreElem.textContent = computerScore;
}