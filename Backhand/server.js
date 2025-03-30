const express = require("express");
const cors = require("cors");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.error("❌ Error: Missing GEMINI_API_KEY. Check your .env file.");
  process.exit(1);
}

// AI Chat Endpoint for Gym-related Queries
app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;
    const prompt = `You are a professional gym coach. Provide detailed answers for fitness, workout, diet, and recovery based on user queries. User's question: ${message}`;
    
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;
    
    const response = await axios.post(
      apiUrl,
      { contents: [{ role: "user", parts: [{ text: prompt }] }] },
      { headers: { "Content-Type": "application/json" } }
    );
    
    const botReply = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't process that.";
    res.json({ reply: botReply });
  } catch (error) {
    console.error("🔥 API Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to get response from Gemini API" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Gym Chatbot Server running on port ${PORT}`));
