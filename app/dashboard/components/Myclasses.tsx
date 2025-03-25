"use client";

import { useState } from "react";
import { GraduationCap, ArrowUpRight, Clock, Calendar } from "lucide-react";
import Link from "next/link";
import ClassDetailsModal from "@/components/modals/ClassDetailsModal"; // Import popup từ modals

const classes = [
  { title: "How to Make an Array and its Types in C++", time: "12:40 PM", date: "03 Jan 2023", price: "15$" },
  { title: "JavaScript Basics", time: "01:40 PM", date: "03 Jan 2023", price: "20$" },
  { title: "Python for Beginners", time: "02:30 PM", date: "04 Jan 2023", price: "25$" },
];

export default function MyClasses() {
  const [selectedClass, setSelectedClass] = useState<any>(null);

  return (
    <div className="space-y-4 bg-white p-6 rounded-lg border border-gray-200">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <GraduationCap className="w-5 h-5 text-blue-500" />
          <h2 className="text-xl font-semibold">My Classes</h2>
        </div>
        <Link href="/classes" className="flex items-center text-blue-500 hover:text-blue-600">
          View All <ArrowUpRight className="w-4 h-4 ml-1" />
        </Link>
      </div>

      <div className="space-y-4 mt-4">
        {classes.map((classItem, index) => (
          <div key={index} className="bg-white p-4 rounded shadow border">
            {/* 🔥 Khi bấm vào tiêu đề lớp học sẽ hiển thị popup */}
            <h3 
              className="font-semibold cursor-pointer hover:text-blue-500"
              onClick={() => setSelectedClass(classItem)}
            >
              {classItem.title}
            </h3>
            <p className="text-sm text-gray-500 flex items-center">
              <Clock className="w-4 h-4 mr-1" /> {classItem.time}
              <Calendar className="w-4 h-4 ml-2 mr-1" /> {classItem.date}
            </p>
            <p className="inline-block px-2 py-1 mt-2 bg-gray-200 text-gray-700 rounded">
              Price: {classItem.price}
            </p>
            <button className="block w-full bg-black text-white py-1.5 rounded text-sm mt-2">Buy Now</button>
          </div>
        ))}
      </div>

      {/* Popup hiển thị chi tiết lớp học */}
      {selectedClass && (
        <ClassDetailsModal
          isOpen={!!selectedClass}
          onClose={() => setSelectedClass(null)}
          title={selectedClass.title}
          time={selectedClass.time}
          date={selectedClass.date}
          price={selectedClass.price}
        />
      )}
    </div>
  );
}
