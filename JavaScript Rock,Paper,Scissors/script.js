// Declare Variables by using DOM
let human = document.querySelector(".human");
let computer = document.querySelector(".computer");
let win = document.querySelector(".win");
let lose = document.querySelector(".lose");
let draw = document.querySelector(".draw");

// Play function
function play(x) {
  let choice = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * choice.length);
  let computerChoice = choice[index];
  let result;

  // determine the result
  if (x == computerChoice) {
    result = "draw";
  } else if (
    (x == "rock" && computerChoice == "scissors") ||
    (x == "paper" && computerChoice == "rock") ||
    (x == "scissors" && computerChoice == "paper")
  ) {
    result = "win";
  } else{
    result = "lose";
  }

  // Output Choice
  human.innerHTML = "Your Choice: " + x.toUpperCase();
  computer.innerHTML = "Computer Choice: " + computerChoice.toUpperCase();

  // Output Result
  if (result == "win") {
    win.classList.remove("hidden");
    lose.classList.add("hidden");
    draw.classList.add("hidden");
  } else if (result == "lose") {
    draw.classList.add("hidden");
    win.classList.add("hidden");
    lose.classList.remove("hidden");
  } else if (result == "draw") {
    draw.classList.remove("hidden");
    win.classList.add("hidden");
    lose.classList.add("hidden");
  }
}
