"use client";

import React from "react";
import LiveVideo from "./components/LiveVideo";
import SidePanel from "./components/SidePanel";
import Controls from "./components/Controls";

export default function LivePage() {
  return (
    <div className="flex flex-col h-screen">
      {/* Khu vực hiển thị Video & SidePanel */}
      <div className="flex-1 grid grid-cols-4 gap-4 p-4">
        {/* Video chiếm 3/4 màn hình */}
        <div className="col-span-3">
          <LiveVideo />
        </div>

        {/* SidePanel (Chuyển đổi giữa Participants & ChatBox) */}
        <div className="col-span-1 flex flex-col">
          <SidePanel />
        </div>
      </div>

      {/* Thanh điều khiển */}
      <Controls />
    </div>
  );
}
