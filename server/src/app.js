const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

// ✅ CORS Setup (LOCAL)
const allowedOrigins = [
  "http://localhost:5173",
  "https://mentor-test-tm3h.vercel.app",
];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

app.use((req, res, next) => {
  // ... CORS headers
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.json());
app.use(cookieParser());

// ✅ Your routes
const authRoutes = require("./router/authRoutes");
app.use("/api/users", authRoutes);

module.exports = app;
