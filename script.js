let gameChoices = ['rock', 'paper', 'scissors'];

let getComputerChoice = () => gameChoices[Math.floor(Math.random() * 3)];

function playJoKenPo(userChoice, computerChoice) {

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

function game() {
    playRound(prompt("Please select either Rock, Paper or Scissors to play 5 rounds of JoKenPo"));
}

function playRound(userChoice) {
    let winCount = 0
        , lossCount = 0
        , drawsCount = 0
        , finalResult;

    userChoice = userChoice.toLowerCase();

    if (userChoice != 'rock' && userChoice != 'paper' && userChoice != 'scissors') {
        alert(`Not a valid choice, please select either 'Rock', 'Paper' or 'Scissors' only (case insensitive)`);
        return;
    }

    for (let i = 1; i <= 5; i++) {
        const roundResult = playJoKenPo(userChoice, getComputerChoice());
        roundResult.includes('Draw')
            ? drawsCount++
            : roundResult.includes('Won')
                ? winCount++
                : lossCount++;
    }

    finalResult = `Final Result (Wins/Losses/Draws): \n${winCount}/ ${lossCount}/ ${drawsCount}\n`;

    winCount > lossCount
        ? finalResult += 'You Won!!'
        : winCount === lossCount
            ? finalResult += 'Draw!!'
            : finalResult += 'You Lose!!';

    console.log(finalResult);
}