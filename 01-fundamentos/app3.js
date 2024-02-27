const fs = require('fs')

// read file synchronous
const content = fs.readFileSync('README.md', 'utf-8')

const wordCount = content.split(' ').length
const reactWordCount = content.match(/react/gi ?? []).length

// const reactWordCount = content
//   .split(' ')
//   .filter(word => word.toLowerCase().includes('react')).length

console.log(`Palabras: ${wordCount}`)
console.log(`Palabras React: ${reactWordCount}`)
