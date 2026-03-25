import axios from "axios";

// Production Backend URL
const BASE_URL = "https://ai-work-flow.onrender.com/api";

// Ask AI
export const askAI = async (prompt) => {
  try {
    const response = await axios.post(`${BASE_URL}/ask-ai`, {
      prompt,
    });

    return response.data.response;
  } catch (error) {
    console.error("Ask AI Error:", error);
    throw error;
  }
};

// Save Flow
export const saveFlow = async (prompt, response) => {
  try {
    const result = await axios.post(`${BASE_URL}/save`, {
      prompt,
      response,
    });

    return result.data;
  } catch (error) {
    console.error("Save Flow Error:", error);
    throw error;
  }
};