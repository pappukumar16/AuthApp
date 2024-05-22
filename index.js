const express = require("express")
const app = express()
require("dotenv").config()
const port = process.env.PORT||4000;


app.use(express.json())

//mounting 
const user = require("./router/user");
app.use("/api/v1",user)



app.listen(port, ()=>{
    console.log("App is listen on port no " + port);
})

 require("./config/database").dbconnection()

app.get("/",(req,res)=>{
    res.send(`<h1>This is home page </h1>`)
})