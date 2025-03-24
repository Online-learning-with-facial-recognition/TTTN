"use client";
import { useState } from "react";

export default function ProfileTabs() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="border-b mb-4">
      <div className="flex space-x-6">
        {["General", "Quiz", "Exams", "Assignment", "Classes"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase())}
            className={`pb-2 border-b-2 transition-colors ${
              activeTab === tab.toLowerCase()
                ? "border-black font-semibold"
                : "border-transparent text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Nội dung hiển thị theo tab */}
      {activeTab === "general" && (
        <div className="mt-4 text-gray-700">
          <p>Course: B.Tech Specialization in Health Informatics</p>
          <p>Full name: Raj Anadkat</p>
          <p>Course Start Date: 17 Jan 2023</p>
          <p>Course End Date: 17 Jan 2025</p>
        </div>
      )}
    </div>
  );
}
