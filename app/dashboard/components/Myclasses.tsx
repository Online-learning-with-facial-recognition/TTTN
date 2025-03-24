import { GraduationCap, ArrowUpRight, Clock, Calendar } from "lucide-react";
import Link from "next/link";

const classes = [
  { title: "How to Make an Array and its Types in C++", batch: "Batch 3CO - JVY", time: "12:40 PM", date: "03 Jan 2023", price: "$15" },
  { title: "JavaScript Basics", batch: "Batch 3MY - JVY", time: "01:40 PM", date: "03 Jan 2023", price: "$20" },
  { title: "Python for Beginners", batch: "Batch 3PY - JVY", time: "02:30 PM", date: "04 Jan 2023", price: "$25" },
];

export default function Classes() {
  return (
    <div className="space-y-4 bg-white p-6 rounded-lg border border-gray-200">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <GraduationCap className="w-5 h-5 text-blue-500" />
          <h2 className="text-xl font-semibold">My Classes</h2>
        </div>
        <Link href="/my_classes" className="flex items-center text-blue-500 hover:text-blue-600">
          View All <ArrowUpRight className="w-4 h-4 ml-1" />
        </Link>
      </div>

      <div className="space-y-4 mt-4">
        {classes.map((classItem, index) => (
          <div key={index} className="bg-white p-4 rounded shadow border">
            <h3 className="font-semibold">{classItem.title}</h3>
            <p className="text-sm text-gray-500 flex items-center">
              <Clock className="w-4 h-4 mr-1" /> {classItem.time}
              <Calendar className="w-4 h-4 ml-2 mr-1" /> {classItem.date}
            </p>
            {/* ✅ Hiển thị giá tiền */}
            <p className="inline-block px-2 py-1 mt-2 bg-gray-200 text-gray-700 rounded">
              Price: {classItem.price}
            </p>
            <button className="block w-full bg-black text-white py-1.5 rounded text-sm mt-2">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
