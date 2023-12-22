// use library to get user input
const prompt = require('prompt-sync')()

function compare(num1, num2) {
  let res = false
  if (num1 < num2) {
    console.log('lower')
  } else if (num1 > num2) {
    console.log('higher')
  } else {
    res = true
  }
  return res
}

const answer = 6
let guessed = false

do {
  const input = prompt('Guess a number (0-9): ')
  const inputNum = Number(input)
  guessed = compare(inputNum, answer)
} while (!guessed)

console.log('You win!')
