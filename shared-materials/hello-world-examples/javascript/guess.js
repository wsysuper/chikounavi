// use library to get user input
const prompt = require("prompt-sync")({ sigint: true });

// output num1 is lower or higher than num2
// returns if num1 and num2 are equal
function compare(num1, num2) {
  let res = false;
  if (num1 < num2) {
    console.log(`${num1} is lower`);
  } else if (num1 > num2) {
    console.log(`${num1} is higher`);
  } else {
    res = true;
  }
  return res;
}

function main() {
  const answer = Math.floor(Math.random() * 100);
  const history = [];
  let guessed = false;
  let score = 10;
  console.log("Your inital score is:", score, "\n");

  do {
    const input = prompt("Guess a number (0-99): ");
    const inputNum = Number(input);
    history.push(inputNum);
    guessed = compare(inputNum, answer);
    console.log(`guessed history: ${history}`);
    if (!guessed) {
      score -= 1;
    }
    console.log("Your score:", score, "\n");
    if (score === 0) {
      break;
    }
  } while (!guessed);

  if (guessed) {
    console.log(`You win! Answer:${answer} Score:${score}`);
  } else {
    console.log(`You lose! Answer:${answer} Score:${score}`);
  }
}

main();
