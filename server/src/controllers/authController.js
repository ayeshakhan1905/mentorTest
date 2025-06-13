const User = require("../models/userModel");
const generateToken = require("../utils/token");

const registerUser = async (req, res) => {
  try {
    const { name, email, password, isAdmin } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({ name, email, password, isAdmin });

    if (user) {
      const token = generateToken(user._id);

      res
        .cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "None",
          maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        })
        .status(200)
        .json({
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
          },
        });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (err) {
    console.error("Register Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user._id);

    // 1. Push new token
    user.sessionTokens.push(token);

    // 2. Trim tokens if needed
    if (user.sessionTokens.length > 2) {
      user.sessionTokens = user.sessionTokens.slice(-2);
    }

    // 3. Save updated sessionTokens
    await user.save();

    console.log("Session Tokens after trim:", user.sessionTokens);

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "None",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })
      .status(200)
      .json({
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
        },
      });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};


const logoutUser = async (req, res) => {
  try {
    const user = req.user;
    const token = req.token;

    user.sessionTokens = user.sessionTokens.filter(t => t !== token);
    await user.save();

    res.clearCookie('token');
    res.status(200).json({ message: 'Logged out successfully' });
  } catch (err) {
    console.error("Logout Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};



module.exports = { registerUser, loginUser, logoutUser };
