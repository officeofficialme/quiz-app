const express = require('express')
const { userAuthReg, userAuthLogIn } = require('../controllers/authController')
const router = express.Router()

router.post("/api/auth/register", userAuthReg);
router.post("/api/auth/login", userAuthLogIn);

module.exports = router;