"use client";

import { useState } from "react";
import { Calendar, Clock } from "lucide-react";
import ClassDetailsModal from "@/components/modals/ClassDetailsModal"; // Import modal

const classData = [
  {
    title: "How to Make an Array and its Types in C++",
    time: "12:40 PM",
    date: "03 Jan 2023",
    price: "1$",
    color: "bg-red-100 text-red-500",
  },
  {
    title: "How to Make an Array and its Types in C++",
    time: "01:40 PM",
    date: "03 Jan 2023",
    price: "1$",
    color: "bg-green-100 text-green-500",
  },
  {
    title: "How to Make an Array and its Types in C++",
    time: "01:40 PM",
    date: "03 Jan 2023",
    price: "1$",
    color: "bg-gray-200 text-gray-700",
  },
];

export default function ClassHistory() {
  const [selectedClass, setSelectedClass] = useState<any>(null);

  return (
    <div className="grid grid-cols-3 gap-6 mt-6">
      {classData.map((classItem, index) => (
        <div key={index} className="bg-white p-4 rounded shadow border">
          {/* Khi bấm vào tiêu đề sẽ mở popup */}
          <h3 
            className="font-semibold cursor-pointer hover:text-blue-500"
            onClick={() => setSelectedClass(classItem)}
          >
            {classItem.title}
          </h3>

          <p className="text-sm text-gray-500 flex items-center">
            <Clock className="w-4 h-4 mr-1" /> {classItem.time} 
          </p>
          <p className="text-sm text-gray-500 flex items-center">
            <Calendar className="w-4 h-4 mr-1" /> {classItem.date}
          </p>
          <p className={`inline-block px-2 py-1 mt-2 rounded ${classItem.color}`}>
            Price: {classItem.price}
          </p>

          <button className="block mt-2 w-full bg-black text-white py-2 rounded">
            Buy Now
          </button>
        </div>
      ))}

      {/* Popup chi tiết lớp học */}
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
