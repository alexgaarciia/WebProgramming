const http = require("http");
const server = http.createServer((req, res) => {
    if (req.method === "GET") {
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("Received a GET request.");
    } else if (req.method === "POST"){
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("Received a POST request.");
    } else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end("404 Not Found");
    }
})