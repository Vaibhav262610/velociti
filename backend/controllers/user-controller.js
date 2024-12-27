const { validationResult } = require('express-validator')
const userModel = require('../models/user.model')
const userService = require("../services/user.service")
const blacklistTokenModel = require("../models/blacklistToken.model")

const registerUser = async (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { username, email, password } = req.body;

    const isUserAlreadyExist = await userModel.findOne({ email })

    if (isUserAlreadyExist) {
        res.status(400).json({ msg: "USER ALREADY EXISTS" })
        console.log("USER ALREADY EXISTS");

    }

    const hashedPassword = await userModel.hashPassword(password)

    const user = await userService.createUser({
        username,
        email,
        password: hashedPassword
    })

    const token = user.generateAuthToken()

    res.status(201).json({ token, user })
}

const loginUser = async (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body

    const user = await userModel.findOne({ email }).select("+password")

    if (!user) {
        return res.status(401).json({ msg: "INVALID EMAIL OR PASSWORD" })
    }
    const isMatch = await user.comparePassword(password)

    if (!isMatch) {
        return res.status(401).json({ msg: "INVALID EMAIL OR PASSWORD" })
    }

    const token = user.generateAuthToken()

    res.status(201).json({ token, user })
}

const logoutUser = async (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1]

    await blacklistTokenModel.create({ token })

    res.status(200).json({ msg: "LOGGED OUT SUCCESSFULLY" })
}

const getUserProfile = async (req, res, next) => {
    try {
        res.status(200).json(req.user)
    } catch (error) {
        res.status(401).json({ msg: "DATA NOT FOUND" })
    }
}


const updateRideRequest = async (req, res, next) => {
    const newRideRequest = true

    userModel.findByIdAndUpdate({ rideRequest: newRideRequest }, { rideRequest: req.body.rideRequest })
        .then(users => res.json(users))
        .catch(err => res.json(err))
}

module.exports = { registerUser, loginUser, getUserProfile, logoutUser, updateRideRequest }