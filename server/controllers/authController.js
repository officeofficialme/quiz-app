
const bcrypt = require("bcryptjs");
const User = require("../models/User");

// ===============================
// USER REGISTRATION
// ===============================
const userAuthReg = async (req, res) => {
  const { uname, pass } = req.body;

  try {
    // 1. Validate input
    if (
      typeof uname !== "string" ||
      typeof pass !== "string" ||
      !uname.trim() ||
      !pass
    ) {
      return res.status(400).json({
        success: false,
        message: "Username and password are required",
      });
    }

    const username = uname.trim();

    // 2. Check whether username already exists
    const existingUser = await User.findOne({
      username: username,
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Username already exists",
      });
    }

    // 3. Hash password
    const hashedPassword = await bcrypt.hash(pass, 12);

    // 4. Create user
    const user = await User.create({
      username,
      password: hashedPassword,
    });

    // 5. Send response
    return res.status(201).json({
      success: true,
      message: "User created successfully",
      data: {
        id: user._id,
        username: user.username,
      },
    });

  } catch (error) {
    console.error("Registration error:", error);

    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Username already exists",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Could not create user",
    });
  }
};


// ===============================
// USER LOGIN
// ===============================
const userAuthLogIn = async (req, res) => {
  const { uname, pass } = req.body;

  try {
    // 1. Validate input
    if (
      typeof uname !== "string" ||
      typeof pass !== "string" ||
      !uname.trim() ||
      !pass
    ) {
      return res.status(400).json({
        success: false,
        message: "Username and password are required",
      });
    }

    const username = uname.trim();

    // 2. Find user
    const user = await User.findOne({
      username: username,
    });

    // 3. Check user existence
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid username or password",
      });
    }

    // 4. Compare password
    const isMatch = await bcrypt.compare(pass, user.password);

    // 5. Check password match
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid username or password",
      });
    }

    // 6. Login successful
    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        id: user._id,
        username: user.username,
      },
    });

  } catch (error) {
    console.error("Login error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


// ===============================
// EXPORT FUNCTIONS
// ===============================
module.exports = {
  userAuthLogIn,
  userAuthReg,
};
