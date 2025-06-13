const router = require("express").Router();
const { registerUser, loginUser, logoutUser } = require("../controllers/authController");
const { protect } = require("../middlewares/authMiddleware");


router.post("/register", registerUser)
router.post("/login", loginUser);
router.get('/logout',protect, logoutUser)

module.exports = router