const fs = require('fs')

// read file synchronous
const data = fs.readFileSync('README.md', 'utf-8')

const newData = data.replace(/React/gi, 'Angular')

// create a new file in the root folder
fs.writeFileSync('README-angular.md', newData)
