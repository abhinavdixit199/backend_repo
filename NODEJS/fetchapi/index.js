const http = require("http");
const fs=require("fs")
const server = http.createServer((req, res) => {
    const objdata=fs.readFileSync('./testapi.json',"utf-8")
    const apidata=JSON.parse(objdata);
      
    if (req.url == "/") {
        res.end("Hello from the home sides");
    }
    else if (req.url == "/about") {
        res.end("Hello from the About US sides");
    }
    else if (req.url == "/contact") {
        res.end("Hello from the contact US sides");
    }
    else if (req.url == "/userap") {
        
        res.end(apidata[0].query);
    }
    else {
        res.writeHead(404,{"Content-type" :"text/html"})
        res.end("<h1>404 error pages. Page doesn't exist</h1>");
    }
});
server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the port")
});



// this is correct no  need to check this
// const http = require("http");
// const fs=require("fs")
// const server = http.createServer((req, res) => {
    
//     if (req.url == "/") {
//         res.end("Hello from the home sides");
//     }
//     else if (req.url == "/about") {
//         res.end("Hello from the About US sides");
//     }
//     else if (req.url == "/contact") {
//         res.end("Hello from the contact US sides");
//     }
//     else if (req.url == "/userap") {
//         fs.readFile('testapi.json',"utf-8",(err,data)=>{
//             console.log(data);
//         })
//         res.end("Hello from th USERapi sides");
//     }
//     else {
//         res.writeHead(404,{"Content-type" :"text/html"})
//         res.end("<h1>404 error pages. Page doesn't exist</h1>");
//     }
// });
// server.listen(8000, "127.0.0.1", () => {
//     console.log("listening to the port")
// });