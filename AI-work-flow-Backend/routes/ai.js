require("dotenv").config();

const express = require("express");
const router = express.Router();
const OpenAI = require("openai");
const Flow = require("../models/Flow");

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

// Ask AI
router.post("/ask-ai", async (req, res) => {
  try {
    const { prompt } = req.body;

    const completion = await openai.chat.completions.create({
      model: "openrouter/auto",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const response = completion.choices[0].message.content;

    res.json({ response });

  } catch (error) {
    console.error("OpenRouter Error:", error);
    res.status(500).json({
      error: "Failed to get AI response",
    });
  }
});

// Save Flow
router.post("/save", async (req, res) => {
  try {
    const { prompt, response } = req.body;

    const newFlow = new Flow({ prompt, response });
    await newFlow.save();

    res.json({
      message: "Flow saved successfully",
      data: newFlow,
    });

  } catch (error) {
    console.error("Save Error:", error);
    res.status(500).json({
      error: "Failed to save flow",
    });
  }
});

module.exports = router;