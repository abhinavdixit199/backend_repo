const EventEmitter = require("events");/*here Eventemitter is a class not an module*/
const event = new EventEmitter();//*so event is a object of class*
event.on("sayMyName", () => {
    console.log("your name is abhinav");
});
event.on("sayMyName", () => {
    console.log("your name is dixit");
});// can call multiple function on same events also can call multiple function of different events just like the case below
event.on("checkPage", (sc, msg) => {
    console.log(`status code is ${sc} and the page is ${msg}`);
});
event.emit("sayMyName");
event.emit("checkPage", 200, "ok");// you can also pass parameter for function in events code




//seems like two events cannot be called at once
