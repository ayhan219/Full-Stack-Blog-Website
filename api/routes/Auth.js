const express = require("express");
const router = express.Router();
const {loginUser,signupUser,logoutUser,getMe,changePassword} = require("../controller/AuthController")
const authenticateToken = require("../controller/AuthMiddleware.js")


router.post("/login",loginUser);
router.post("/signup",signupUser)
router.post("/logout",logoutUser)
router.get('/me', authenticateToken, getMe);
router.post("/changepassword",changePassword);

module.exports = router;