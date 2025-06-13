const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const cors = require("cors")
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors({
  origin: ['http://localhost:5173', 'https://mentor-test-tm3h.vercel.app/'],
  credentials: true,
}));
app.use(cookieParser())

const userRoutes = require("./router/authRoutes")
app.use("/api/users", userRoutes)

module.exports = app