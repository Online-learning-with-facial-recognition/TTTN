import { ClipboardList, ArrowUpRight, Clock, Calendar } from "lucide-react";
import Link from "next/link";

const tasks = [
  { title: "Quiz for 3CO - JVY", assigned: "12:40 PM", due: "03:40 PM", date: "03 Jan 2023", status: "Not Started", color: "bg-gray-200 text-gray-700" },
  { title: "Quiz for 3CO - JVY", assigned: "12:40 PM", due: "03:40 PM", date: "03 Jan 2023", status: "Ongoing", color: "bg-blue-100 text-blue-500" },
  { title: "Quiz for 3CO - JVY", assigned: "12:40 PM", due: "03:40 PM", date: "03 Jan 2023", status: "Completed", color: "bg-green-100 text-green-500" },
];

export default function Tasks() {
  return (
    <div className="space-y-4 bg-white p-6 rounded-lg border border-gray-200">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <ClipboardList className="w-5 h-5 text-blue-500" />
          <h2 className="text-xl font-semibold">My Tasks</h2>
        </div>
        <Link href="#" className="flex items-center text-blue-500 hover:text-blue-600">
          View All <ArrowUpRight className="w-4 h-4 ml-1" />
        </Link>
      </div>

      <div className="space-y-4 mt-4">
        {tasks.map((task, index) => (
          <div key={index} className="bg-white p-4 rounded shadow border">
            <h3 className="font-semibold">{task.title}</h3>
            <p className="text-sm text-gray-500 flex items-center">
              <Clock className="w-4 h-4 mr-1" /> {task.assigned}
              <Calendar className="w-4 h-4 ml-2 mr-1" /> {task.date}
            </p>
            <p className={`inline-block px-2 py-1 mt-2 rounded ${task.color}`}>{task.status}</p>
            <button className="block mt-2 bg-blue-500 text-white py-2 px-4 rounded">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}
