const express = require("express")
const router = express.Router()
const { body } = require("express-validator")
const captainController = require("../controllers/captain-controller")

router.post("/register", [
    body('username').isLength({ min: 3 }).withMessage("Username must be at least 3 characters"),
    body('email').isEmail().withMessage("Invalid Email"),
    body('password').isLength({ min: 8 }).withMessage("Password must be at least 8 characters"),
    body('vehicle.color').isLength({ min: 3 }).withMessage("Color must be at least 3 characters long!"),
    body('vehicle.plate').isLength({ min: 3 }).withMessage("Plate Number must be at least 3 characters long!"),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage("Capacity must be at least for 1 passenger"),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage("Invalid Car type"),
],

    captainController.registerCaptain

)


module.exports = router