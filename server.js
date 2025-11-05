import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import statusMonitor from "express-status-monitor";
import winston from "winston";

dotenv.config();
const app = express();

// 🩺 Express Status Monitor
app.use(statusMonitor());

// ⚙️ Middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("combined"));

// 💚 Health check endpoint
app.get("/", (req, res) => {
  res.status(200).json({ message: "✅ Backend API running successfully" });
});

// 🧩 MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => logger.info("MongoDB connected successfully"))
.catch(err => logger.error("Database connection failed: " + err));

// 🪵 Winston Logger
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "server.log" })
  ],
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.simple()
  )
});

// Example route to test logging
app.get("/test-log", (req, res) => {
  logger.info("Test log entry created successfully");
  res.send("Log entry created successfully ✅");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});