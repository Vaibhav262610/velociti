const mongoose = require('mongoose')
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: [3, "Username must be at least 3 characters"],
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [5, "Email must be at least 5 characters"],
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    socketId: {
        type: String,
    },
    rideRequest: {
        type: Boolean,
        default: false,
    }
})

userSchema.methods.toggleRideRequest = async function () {
    try {
        this.rideRequest = !this.rideRequest; // Toggle the rideRequest value
        await this.save(); // Save the updated user document
        return this; // Return the updated user
    } catch (error) {
        console.log("ERROR WHILE TOGGLING RIDE REQUEST");
        throw error;
    }
}


userSchema.methods.generateAuthToken = function () {
    try {
        const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET)
        return token
    } catch (error) {
        console.log("ERROR WHILE GENERATING AUTH TOKEN");
    }
}

userSchema.methods.comparePassword = async function (password) {
    try {
        return await bcrypt.compare(password, this.password)
    } catch (error) {
        console.log("ERROR WHILE COMPARING PASSWORD");
    }
}
userSchema.statics.hashPassword = async function (password) {
    try {
        return await bcrypt.hash(password, 10)
    } catch (error) {
        console.log("ERROR WHILE HASHING PASSWORD");
    }
}

const userModel = mongoose.model('user', userSchema)


module.exports = userModel

