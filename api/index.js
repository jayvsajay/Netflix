const express = require('express');
const db = require('./Db');
const cors=require('cors')
const app = express();
const PORT = 3200;
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");
const dotenv = require('dotenv');
dotenv.config();
db();
app.use(cors())
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);
app.listen(PORT,(err)=>{
    console.log(`Working at ${PORT}`)
})