type Weapon = "rock" | "paper" | "scissors";
const WEAPON_LIST: Weapon[] = ["rock", "paper", "scissors"];

/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive */
function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  //The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getComputerChoice(): Weapon {
  return WEAPON_LIST[getRandomIntInclusive(0, WEAPON_LIST.length - 1)];
}

function capitalize(word: string): string {
  if (!word) return word;
  return word[0].toUpperCase() + word.slice(1, word.length);
}

function playRound(
  playerSelection: Weapon,
  computerSelection: Weapon
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

function getPlayerSelection(): Weapon {
  let ans: any;

  // ask for input until the input is valid
  while (true) {
    ans = prompt("Play your move: Rock, Paper, Scissors");
    // if ans is undefined/null/empty string
    if (!ans) continue;
    if (WEAPON_LIST.includes(ans.toLowerCase())) break;
  }

  return ans.toLowerCase();
}

function game() {
  let playerWinCount = 0;
  let computerWinCount = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection: Weapon = getPlayerSelection();
    const computerSelection: Weapon = getComputerChoice();
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

function main() {
  game();
}

main();

export {};
