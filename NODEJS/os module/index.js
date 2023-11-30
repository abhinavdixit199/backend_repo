const os = require("os");

console.log(os.arch());
const la= os.totalmem();
console.log(`${la/1024/1024/1024}`);
console.log(os.machine());
console.log(os.version());