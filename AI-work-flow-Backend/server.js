// Import required packages
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const aiRoutes = require("./routes/ai");

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

// Create express app
const app = express();

// Middleware
app.use(cors()); // Allow frontend to talk to backend
app.use(express.json()); // Parse incoming JSON requests

// Routes
app.use("/api", aiRoutes);

// Test route to check if server is running
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

