const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/studentsapi",{
     useNewUrlParser: true, 
     useUnifiedTopology: true,
    useUnifiedTopology:true
 }) .then(() => console.log("connection to mongoose is successful"))
    .catch((err) => console.log(err));


