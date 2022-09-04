const getUserChoice = function (userInput) {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Error: Please enter 'rock', 'paper', or 'scissors'");
    return userInput;
  }
};

const getComputerChoice = function () {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else if (randomNumber === 2) {
    return "scissors";
  }
};

const determineWinner = function (userChoice, computerChoice) {
  if (userChoice === "bomb") {
    return "The user has won!";
  }
  
  if (userChoice === computerChoice) {
    return "The game was a tie!";
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

const playGame = function (userInput) {
  const userChoice = getUserChoice(userInput);
  const computerChoice = getComputerChoice();
  console.log("User choice: " + userChoice);
  console.log("Computer choice: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

var userInput = prompt();

playGame(userInput);
