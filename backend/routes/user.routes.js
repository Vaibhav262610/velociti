const express = require("express")
const router = express.Router()
const { body } = require("express-validator")
const userController = require("../controllers/user-controller")
const authMiddleware = require("../middleware/auth.middleware")


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

router.get("/profile", authMiddleware.authUser, userController.getUserProfile);
router.get("/logout", authMiddleware.authUser, userController.logoutUser);
router.get("/update", authMiddleware.authUser, userController.updateRideRequest);


module.exports = router