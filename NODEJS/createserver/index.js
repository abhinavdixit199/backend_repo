const http = require("http");
const server = http.createServer((req, res) => {
    // res.end("Hello from the others sides");\
    
    // console.log(req.url)
    if (req.url == "/") {
        res.end("Hello from the home sides");
    }
    else if (req.url == "/about") {
        res.end("Hello from the About US sides");
    }
    else if (req.url == "/contact") {
        res.end("Hello from the contactUS sides");
    }
    else {
        res.writeHead(404,{"Content-type" :"text/html"})
        res.end("<h1>404 error pages. Page doesn't exist</h1>");
    }
});
server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the port")
});