let gameChoices = ['rock', 'paper', 'scissors'];

let getComputerChoice = () => gameChoices[Math.floor(Math.random() * 3)];

function playJoKenPo(userChoice, computerChoice) {
    userChoice = userChoice.toLowerCase();

    if (userChoice === computerChoice) return 'Draw!'

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'You Lose! Paper beats Rock'
        } else {
            return 'You Won! Rock beats Scissors'
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'You Lose! Scissors beats Paper'
        } else {
            return 'You Won! Paper beats Rock'
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'You Lose! Rock beats Scissors'
        } else {
            return 'You Won! Scissors beats Paper'
        }
    }
}

const playerChoice = 'rock';
const computerChoice = getComputerChoice();

console.log(playJoKenPo(playerChoice, computerChoice));