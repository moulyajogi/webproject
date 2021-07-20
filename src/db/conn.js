const mongoose = require("mongoose");



//creating db
mongoose.connect("mongodb://localhost:27017/moulyadynamic",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("succesfull");

}).catch((error)=>
{
    console.log(error);
})