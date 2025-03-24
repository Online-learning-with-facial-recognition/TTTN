"use client";
import React, { useState } from "react";
import { Plus, Search, BookOpen, History } from "lucide-react";
import LiveClassesList from "./components/LiveClassesList";
import ClassHistory from "./components/ClassHistory";
import AddClassModal from "@/components/modals/AddClass";
export default function LiveClassesPage() {
  const [activeTab, setActiveTab] = useState("scheduled");
  const [isModalOpen, setIsModalOpen] = useState(false); // ✅ Thêm state cho modal

  return (
    <div className="p-6 w-full">
      {/* Header */}
      <div className="flex justify-end items-center">
        <button
          onClick={() => setIsModalOpen(true)} // ✅ Khi bấm mở modal
          className="bg-white text-blue-600 px-4 py-2 rounded-md flex items-center hover:bg-gray-100 transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" /> Add Class
        </button>
      </div>

      {/* Search & Tabs */}
      <div className="mt-6 flex justify-between items-center border-b pb-2">
        {/* Tabs */}
        <div className="flex space-x-6">
          <button
            onClick={() => setActiveTab("scheduled")}
            className={`pb-2 border-b-2 transition-colors flex items-center space-x-2 ${
              activeTab === "scheduled"
                ? "border-black font-semibold"
                : "border-transparent text-gray-500"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Scheduled Classes</span>
          </button>
          <button
            onClick={() => setActiveTab("history")}
            className={`pb-2 border-b-2 transition-colors flex items-center space-x-2 ${
              activeTab === "history"
                ? "border-black font-semibold"
                : "border-transparent text-gray-500"
            }`}
          >
            <History className="w-4 h-4" />
            <span>Class History</span>
          </button>
        </div>

        {/* Thanh tìm kiếm */}
        <div className="relative">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Nội dung */}
      {activeTab === "scheduled" ? <LiveClassesList /> : <ClassHistory />}

      {/* Modal Add Class */}
      <AddClassModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
