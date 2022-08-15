import party from "party-js";

type Move = "rock" | "paper" | "scissors";
const MOVE_LIST: Move[] = ["rock", "paper", "scissors"];

/* Global element references */
const roundTitleLbl = document.getElementById("round-title")!;
const scoreTitleLbl = document.getElementById("score-title")!;
const rockBtn = <HTMLButtonElement>document.getElementById("rock-button")!;
const paperBtn = <HTMLButtonElement>document.getElementById("paper-button")!;
const scissorsBtn = <HTMLButtonElement>(
  document.getElementById("scissors-button")!
);
const computerMoveLbl = document.getElementById("computer-move")!;
const roundResultLbl = document.getElementById("round-result")!;
const playerScoreLbl = document.getElementById("player-score")!;
const computerScoreLbl = document.getElementById("computer-score")!;

const Game = {
  playerScore: 0,
  computerScore: 0,
  round: 1,
  maxRounds: 5,
};

// add player move event listeners
[rockBtn, paperBtn, scissorsBtn].forEach((btn) => {
  btn.addEventListener("click", playRound, { once: true });
});
deHighlightPlayerMove();
setRoundLabel();

/* Functions */

function getRandomIntInclusive(min: number, max: number) {
  /* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive */
  min = Math.ceil(min);
  max = Math.floor(max);
  //The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getComputerMove(): Move {
  return MOVE_LIST[getRandomIntInclusive(0, MOVE_LIST.length - 1)];
}

function capitalize(word: string): string {
  if (!word) return word;
  return word[0].toUpperCase() + word.slice(1, word.length);
}

function decideRoundWinner(
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

function decideGameWinner(): "player" | "computer" | "tie" {
  if (Game.playerScore > Game.computerScore) return "player";
  else if (Game.computerScore > Game.playerScore) return "computer";
  else return "tie";
}

function getPlayerMove(e: Event): Move | undefined {
  switch (e.target) {
    case rockBtn:
      return "rock";
    case paperBtn:
      return "paper";
    case scissorsBtn:
      return "scissors";
  }
  return;
}

function playRound(e: Event) {
  setRoundLabel();
  highlightPlayerMove(e);
  const playerMove: Move = getPlayerMove(e)!;
  const computerMove: Move = getComputerMove();
  const winner = decideRoundWinner(playerMove, computerMove);
  setLabel(computerMoveLbl, `Computer chose ${capitalize(computerMove)}`);
  switch (winner) {
    case "player":
      Game.playerScore++;
      setLabel(roundResultLbl, "You won this round!");
      break;
    case "computer":
      Game.computerScore++;
      setLabel(roundResultLbl, "Computer won this round!");
      break;
    case "tie":
      setLabel(roundResultLbl, "It's a tie!");
      break;
  }
  console.log(Game.round);

  const currRound = Game.round;
  setTimeout(() => {
    showLabels();
    setTimeout(() => {
      setScoreLabel();
      if (currRound === Game.maxRounds) {
        switch (decideGameWinner()) {
          case "player":
            setLabel(scoreTitleLbl, "You Won!");
            party.confetti(scoreTitleLbl, {
              count: 40,
              spread: 32,
              size: 1,
            });
            break;
          case "computer":
            setLabel(scoreTitleLbl, "Computer Won!");
            break;
          case "tie":
            setLabel(scoreTitleLbl, "It's a tie");
            break;
        }
      }
    }, 0.8 * 1000);
  }, 0.5 * 1000);

  if (currRound !== Game.maxRounds) {
    Game.round++;

    setTimeout(() => {
      resetRound();
    }, 3 * 1000);
  }
}

function resetRound() {
  // add player move event listeners
  [rockBtn, paperBtn, scissorsBtn].forEach((btn) => {
    btn.addEventListener("click", playRound, { once: true });
  });
  deHighlightPlayerMove();
  setRoundLabel();
  hideLabels();
}

function setRoundLabel() {
  setLabel(roundTitleLbl, `Round ${Game.round}`);
}

function setScoreLabel() {
  setLabel(playerScoreLbl, `Player: ${Game.playerScore}`);
  setLabel(computerScoreLbl, `Computer: ${Game.computerScore}`);
}

function highlightPlayerMove(e: Event) {
  const button = <HTMLButtonElement>e.target;
  // disable other buttons i.e. except the one pressed
  [rockBtn, paperBtn, scissorsBtn].forEach((btn) => {
    if (btn != button) btn.disabled = true;
  });

  // change button color
  button.style.backgroundColor = "hsl(189deg 100% 75%)";
}

function showLabels() {
  // make labels visible
  [computerMoveLbl, roundResultLbl].forEach((label) =>
    label.classList.remove("visibility-hidden")
  );

  // fade in labels
  computerMoveLbl.style.opacity = "100";
  setTimeout(() => {
    roundResultLbl.style.opacity = "100";
  }, 0.5 * 1000);
}

function hideLabels() {
  [computerMoveLbl, roundResultLbl].forEach((label) => {
    label.classList.add("visibility-hidden");
    label.style.opacity = "0";
  });
}

function setLabel(label: HTMLSpanElement, textContent: string) {
  label.textContent = textContent;
}

function deHighlightPlayerMove() {
  [rockBtn, paperBtn, scissorsBtn].forEach((btn) => {
    // enable all buttons
    btn.disabled = false;
    // revert button color to initial
    btn.style.backgroundColor = "initial";
  });
}

export {};
