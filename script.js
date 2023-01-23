const startBtn = document.querySelector('.startBtn')
    , rulesDiv = document.querySelector('.howToPlay')
    , gameDiv = document.querySelector('.game')
    , icons = document.querySelectorAll('.icon')
    , computerIcon = document.querySelector('.computerChoice')
    , playerIcon = document.querySelector('.playerChoice')
    , result = document.querySelector('.roundResult');

let wins = 0
    , loss = 0
    , draws = 0;

startBtn.addEventListener('click', () => {
    startBtn.classList.add('hidden');
    rulesDiv.classList.add('hidden');
    gameDiv.classList.remove('hidden');
    wins = 0;
    loss = 0;
    draws = 0;
});

icons.forEach(icon => {
    icon.addEventListener('click', () => {
        const computerChoice = getComputerChoice()
            , result = JokenpoRound(icon.id, computerChoice);

        updateIcons(icon.id, computerChoice);
        updateResults(result);
    })
});

function getComputerChoice() {
    const gameChoices = ['rock', 'paper', 'scissors'];
    return gameChoices[Math.floor(Math.random() * 3)];
};

function updateIcons(player, cpu) {
    const previousIcons = document.querySelectorAll('.iconImg');
    if (previousIcons.length !== 0) {
        previousIcons[0].remove();
        previousIcons[1].remove();
    };

    const computerImg = document.createElement('img');
    computerImg.classList.add('iconImg');
    computerImg.src = `./img/icon-${cpu}.svg`
    computerImg.alt = `${cpu} Icon`
    computerImg.style.margin = '0px 50px';
    computerIcon.appendChild(computerImg);

    const playerImg = document.createElement('img');
    playerImg.classList.add('iconImg');
    playerImg.src = `./img/icon-${player}.svg`
    playerImg.alt = `${player} Icon`
    playerImg.style.margin = '0px 50px';
    playerIcon.appendChild(playerImg);
};

function updateResults(result) {
    let winCount = document.querySelector('.win')
        , lossCount = document.querySelector('.loss')
        , drawsCount = document.querySelector('.draw');

    const roundResult = document.querySelector('.subtitle');
    roundResult.innerHTML = result;

    if (result.includes('Draw')) {
        draws++
        drawsCount.textContent = `Draws: ${draws}`
    } else if (result.includes('Lose')) {
        loss++
        lossCount.textContent = `Losses: ${loss}`
    } else {
        wins++
        winCount.textContent = `Wins: ${wins}`
    }
}

function JokenpoRound(userChoice, computerChoice) {

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