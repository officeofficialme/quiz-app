const bcrypt = require("bcryptjs");
const User = require("../models/User");

const userAuthReg = async (req, res) => {
  const { uname, pass } = req.body;

  try {
    // Validate input
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

    if ((await User.find({ username: uname })).length) {
      return res.status(400).json({
        success: false,
        message: "Username already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(pass, 12);
    // console.log(await bcrypt.compare("1111", hashedPassword))

    const user = await User.create({
      username: uname,
      password: hashedPassword,
    });

    return res.status(200).json({
      status: "ok",
      message: "User created successfully",
      data: {
        _id: user._id,
        username: user.username,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);

    // Handle duplicate username
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

    // 2. Find user in MongoDB
    const user = await User.findOne({
      username: uname.trim(),
    });

    // 3. Check if user exists
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid username or password",
      });
    }
    console.log(user)
    // 4. Compare entered password with stored hash
    const isMatch = await bcrypt.compare(pass, user.password);

    // 5. Check password
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

module.exports = {userAuthLogIn, userAuthReg}