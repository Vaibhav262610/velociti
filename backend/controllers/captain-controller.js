const { validationResult } = require("express-validator")
const captainModel = require("../models/captain.model")
const captainService = require("../services/captain.service")

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