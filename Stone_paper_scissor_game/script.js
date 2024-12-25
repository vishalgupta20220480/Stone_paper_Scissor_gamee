let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

// Update IDs to match HTML
const userScorePara = document.querySelector("#user_score");
const compScorePara = document.querySelector("#comp_score");

// Function to generate computer choice
const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"]; // Match "scissor" with HTML ID
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

// Function to handle draw scenario
const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

// Function to display the winner
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

// Main game logic
const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    // Draw scenario
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "scissor";
    } else if (userChoice === "paper") {
      userWin = compChoice === "rock";
    } else {
      userWin = compChoice === "paper";
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

// Add event listeners to each choice
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
