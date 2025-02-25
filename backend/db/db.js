const mongoose = require("mongoose")

const URI = process.env.MONGODB_URI


const connectDb = async () => {
    try {
        await mongoose.connect(URI)
        console.log("CONNECTION SUCCESSFUL TO DB");
    } catch (error) {
        console.error("database connection failed")
        process.exit(0)
    }
}

module.exports = connectDb;