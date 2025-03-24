import React from "react";

const participants = ["John Doe", "Jane Smith", "Alex Johnson"];

export default function Participants() {
  return (
    <div className="h-full w-full flex flex-col p-4">
      <div className="flex-1 overflow-y-auto space-y-2">
        {participants.map((name, index) => (
          <div
            key={index}
            className="bg-gray-200 p-3 rounded-md shadow-sm text-center"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}
