const { validationResult } = require('express-validator')
const userModel = require('../models/user.model')
const userService = require("../services/user.service")

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



module.exports = { registerUser, loginUser }