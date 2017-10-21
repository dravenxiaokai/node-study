const http = require('http')

const server = http.createServer((req, res) => {
    // console.log('someone come in')
    switch (req.url) {
        case '/1.html':
            res.write('1111')
            break
        case '/2.html':
            res.write('2222')
            break
        default:
            res.write('404')
            break
    }
    res.end()
})

//监听
server.listen(8000, 'localhost', () => {
    console.log('listening 8000')
})