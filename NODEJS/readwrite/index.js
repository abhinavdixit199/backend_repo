const fs = require("fs");
fs.appendFileSync('read.txt',"Welcome to Node js");

let x=fs.readFileSync('read.txt',"utf-8")// if utf 8 is used then there is no use of the 6 line i.e y=x.tostring()
let y=x.toString();
console.log(x);