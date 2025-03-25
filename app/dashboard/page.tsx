"use client";
import React from "react";
import { useUser } from "@clerk/nextjs"; // ✅ Import Clerk
import Classes from "./components/MyClasses";
import Tasks from "./components/Tasks";
import Information from "./components/Information";

export default function Dashboard() {
  const { user } = useUser(); // ✅ Lấy thông tin người dùng Clerk

  return (
    <div className="w-full">
      <div className="bg-blue-600 text-white p-4 rounded-md">
        <h1 className="text-2xl font-bold">
          Hi, {user?.fullName || "Guest"} {/* ✅ Hiển thị tên người dùng hoặc "Guest" */}
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <Classes />
        <Tasks />
        <Information />
      </div>
    </div>
  );
}
