let playerScore = 0
let computerScore = 0
let roundWinner = ''

const rockBtn = document.getElementById('rockBtn')
const paperBtn = document.getElementById('paperBtn')
const scissorsBtn = document.getElementById('scissorsBtn')
const restartBtn = document.getElementById('restartBtn')
const playerSign = document.getElementById('playerSign')
const computerSign = document.getElementById('computerSign')
const playerScoreP = document.getElementById('playerScore')
const computerScoreP = document.getElementById('computerScore')

rockBtn.addEventListener('click', () => handleClick('rock'))
paperBtn.addEventListener('click', () => handleClick('paper'))
scissorsBtn.addEventListener('click', () => handleClick('scissors'))
restartBtn.addEventListener('click', restartGame())

function handleClick(ps) {
  if (endGame()) {
    return
  }
  const computerSelection = getComputerChoice()
  playRound(ps, computerSelection)
  updateChoice(ps, computerSelection)
  updateScore()
}

function playRound(ps, cs) {
  switch ((ps, cs)) {
    case ps == cs:
      roundWinner = 'tie'
      break
    case ps == 'rock' && cs == 'scissors':
    case ps == 'paper' && cs == 'rock':
    case ps == 'scissors' && cs == 'paper':
      playerScore++
      roundWinner = 'player'
      break
    case ps == 'rock' && cs == 'paper':
    case ps == 'paper' && cs == 'scissors':
    case ps == 'scissors' && cs == 'rock':
      computerScore++
      roundWinner = 'computer'
      break
  }
}

function updateChoice(ps, cs) {
  switch (ps) {
    case 'rock':
      playerSign.textContent = 'rock'
      break
    case 'paper':
      playerSign.textContent = 'paper'
      break
    case 'scissors':
      playerSign.textContent = 'scissors'
      break
  }
  switch (cs) {
    case 'rock':
      computerSign.textContent = 'rock'
      break
    case 'paper':
      computerSign.textContent = 'paper'
      break
    case 'scissors':
      computerSign.textContent = 'scissors'
      break
  }
}

function updateScore() {
  playerScoreP.textContent = `Player: ${playerScore}`
  computerScoreP.textContent = `Computer: ${computerScore}`
}

function getComputerChoice() {
  let n = Math.floor(Math.random() * 3)
  switch (n) {
    case 0:
      return 'rock'
    case 1:
      return 'paper'
    case 2:
      return 'scissors'
  }
}

function endGame() {
  return playerScore === 5 || computerScore === 5
}

function restartGame() {
  playerScore = 0
  computerScore = 0
  playerScoreP.textContent = 'Player: 0'
  computerScoreP.textContent = 'Computer: 0'
  playerSign.textContent = '❔'
  computerSign.textContent = '❔'
}

function game(userInput) {
  getComputerChoice()
  playRound(userInput, comInput)
  console.log('Your Score is: ' + playerScore)
  console.log('Computer score is: ' + computerScore)
}
