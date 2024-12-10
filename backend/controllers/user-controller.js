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

    res.status(200).json({ msg: "LOGGED OUT" })
}

const getUserProfile = async (req, res, next) => {
    res.status(200).json(req.user)
}


module.exports = { registerUser, loginUser, getUserProfile, logoutUser }