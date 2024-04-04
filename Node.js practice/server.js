const http = require("http");
const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.write("Hello, <b>World</b>")
    response.end()
});

// Check if the server is running
// 3000 is the port
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});