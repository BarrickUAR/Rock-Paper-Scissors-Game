let scissors = document.querySelector(".scissors")
let paper = document.querySelector(".paper")
let rock = document.querySelector(".rock");
let scoreDisplay = document.querySelector(".scoreboard h3");
let playerScore = 0;
let computerScore = 0;
let game = document.querySelector(".game");
let gamePick = document.querySelector(".game-pick");
let playerChoice = document.querySelector("#playerChoice");
let cpuChoice = document.querySelector("#cpuChoice");
let choices = ["rock", "paper", "scissors"];
let gameResult = document.querySelector("#gameResult");
let playagain = document.querySelector(".playagain");



function oyna() {

  let randomchoice = Math.round(Math.random() * 2);
  let computerchoice = choices[randomchoice];
  let personChoice = this.className;
  // console.log(this.className, computerchoice);
  game.classList.add('hidden');
  gamePick.classList.add('active');
  playerChoice.innerHTML = `<img src="assets/img/${personChoice}.svg">`;
  cpuChoice.innerHTML = `<img src="assets/img/${computerchoice}.svg">`;
  if (personChoice === computerchoice) {
    gameResult.innerText = "Berabere";
  } else if (
    personChoice === "rock" && computerchoice === "scissors" ||
    personChoice === "paper" && computerchoice === "rock" ||
    personChoice === "scissors" && computerchoice === "paper"
  ) {

    gameResult.innerText = "Kazandın";
    playerScore++;
    scoreDisplay.innerText = playerScore;
  } else {
    gameResult.innerText = "Kaybettin";

  }
}

scissors.addEventListener('click', oyna);
paper.addEventListener('click', oyna);
rock.addEventListener('click', oyna);

function playAgain(e) {
  e.preventDefault();
  game.classList.remove('hidden');
  gamePick.classList.remove('active');
}
playagain.addEventListener('click', playAgain);

