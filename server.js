const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    var filename = './www' + req.url

    fs.readFile(filename, (err, data) => {
        if (err) {
            res.write('404')
            res.end()
        } else {
            res.write(data)
            res.end()
        }
    })
})

server.listen(8000,'localhost',()=>{
    console.log('listening on port 8000')
})