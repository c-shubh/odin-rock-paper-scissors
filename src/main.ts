type Move = "rock" | "paper" | "scissors";
const MOVE_LIST: Move[] = ["rock", "paper", "scissors"];

/* Global element references */
const rockBtn = <HTMLButtonElement>document.getElementById("rock-button")!;
const paperBtn = <HTMLButtonElement>document.getElementById("paper-button")!;
const scissorsBtn = <HTMLButtonElement>(
  document.getElementById("scissors-button")!
);
const computerMoveLbl = document.getElementById("computer-move")!;
const roundResultLbl = document.getElementById("round-result")!;

[rockBtn, paperBtn, scissorsBtn].forEach((btn) =>
  btn.addEventListener("click", moveBtnClickEventListener, { once: true })
);

/* Functions */

function getRandomIntInclusive(min: number, max: number) {
  /* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive */
  min = Math.ceil(min);
  max = Math.floor(max);
  //The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getComputerChoice(): Move {
  return MOVE_LIST[getRandomIntInclusive(0, MOVE_LIST.length - 1)];
}

function capitalize(word: string): string {
  if (!word) return word;
  return word[0].toUpperCase() + word.slice(1, word.length);
}

function playRound(
  playerSelection: Move,
  computerSelection: Move
): "player" | "computer" | "tie" {
  if (playerSelection === computerSelection) return "tie";

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  )
    return "player";

  return "computer";
}

function getPlayerSelection(): Move {
  let ans: any;

  // ask for input until the input is valid
  while (true) {
    ans = prompt("Play your move: Rock, Paper, Scissors");
    // if ans is undefined/null/empty string
    if (!ans) continue;
    if (MOVE_LIST.includes(ans.toLowerCase())) break;
  }

  return ans.toLowerCase();
}

function game() {
  let playerWinCount = 0;
  let computerWinCount = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection: Move = getPlayerSelection();
    const computerSelection: Move = getComputerChoice();
    switch (playRound(playerSelection, computerSelection)) {
      case "player":
        playerWinCount++;
        alert(
          `${capitalize(playerSelection)} beats ${capitalize(
            computerSelection
          )}. You scored a point!`
        );
        break;
      case "computer":
        computerWinCount++;
        alert(
          `${capitalize(computerSelection)} beats ${capitalize(
            playerSelection
          )}. Computer scored a point!`
        );
        break;
      case "tie":
        alert("It was a tie.");
        break;
    }
  }
  if (playerWinCount > computerWinCount) alert("Yay! You won!");
  else if (computerWinCount > playerWinCount)
    alert("You lost, computer won :(");
  else alert("It's a tie!");
}

function moveBtnClickEventListener(e: Event) {
  const button = <HTMLButtonElement>e.target;

  // disable other buttons i.e. except the one pressed
  [rockBtn, paperBtn, scissorsBtn].forEach((btn) => {
    if (btn != button) btn.disabled = true;
  });

  // change button color
  button.style.backgroundColor = "hsl(189deg 100% 75%)";

  // make labels visible
  computerMoveLbl.classList.remove("visibility-hidden");
  roundResultLbl.classList.remove("visibility-hidden");
  computerMoveLbl.style.opacity = "100";
  setTimeout(() => {
    roundResultLbl.style.opacity = "100";
  }, 0.5 * 1000);
}

export {};
