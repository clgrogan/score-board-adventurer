const main = () => {
  console.log('Print this on page load.')
}

// Define and assign global variables
const incrementAmt = 1
const maxScore = 3
const initTeam1Name = 'Team 1'
const initTeam2Name = 'Team 2'
const initMyScoreBoard = 'My Score Board'
let myScoreBoard = initMyScoreBoard
let team1Score = 0
let team2Score = 0
let quarterNumber = 1
let winner
let team1Name = initTeam1Name
let team2Name = initTeam2Name

// Initialize Display Values
document.querySelector('.team-1-score').textContent = team1Score
document.querySelector('.team-2-score').textContent = team2Score
document.querySelector('.quarter-number').textContent = quarterNumber
document.querySelector('.h1-my-score-board').textContent = myScoreBoard

// Update Team's Name When Button Clicked
const updateTeam1Name = () => {
  console.log('clicked update team ONE NAME button')
  team1Name = document.querySelector('.team-1-input').value
  console.log(team1Name)
  document.querySelector('.team-1-name').textContent = team1Name
}
const updateTeam2Name = () => {
  console.log('clicked update team TWO button')
  team2Name = document.querySelector('.team-2-input').value
  console.log(team2Name)
  document.querySelector('.team-2-name').textContent = team2Name
}

// Functions - Update Teams' Score When Add Button Clicked
const addTeam1Score = () => {
  if (team1Score < maxScore) {
    console.log('clicked update team 1 add S C O R E button')
    team1Score = team1Score + incrementAmt
    document.querySelector('.team-1-score').textContent = team1Score
  } else {
    winner = team1Name
    teamWins()
  }
}
const addTeam2Score = () => {
  console.log('clicked update team TWO add S C O R E button ')
  if (team2Score < maxScore) {
    team2Score = team2Score + incrementAmt
    document.querySelector('.team-2-score').textContent = team2Score
  } else {
    winner = team2Name
    teamWins()
  }
}

// Functions - Update Teams' Score When Subtract Button Clicked
const subtractTeam1Score = () => {
  if (team1Score > 0) {
    console.log('clicked update team 1 subtract S C O R E button')
    team1Score = team1Score - incrementAmt
    document.querySelector('.team-1-score').textContent = team1Score
  }
}
const subtractTeam2Score = () => {
  if (team2Score > 0) {
    console.log('clicked update team TWO subtract S C O R E button ')
    team2Score = team2Score - incrementAmt
    document.querySelector('.team-2-score').textContent = team2Score
  }
}

// Functions Update Game Quarters Functions
const subtractQuarter = () => {
  if (quarterNumber > 1) {
    console.log('clicked subtract quarter button')
    quarterNumber = quarterNumber - 1
    document.querySelector('.quarter-number').textContent = quarterNumber
  }
}
const addQuarter = () => {
  console.log('clicked subtract quarter button')
  quarterNumber = quarterNumber + 1
  document.querySelector('.quarter-number').textContent = quarterNumber
}

// Functions Winning and
const teamWins = () => {
  // Display Winner
  myScoreBoard = winner + ' WINS!!!'
  console.log('Executed teamWins function. ', winner, myScoreBoard)
  document.querySelector('.h1-my-score-board').textContent = myScoreBoard

  // Disable Buttons
  document.querySelector('.team-1-add-1-button').disabled = true
  document.querySelector('.team-1-subtract-1-button').disabled = true
  document.querySelector('.team-2-add-1-button').disabled = true
  document.querySelector('.team-2-subtract-1-button').disabled = true
  document.querySelector('.update-team-1-name').disabled = true
  document.querySelector('.update-team-2-name').disabled = true
  document.querySelector('.subtract-qtr-btn').disabled = true
  document.querySelector('.add-qtr-btn').disabled = true
}

// Initialize or reset
const resetAll = () => {
  // Initialize Global Variables
  myScoreBoard = initMyScoreBoard
  team1Score = 0
  team2Score = 0
  quarterNumber = 1
  winner = ''
  team1Name = initTeam1Name
  team2Name = initTeam2Name

  // Reset scoreboard
  document.querySelector('.team-1-score').textContent = team1Score
  document.querySelector('.team-2-score').textContent = team2Score
  document.querySelector('.quarter-number').textContent = quarterNumber
  document.querySelector('.h1-my-score-board').textContent = myScoreBoard
  document.querySelector('.team-1-name').textContent = team1Name
  document.querySelector('.team-1-input').value = ''
  document.querySelector('.team-2-name').textContent = team2Name
  document.querySelector('.team-2-input').value = ''

  // Enable Buttons
  document.querySelector('.team-1-add-1-button').disabled = false
  document.querySelector('.team-1-subtract-1-button').disabled = false
  document.querySelector('.team-2-add-1-button').disabled = false
  document.querySelector('.team-2-subtract-1-button').disabled = false
  document.querySelector('.update-team-1-name').disabled = false
  document.querySelector('.update-team-2-name').disabled = false
  document.querySelector('.subtract-qtr-btn').disabled = false
  document.querySelector('.add-qtr-btn').disabled = false
}

// Add listeners
document.addEventListener('DOMContentLoaded', main)
document
  .querySelector('.update-team-1-name')
  .addEventListener('click', updateTeam1Name)

document
  .querySelector('.update-team-2-name')
  .addEventListener('click', updateTeam2Name)

document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', addTeam1Score)

document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', addTeam2Score)

document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', subtractTeam1Score)

document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', subtractTeam2Score)

document
  .querySelector('.subtract-qtr-btn')
  .addEventListener('click', subtractQuarter)

document.querySelector('.add-qtr-btn').addEventListener('click', addQuarter)

document.querySelector('.reset-button').addEventListener('click', resetAll)
