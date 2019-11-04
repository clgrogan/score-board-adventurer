const main = () => {
  console.log('Print this on page load.')
}

// Define and assign global variables
const incrementAmt = 1
let team1Score = 0
let team2Score = 0
let quarterNumber = 1

//Initialize Scores
document.querySelector('.team-1-score').textContent = team1Score
document.querySelector('.team-2-score').textContent = team2Score
document.querySelector('.quarter-number').textContent = quarterNumber

// Update Team's Name When Button Clicked
const updateTeam1Name = () => {
  console.log('clicked update team ONE NAME button')
  const team1Name = document.querySelector('.team-1-input').value
  console.log(team1Name)
  document.querySelector('.team-1-name').textContent = team1Name
}
const updateTeam2Name = () => {
  console.log('clicked update team TWO button')
  const team2Name = document.querySelector('.team-2-input').value
  console.log(team2Name)
  document.querySelector('.team-2-name').textContent = team2Name
}

// Update Teams' Score When Add Button Clicked
const addTeam1Score = () => {
  console.log('clicked update team 1 add S C O R E button')
  team1Score = team1Score + incrementAmt
  document.querySelector('.team-1-score').textContent = team1Score
}
const addTeam2Score = () => {
  console.log('clicked update team TWO add S C O R E button ')
  team2Score = team2Score + incrementAmt
  document.querySelector('.team-2-score').textContent = team2Score
}

// Update Teams' Score When Subtract Button Clicked
const subtractTeam1Score = () => {
  console.log('clicked update team 1 subtract S C O R E button')
  team1Score = team1Score - incrementAmt
  document.querySelector('.team-1-score').textContent = team1Score
}
const subtractTeam2Score = () => {
  console.log('clicked update team TWO subtract S C O R E button ')
  team2Score = team2Score - incrementAmt
  document.querySelector('.team-2-score').textContent = team2Score
}

// Update Game Quarters
const subtractQuarter = () => {
  console.log('clicked subtract quarter button')
  quarterNumber = quarterNumber - 1
  document.querySelector('.quarter-number').textContent = quarterNumber
}
const addQuarter = () => {
  console.log('clicked subtract quarter button')
  quarterNumber = quarterNumber + 1
  document.querySelector('.quarter-number').textContent = quarterNumber
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
