const path=require("path");
// console.log(path.extname("C:\Users\PRANJAL DIXIT\Desktop\WEB DEV\NODEJS\os module\index.js"))
// console.log(path.dirname("C:\Users\PRANJAL DIXIT\Desktop\WEB DEV\NODEJS\os module\index.js"))
const mypath=path.parse("C:\Users\PRANJAL DIXIT\Desktop\WEB DEV\NODEJS\os module\index.js")// this line reutrns an object
// console.log("SAFSD")
console.log(mypath)
// console.log(mypath.name)
// console.log(path.parse("C:\Users\PRANJAL DIXIT\Desktop\WEB DEV\NODEJS\os module\index.js"))