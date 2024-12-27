const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
const express = require('express');
const app = express();
const connectDb = require('./db/db')
const userRoutes = require("./routes/user.routes")
const captainRoutes = require("./routes/captain.routes")


connectDb()
app.use(cors())


app.get('/', (req, res) => {
    res.send('hello world');
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/users", userRoutes)
app.use("/captains", captainRoutes)


// app.use("")


module.exports = app;