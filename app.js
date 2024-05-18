const express=require('express')
const cors=require('cors')
const PropertyRoute=require('./Routes/properties_route')
const UsersRoute=require('./Routes/users_route')
const bodyParser = require("body-parser");
require("dotenv").config();
const app=express()
app.use(bodyParser.json());
app.use(cors())
app.use(PropertyRoute)
app.use(UsersRoute);
app.listen(4000,(res)=>{
    console.log("Server Run 4000 port")
})