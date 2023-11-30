

const bioData ={ name:"vinod",
age: 26,
 channel: "thapa technical"
};

const jsData = JSON.stringify(bioData);
console.log(jsData)
const objData = JSON.parse(jsData);
console.log(objData);

//not written by me just copied simple file system operations
// const fs = require("fs");
//  const bioData = {...
// };

// const jsonData = JSON.stringify(bioData);
// fs.writeFile("json1.json", jsonData, (err) ⇒ {
// console.log("done");
// });
// fs.readFile("json1.json", "utf-8", (err, data) {
// const orgData = JSON.parse(data);
// console.log(data);
// console.log(orgData);
// });