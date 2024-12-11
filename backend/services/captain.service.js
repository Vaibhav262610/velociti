const captainModel = require("../models/captain.model")

module.exports.createUser = async ({ username, email, password, color, plate, capacity, vehicleType }) => {
    if (!username || !email || !password || !color || !plate || !capacity || !vehicleType) {
        throw new Error("All fields are required")
    }
    const captain = captainModel.create({
        username,
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType
        }
    })

    return captain
}