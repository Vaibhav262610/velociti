const mongoose = require('mongoose')
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")


const captainSchema = new mongoose.Schema({
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
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    },
    vehicle: {
        plate: {
            type: String,
            required: true,
            minlength: [3, "Plate Number must be at least 3 character long!"]
        },
        color: {
            type: String,
            required: true,
            minlength: [3, "Color must be at least 3 character long!"]
        },
        capacity: {
            type: Number,
            required: true,
            minlength: [1, "Capacity must be at least 1 "]
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ['car', 'motorcycle', 'auto',]
        },
        location: {
            lat: {
                type: Number
            },
            lng: {
                type: Number
            },
        }

    }
})

captainSchema.methods.generateAuthToken = function () {
    try {
        const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET)
        return token
    } catch (error) {
        console.log("ERROR WHILE GENERATING CAPTAIN AUTH TOKEN");
    }
}

captainSchema.methods.comparePassword = async function (password) {
    try {
        return await bcrypt.compare(password, this.password)
    } catch (error) {
        console.log("ERROR WHILE COMPARING CAPTAIN PASSWORD");
    }
}
captainSchema.statics.hashPassword = async function (password) {
    try {
        return await bcrypt.hash(password, 10)
    } catch (error) {
        console.log("ERROR WHILE HASHING CAPTAIN PASSWORD");
    }
}

const captainModel = mongoose.model('captain', captainSchema)


module.exports = captainModel;

