let getUserChoice = function (userInput) {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Error...please enter 'rock', 'paper', or 'scissors'");
  }
};

let getComputerChoice = function () {
  getComputerChoice = Math.floor(Math.random() * 3);
  if (getComputerChoice === 0) {
    return "rock";
  } else if (getComputerChoice === 1) {
    return "paper";
  } else if (getComputerChoice === 2) {
    return "scissors";
  }
};

let determineWinner = function (userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "The game was a tie!";
  }

  if (userChoice === "bomb") {
    return "The user has won!";
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer has won!";
    } else {
      return "The user has won!";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "rock") {
      return "The user has won!";
    } else {
      return "The computer has won";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The computer has won!";
    } else {
      return "The user has won!";
    }
  }
};

let playGame = function () {
  let userChoice = getUserChoice("bomb");
  let computerChoice = getComputerChoice();
  console.log("User choice: " + userChoice);
  console.log("Computer choice: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
