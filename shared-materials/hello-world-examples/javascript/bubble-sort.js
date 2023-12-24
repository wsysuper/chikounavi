const swap = (arr, i, j) => {
  const tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}

const bubbleSort = (a) => {
  for (let end = a.length - 1; end >= 1; end--) {
    for (let j = 0; j < end; j++) {
      if (a[j] > a[j + 1]) {
        swap(a, j, j + 1)
      }
    }
    console.log(`${nums}`)
  }
}

const main = () => {
  nums = [6, 3, 2, 4, 5, 1]
  console.log(`before: ${nums}`)
  bubbleSort(nums)
  console.log(`after:  ${nums}`)
}

main()
