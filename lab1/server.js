const http = require('http')
const fs = require('fs')

const server = http.createServer()

// server.on('request', (req, res) => {
//     res.setHeader('feiker-test', 'auto')
//     res.end('hello world')
// })

server.on('request', (req, res) => {
    res.writeHeader(200, {
        'Content-Type': 'image/png'
    })
    fs.createReadStream('../assets/test.jpg').pipe(res)
})

server.listen(3000, () => {
    console.log('server in http://localhost:3000')
})