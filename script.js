const startBtn = document.querySelector('.startBtn');
const rulesDiv = document.querySelector('.howToPlay');
const gameDiv = document.querySelector('.game');
const icons = document.querySelectorAll('.icon');
const restartBtn = document.querySelector('.newGameBtn');
const computerIcon = document.querySelector('.computerChoice');
const result = document.querySelector('.result');

let wins
    , loss
    , draws

startBtn.addEventListener('click', () => {
    startBtn.classList.add('hidden');
    rulesDiv.classList.add('hidden');
    restartBtn.classList.add('hidden');
    gameDiv.classList.remove('hidden');
    wins = 0;
    loss = 0;
    draws = 0;
});

const gameChoices = ['rock', 'paper', 'scissors'];
let gameRunning = false;
icons.forEach(icon => {
    icon.addEventListener('click', () => {
        if (gameRunning) return;
        icon.classList.add('selected');
        const ComputerImg = document.createElement('img');
        ComputerImg.classList.add('computerImg');

        let computerChoice = gameChoices[Math.floor(Math.random() * 3)];
        ComputerImg.src = `./img/icon-${computerChoice}.svg`
        ComputerImg.alt = `${computerChoice} Icon`
        computerIcon.appendChild(ComputerImg);

        const resultPara = document.createElement('p');
        resultPara.classList.add('resultPara');
        resultPara.textContent = playJoKenPo(icon.id, computerChoice);
        updateResults(resultPara.textContent);

        result.appendChild(resultPara);
        restartBtn.classList.remove('hidden');
        gameRunning = true;
    });
});

restartBtn.addEventListener('click', () => {
    gameRunning = false;
    result.removeChild(document.querySelector('.resultPara'));
    computerIcon.removeChild(document.querySelector('.computerImg'))
    icons[0].classList.remove('selected');
    icons[1].classList.remove('selected');
    icons[2].classList.remove('selected');
    restartBtn.classList.add('hidden');
});

function updateResults(e) {
    let winCount = document.querySelector('.win')
        , lossCount = document.querySelector('.loss')
        , drawsCount = document.querySelector('.draw');

    if (e.includes('Draw')) {
        draws++
        drawsCount.innerHTML = `Draws: ${draws}`
    } else if (e.includes('Lose')) {
        loss++
        lossCount.innerHTML = `Losses: ${loss}`
    } else {
        wins++
        winCount.innerHTML = `Wins: ${wins}`
    }
}

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
};