const ejs = require('ejs')

ejs.renderFile('./1.ejs', {name:'draven'}, function (err, data) {
    if (err) {
        console.log('失败')
    } else {
        console.log(data)
    }
})