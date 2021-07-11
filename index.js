const http = require('http');

const hostname = 'localhost';
const port = 3000; //cong mac dinh

//set up server
const server = http.createServer((req,res) => {
    console.log(req.headers);

    res.statusCode = 200; //trang thai code ok
    res.setHeader('Content-Type', 'text/html'); // header duoc set up de thong bao rang, format file gui lai co dang html
    res.end('<html><body><h1> Hello, world </h1></body></html>') // phan hoi cuoi cung la toan bo noi dung hien thi
})

// khoi dong may chu

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
});