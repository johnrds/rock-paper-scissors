const startBtn = document.querySelector('.startBtn')
    , rulesDiv = document.querySelector('.howToPlay')
    , gameDiv = document.querySelector('.game')
    , icons = document.querySelectorAll('.icon')
    , computerIcon = document.querySelector('.computerChoice')
    , playerIcon = document.querySelector('.playerChoice')
    , result = document.querySelector('.roundResult')
    , restartBtn = document.querySelector('.restartBtn')
    , restartMsg = document.querySelector('.restartMsg')
    , overlay = document.querySelector('.overlay')
    , winCount = document.querySelector('.win')
    , lossCount = document.querySelector('.loss')
    , drawsCount = document.querySelector('.draw')
    , roundResult = document.querySelector('.subtitle');

let wins = 0
    , loss = 0
    , draws = 0;

startBtn.addEventListener('click', () => {
    startBtn.classList.add('hidden');
    rulesDiv.classList.add('hidden');
    gameDiv.classList.remove('hidden');
});

restartBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
    restartMsg.classList.add('hidden');
    wins = 0;
    loss = 0;
    draws = 0;
    drawsCount.textContent = `Draws: ${draws}`;
    lossCount.textContent = `Losses: ${loss}`;
    winCount.textContent = `Wins: ${wins}`;
    roundResult.textContent = "Select an icon";
    document.querySelectorAll('.iconImg')[0].remove();
    document.querySelectorAll('.iconImg')[0].remove();
})

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
    //computerImg.style.margin = '0px 50px';
    computerIcon.appendChild(computerImg);

    const playerImg = document.createElement('img');
    playerImg.classList.add('iconImg');
    playerImg.src = `./img/icon-${player}.svg`
    playerImg.alt = `${player} Icon`
    //playerImg.style.margin = '0px 50px';
    playerIcon.appendChild(playerImg);
};

function updateResults(result) {
    const lastMsg = document.querySelector('.resultMsg');

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

    if (wins === 5 || loss === 5) {
        if (wins === 5) {
            lastMsg.textContent = "You Won!!"
        }
        else { lastMsg.textContent = "You Lose!!" }
        restartMsg.classList.remove('hidden');
        overlay.classList.remove('hidden');
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