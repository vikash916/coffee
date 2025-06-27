import { useState } from "react";
import "./ChatBox.css";

export const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const smartReply = (msg) => {
    const lower = msg.toLowerCase();
    if (lower.includes("best coffee")) return "Try Arabica for smoothness or Robusta for strong flavor! ☕";
    if (lower.includes("hi") || lower.includes("hello")) return "Hey there! Ready to chat coffee? 👋";
    if (lower.includes("subscribe")) return "Check out our subscription page for exciting plans!";
    return "Hmm, interesting! Tell me more about your coffee taste.";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { text: input, sender: "user" };
    const botMsg = { text: smartReply(input), sender: "bot" };

    setMessages([...messages, userMsg, botMsg]);
    setInput("");
  };

  return (
    <>
      <button className="chat-toggle" onClick={() => setIsOpen(!isOpen)}>
        💬 Chatbox
      </button>

      {isOpen && (
        <div className="chatbox">
          <div className="chat-header">☕ Coffee Assistant</div>
          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              placeholder="Ask me anything..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};
