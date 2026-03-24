// Import mongoose to create a schema
const mongoose = require("mongoose");

// Define the schema for saving prompt and response
const FlowSchema = new mongoose.Schema(
  {
    // User's input prompt
    prompt: {
      type: String,
      required: true,
    },

    // AI's response
    response: {
      type: String,
      required: true,
    },
  },
  {
    // Automatically adds createdAt and updatedAt fields
    timestamps: true,
  }
);

// Export the model
module.exports = mongoose.model("Flow", FlowSchema);