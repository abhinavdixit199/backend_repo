
const fs = require("fs");
const http = require( "http");
const server = http.createServer();


server.on("request", (req, res) => {
    // var fs = require("fs");
    // fs.readFile("input.txt", (err, data) => {
    //     if(err) return console.error(err);
    //     res.end(data.toString());
    // });
    
// const rstream = fs.createReadStream("input.txt");
// rstream.on("data", (chunkdata) => {
// res.write(chunkdata);
// });                                          // this is another way of doing it
//                                    // in this instead of whole data being loaded at once you go chunk by chunk the file needs to be large for us to see however it happens

// rstream.on("end", () => {
// res.end();
// });

const rstream = fs.createReadStream("input.txt");
rstream.pipe (res);                            // this is third way of doing it  learn more about it

});
server.listen(8000,"127.0.0.1");



