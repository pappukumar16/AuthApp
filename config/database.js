const mongoose = require("mongoose")
require("dotenv").config();

exports.dbconnection=(req,res)=>{

    const basseurl = process.env.DATABASE_URL;

 
    mongoose.connect(basseurl,{
        useNewUrlParser: true, 
        useUnifiedTopology: true
    })

    .then( ()=> console.log("DATA BASE connection successful"))

    .catch( (err)=>{
        console.log("DB connection issu");
        console.log(err);
        process.exit(1);
    })


 

}

