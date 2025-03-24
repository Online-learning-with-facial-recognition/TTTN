import React, { useState } from "react";
import ChatBox from "./ChatBox";
import Participants from "./Participants";

export default function SidePanel() {
  const [activeTab, setActiveTab] = useState<"chat" | "participants">("chat");

  return (
    <div className="w-[450px] max-w-full h-full bg-white rounded-lg shadow-lg p-4 flex flex-col overflow-hidden">
      {/* Thanh chọn tab */}
      <div className="flex justify-between border-b pb-2">
        <button
          className={`text-lg font-semibold px-3 py-1 ${
            activeTab === "chat" ? "text-black border-b-2 border-blue-500" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("chat")}
        >
          Chat
        </button>
        <button
          className={`text-lg font-semibold px-3 py-1 ${
            activeTab === "participants" ? "text-black border-b-2 border-blue-500" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("participants")}
        >
          Participants
        </button>
      </div>

      {/* Nội dung */}
      <div className="flex-1 overflow-y-auto mt-2">
        {activeTab === "chat" ? <ChatBox /> : <Participants />}
      </div>
    </div>
  );
}
