const playerScore = 0
const computerScore = 0
let comInput = 'str'

function playRound(playerSel, computerSel) {
  // compares inputs for the two users
  // use if logic to determine if p beats c
}

function getComputerChoice() {
  let n = Math.floor(Math.random() * 3)
  switch (n) {
    case 1:
      comInput = 'rock'
      break
    case 2:
      comInput = 'paper'
      break
    case 3:
      comInput = 'scissors'
      break
  }
}

function game() {
  // plays game
  // calls playRound 5 times
  // if win/lose the 5, button to replay
  // have running score
  for (let i = 0; i < 5; i++) {
    getComputerChoice()
    playRound(userInput, comInput)
  }
}
