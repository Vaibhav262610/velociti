const { validationResult } = require("express-validator")
const captainModel = require("../models/captain.model")
const captainService = require("../services/captain.service")
const blacklistTokenModel = require("../models/blacklistToken.model")

module.exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { username, email, password, vehicle } = req.body;

    const isCaptainAlreadyExist = await captainModel.findOne({ email })

    if (isCaptainAlreadyExist) {
        res.status(400).json({ msg: "CAPTAIN ALREADY EXISTS" })
    }

    const hashedPassword = await captainModel.hashPassword(password)

    const captain = await captainService.createUser({
        username,
        email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType,

    })


    const token = captain.generateAuthToken()

    res.status(201).json({ token, captain })


}


module.exports.loginCaptain = async (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body

    const captain = await captainModel.findOne({ email }).select("+password")

    if (!captain) {
        return res.status(401).json({ msg: "INVALID EMAIL OR PASSWORD" })
    }
    const isMatch = await captain.comparePassword(password)

    if (!isMatch) {
        return res.status(401).json({ msg: "INVALID EMAIL OR PASSWORD" })
    }

    const token = captain.generateAuthToken()

    res.status(201).json({ token, captain })
}

module.exports.getCaptainProfile = async (req, res, next) => {
    res.status(200).json({ captain: req.captain })
}

module.exports.logoutCaptain = async (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1]


    await blacklistTokenModel.create({ token })

    res.status(200).json({ msg: "LOGGED OUT SUCCESSFULLY" })
}