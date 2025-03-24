import React, { useState } from "react";

export default function ChatBox() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, input]);
      setInput(""); // Xóa nội dung input sau khi gửi
    }
  };

  return (
    <div className="h-full flex flex-col bg-white rounded-md shadow-lg">
      {/* Nội dung tin nhắn */}
      <div className="flex-1 overflow-y-auto bg-gray-50 p-3 space-y-2">
        {messages.length > 0 ? (
          messages.map((msg, index) => (
            <div key={index} className="flex items-center space-x-2">
              <img
                src="https://via.placeholder.com/30"
                alt="avatar"
                className="w-6 h-6 rounded-full"
              />
              <div className="p-2 bg-white rounded-lg shadow text-sm">
                {msg}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center">No messages yet</p>
        )}
      </div>

      {/* Ô nhập tin nhắn */}
      <div className="flex items-center p-2 border-t bg-white">
        <input
          type="text"
          placeholder="Write a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded-full outline-none text-sm"
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 bg-blue-500 text-white p-2 rounded-full"
        >
          ➤
        </button>
      </div>
    </div>
  );
}
