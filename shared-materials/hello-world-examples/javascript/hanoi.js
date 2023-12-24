const hanoi = (num, source, temp, target) => {
  if (num === 1) {
    console.log(`${source}->${target}`)
    return 1
  }
  let count = 0
  count += hanoi(num - 1, source, target, temp)
  console.log(`${source}->${target}`)
  count += 1
  count += hanoi(num - 1, temp, source, target)
  return count
}

const main = () => {
  const num = 4
  const count = hanoi(num, 'a', 'b', 'c')
  console.log(`Moving ${num} plates needs ${count} steps.`)
}

main()
