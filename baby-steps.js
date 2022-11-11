function sum() {
  let sum = 0
  const arr = process.argv.slice(2)
  for (const num of arr) {
    sum += Number(num)
  }
  console.log(sum)
}

sum()
