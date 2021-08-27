const express = require ("express");
const connection = require('./Server/Database/Connection');
const dotenv = require("dotenv");
const userAuth = require("./Server/Routes/Auth");


const app = express();
dotenv.config();
app.use(express.json());

connection();

app.use("/api/auth",userAuth)

app.listen(5000,()=>{
    console.log("server is up and running on 5000");
})