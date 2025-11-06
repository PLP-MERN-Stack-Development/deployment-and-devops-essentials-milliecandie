// Import dependencies
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// Basic route for testing
app.get("/", (req, res) => {
  res.send("Backend server is running successfully 🚀");
});

// API route to connect with frontend
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Backend!" });
});

// Health check route for monitoring
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

// Simulated database connection (for now you can skip MongoDB)
const connectDB = async () => {
  try {
    console.log("🟢 Database connected (placeholder, MongoDB not yet configured)");
  } catch (error) {
    console.error("🔴 Database connection failed:", error.message);
  }
};
connectDB();

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err.stack);
  res.status(500).json({ message: "Something went wrong on the server." });
});

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running in ${process.env.NODE_ENV || "development"} mode on port ${PORT}`);
});