import React, { useState } from "react";

const ChatBot = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      setResponse(`Procesando tu PQRS: ${message}`);
      setMessage("");
    }
  };

  return (
    <div className="chatbot-container">
      <h2>Chat PQRS</h2>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Describe tu PQRS aquí..."
      />
      <button onClick={handleSend}>Enviar</button>
      {response && <p>{response}</p>}
    </div>
  );
};

export default ChatBot;

