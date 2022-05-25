const mongoose = require("mongoose");

const DB = "mongodb+srv://jayanta:amazon69@cluster0.44evi.mongodb.net/Amazonweb?retryWrites=true&w=majority";

mongoose.connect(DB).then(()=>console.log("database connected")).catch((error)=>console.log("error" + error.message))