const ejs = require('ejs')
const fs = require('fs')

var str = ''

ejs.renderFile('./3.ejs', { name: 'draven' }, function (err, data) {
    if (err) {
        console.log('失败')
    } else {
        str += data

        console.log(data)
    }
})

fs.writeFile('./build/3.html', str, (err) => {
    if (err) {
        console.log('写入失败')
    } else {
        console.log('写入成功')
    }
})