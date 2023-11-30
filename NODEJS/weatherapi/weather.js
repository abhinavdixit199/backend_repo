const http= require("http");
const fs= require("fs");
var requests= require("requests");

const homeFile = fs.readFileSync("index.html","utf-8");
const replaceVal = (tempVal, orgVal) => {
    let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);
    temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min);// why temperature is written instead of tempVal
    temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max);
    temperature = temperature.replace("{%location%}", orgVal.name);
    temperature = temperature.replace("{%country%}", orgVal.sys.country);
    temperature = temperature.replace("{%tempstatus%}", orgVal.weather[0].main);
  
    return temperature;
  };
const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        requests("https://api.openweathermap.org/data/2.5/weather?q=Noida&appid=9d155ba5cb06847b3efbdbb9b2144407")
        .on("data", (chunk)=>{
            const objdata=JSON.parse(chunk);
            const arrdata=[objdata]
            // console.log(arrdata);
            const realTimeData = arrdata.map((val) => replaceVal(homeFile, val)).join("");
            console.log(realTimeData);
          res.write(realTimeData);
        })
        .on("end", (err)=>{
            if(err) return console.log("connection close due to errors",err);
            res.end();
        });
    }
    else{
        res.end("File not found");
    }
});
server.listen(8000,"127.0.0.1");