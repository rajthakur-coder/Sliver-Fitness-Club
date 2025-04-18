import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ChatBot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Chatbot Open/Close State

  const cleanResponse = (text) => text.replace(/\*\*/g, "").replace(/_/g, "").trim();
  const shortenResponse = (text) =>
    text.split(". ").slice(0, 2).join(". ") + (text.split(". ").length > 2 ? "..." : "");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    setIsTyping(true);

    try {
      let botReply = "";
      if (input.toLowerCase().includes("तुम्हारा नाम क्या है") || input.toLowerCase().includes("your name")) {
        botReply = "मेरा नाम Imran है।";
      } else {
        const response = await axios.post("https://gym-website-backhand.onrender.com/chat", { message: input });
        botReply = response.data.reply || "Sorry, I couldn't process that.";
        botReply = shortenResponse(cleanResponse(botReply));
      }

      setTimeout(() => {
        setMessages([...newMessages, { role: "assistant", content: botReply }]);
        setIsTyping(false);
      }, 1000);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages([...newMessages, { role: "assistant", content: "Sorry, something went wrong. Try again later." }]);
      setIsTyping(false);
    }

    setLoading(false);
  };

  return (
    <>
      {/* Floating Chatbot Button */}
      <div className="chatbot-button" onClick={() => setIsOpen(!isOpen)}>
       CHAT US 💬
      </div>

      {/* Chatbot Popup */}
      <div className={`chatbot-container ${isOpen ? "open" : "closed"}`}>
        <div className="chat-header">
        Gym Chatbot
          <button className="close-button" onClick={() => setIsOpen(false)}>×</button>
        </div>
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.role === "user" ? "user-message slide-in" : "bot-message slide-in"}`}>
              <strong>{msg.role === "user" ? "You" : "Imran"}:</strong> {msg.content}
            </div>
          ))}
          {isTyping && <div className="bot-message typing-indicator">Imran is typing...</div>}
        </div>
        <div className="chat-input">
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask about workouts, diet, fitness..." disabled={loading} className="glow-input" />
          <button onClick={sendMessage} disabled={loading} className="glow-button">Send</button>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
