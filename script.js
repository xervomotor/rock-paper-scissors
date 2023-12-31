
// DOM elements
const resultElem = document.getElementById('result');
const playerScoreElem = document.getElementById('playerScore');
const computerScoreElem = document.getElementById('computerScore');
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const resetBtn = document.getElementById("resetBtn");
const log = document.querySelector('.log');
const playerSelectedIcon = document.querySelector('#playerSelectedIcon');
const computerSelectedIcon = document.querySelector('#computerSeletedIcon');

const choices = ['rock', 'paper', 'scissors'];
const rotalRound = 5;
let playerScore = 0, computerScore = 0;

rockBtn.addEventListener('click', () => game('rock'));
paperBtn.addEventListener('click', () => game('paper'));
scissorsBtn.addEventListener('click', () => game('scissors'));
resetBtn.addEventListener('click', () => resetGame());
resetBtn.disabled = true;

// functions
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

        resetBtn.disabled = false;

        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        log.appendChild(displayLog(result));

        playerSelectedIcon.src = `icons/${playerSelection}.png`;
        computerSelectedIcon.src = `icons/${computerSelection}.png`;
 
        if ( result === 'player wins') {
            playerScore++;
            if (playerScore === 5) {
                disableBtn();
                playerScoreElem.style.color = 'red';
            }
        } else if ( result === 'computer wins') {
            computerScore++;
            if (computerScore === 5) {
                disableBtn();
                computerScoreElem.style.color = 'red';
            }
        }

        playerScoreElem.textContent = playerScore;
        computerScoreElem.textContent = computerScore;


    console.log([playerScore, computerScore]);
}

function disableBtn() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

function displayLog(result) {
    const logElement = document.createElement('p');
    logElement.textContent = `${result}`;
    return logElement;
}

function resetGame() {
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
    playerScore = 0;
    computerScore = 0; 
    roundsPlayed = 0;
    removeAllChilds(log);
    playerScoreElem.textContent = playerScore;
    playerScoreElem.style.color = 'black';
    computerScoreElem.textContent = computerScore;
    computerScoreElem.style.color = 'black';
}

function removeAllChilds(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}