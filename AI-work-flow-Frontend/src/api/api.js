import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

export const askAI = async (prompt) => {
  const response = await axios.post(`${BASE_URL}/ask-ai`, { prompt });
  return response.data.response;
};

export const saveFlow = async (prompt, response) => {
  const result = await axios.post(`${BASE_URL}/save`, {
    prompt,
    response,
  });
  return result.data;
};