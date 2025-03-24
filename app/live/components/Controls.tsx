"use client";

import { useState } from "react";

export default function Controls() {
  const [isMicOn, setIsMicOn] = useState(true);
  const [isCamOn, setIsCamOn] = useState(true);

  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-md mt-4 flex justify-center space-x-4">
      <button
        onClick={() => setIsMicOn(!isMicOn)}
        className={`px-4 py-2 rounded ${isMicOn ? "bg-green-500" : "bg-red-500"} text-white`}
      >
        {isMicOn ? "Mute Mic" : "Unmute Mic"}
      </button>
      <button
        onClick={() => setIsCamOn(!isCamOn)}
        className={`px-4 py-2 rounded ${isCamOn ? "bg-green-500" : "bg-red-500"} text-white`}
      >
        {isCamOn ? "Turn Off Camera" : "Turn On Camera"}
      </button>
      <button className="px-4 py-2 rounded bg-red-600 text-white">Leave</button>
    </div>
  );
}
