const express = require("express")
const router = express.Router()
const { body } = require("express-validator")
const userController = require("../controllers/user-controller")


router.post('/register', [
    body('username').isLength({ min: 3 }).withMessage("Username must be at least 3 characters"),
    body('email').isEmail().withMessage("Invalid Email"),
    body('password').isLength({ min: 8 }).withMessage("Password must be at least 8 characters")
],

    userController.registerUser
)

router.post('/login', [
    body('email').isEmail().withMessage("Invalid Email"),
    body('password').isLength({ min: 8 }).withMessage("Password must be at least 8 characters")
],

    userController.loginUser
)

module.exports = router