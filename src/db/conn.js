const mongoose = require("mongoose");
//  it will return a promise 
mongoose.connect("mongodb://localhost:27017/students-api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
    console.log("Connection is Successfull");
}).catch((error)=>{
    console.log(error);
})
