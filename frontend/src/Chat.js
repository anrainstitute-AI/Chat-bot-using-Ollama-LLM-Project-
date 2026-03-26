import { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input) return;

    const newMessages = [...messages, { role: "user", text: input }];
    setMessages(newMessages);

    const res = await fetch("http://127.0.0.1:8000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: input })

    });

    const data = await res.json();

    setMessages([
      ...newMessages,
      { role: "bot", text: data.reply }
    ]);

    setInput("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>My ChatGPT App</h2>

      <div style={{ height: 300, overflowY: "scroll" }}>
        {messages.map((msg, i) => (
          <div key={i}>
            <b>{msg.role === "user" ? "You" : "AI"}:</b> {msg.text}
          </div>
        ))}
      </div>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}