const fs = require('fs')

//readFile(filename,cb)
fs.readFile('a.txt', (err, data) => {
    if (err) {
        console.log('读取失败')
    } else {
        console.log(data)
    }
})