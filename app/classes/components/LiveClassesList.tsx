import React from "react";
import { Calendar, Clock, PlayCircle } from "lucide-react"; // Import icons

const classData = [
  {
    title: "How to Make an Array and its Types in C++",
    // batch: "Batch 3CO - JVY",
    time: "12:40 PM",
    date: "03 Jan 2023",
    Price: "1$",
    // color: "bg-red-100 text-red-500",
    color: "bg-green-100 text-green-500",
  },
  {
    title: "JavaScript Basics",
    // batch: "Batch 3MY - JVY",
    time: "01:40 PM",
    date: "03 Jan 2023",
    Price: "1$",
    color: "bg-green-100 text-green-500",
  },
  {
    title: "Python for Beginners",
    // batch: "Batch 3MY - JVY",
    time: "01:40 PM",
    date: "03 Jan 2023",
    Price: "1$",
    // color: "bg-gray-200 text-gray-700",
    color: "bg-green-100 text-green-500",
  },
];

export default function LiveClassesList() {
  return (
    <div className="grid grid-cols-3 gap-6 mt-6">
      {classData.map((classItem, index) => (
        <div key={index} className="bg-white p-4 rounded shadow border">
          <h3 className="font-semibold">{classItem.title}</h3>
          {/* <p className="text-sm text-gray-500 flex items-center">
            <PlayCircle className="w-4 h-4 mr-1" /> {classItem.batch}
          </p> */}
          <p className="text-sm text-gray-500 flex items-center">
            <Clock className="w-4 h-4 mr-1" /> {classItem.time} 
          </p>
          <p className="text-sm text-gray-500 flex items-center">
            <Calendar className="w-4 h-4 mr-1" /> {classItem.date}
          </p>
          <p className={`inline-block px-2 py-1 mt-2 rounded ${classItem.color}`}>
            Price: {classItem.Price}
          </p>
          <button className="block mt-2 w-full bg-black text-white py-2 rounded">
            Join Now
          </button>
        </div>
      ))}
    </div>
  );
}
