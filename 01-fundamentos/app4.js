console.log('1') // 1

setTimeout(() => {
  console.log('5') // 5
}, 3000)

setTimeout(() => {
  console.log('3') // 3
}, 10)

setTimeout(() => {
  console.log('4') // 4
}, 0)

console.log('2') // 2
