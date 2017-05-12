var fs = require('fs');


console.log('starting point...')
// var contents = fs.readFileSync('files/node.text')
// console.log('Contents: ' + contents)

fs.readFile('files/node.text', (err, contents)=>{
    console.log('Contents: ' + contents)
})

console.log('ending point...')  