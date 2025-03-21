import React from 'react';
import { BookOpen, ClipboardList, Info, ArrowUpRight, Calendar, Clock } from 'lucide-react';
export default function Dashboard() {
  return (
    <div className="w-full">
      <div className="bg-blue-600 text-white p-4 rounded-md">
        <h1 className="text-2xl font-bold">Hi, Ngân</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Classes */}
        <div className="space-y-4 bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-blue-500" />
              <h2 className="text-xl font-semibold">Classes</h2>
            </div>
            <a href="#" className="flex items-center text-blue-500 hover:text-blue-600">
              View All <ArrowUpRight className="w-4 h-4 ml-1" />
            </a>
          </div>
          <div className="space-y-4 mt-4">
            {[
              { title: "How to Make an Array and its Types in C++", batch: "Batch 3CO - JVY", time: "12:40 PM", date: "03 Jan 2023", status: "Ongoing", color: "bg-red-100 text-red-500" },
              { title: "How to Make an Array and its Types in C++", batch: "Batch 3MY - JVY", time: "01:40 PM", date: "03 Jan 2023", status: "Starting in 60 Minutes", color: "bg-green-100 text-green-500" },
              { title: "How to Make an Array and its Types in C++", batch: "Batch 3MY - JVY", time: "01:40 PM", date: "03 Jan 2023", status: "Not Started", color: "bg-gray-200 text-gray-700" },
            ].map((classItem, index) => (
              <div key={index} className="bg-white p-4 rounded shadow bodrer">
                <h3 className="font-semibold">{classItem.title}</h3>
                <p className="text-sm text-gray-500 mt-1 flex items-center">
                  <Clock className="w-4 h-4 mr-1" /> {classItem.time}
                  <Calendar className="w-4 h-4 ml-2 mr-1" /> {classItem.date}
                </p>
                <p className={`inline-block px-2 py-1 mt-2 rounded ${classItem.color}`}>
                  Status: {classItem.status}
                </p>
                <button className="block w-full bg-black text-white py-1.5 rounded text-sm mt-2">
                  Join Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* My Tasks */}
        <div className="space-y-4 bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <ClipboardList className="w-5 h-5 text-blue-500" />
              <h2 className="text-xl font-semibold">My Tasks</h2>
            </div>
            <a href="#" className="flex items-center text-blue-500 hover:text-blue-600">
              View All <ArrowUpRight className="w-4 h-4 ml-1" />
            </a>
          </div>
          <div className="space-y-4 mt-4">
            {[
              { title: "Add a Quiz for Students of 3CO - JVY on the subject Fundamentals of Programming", assigned: "12:40 PM", due: "03:40 PM", date: "03 Jan 2023", status: "Not Started", color: "bg-gray-200 text-gray-700" },
              { title: "Add a Quiz for Students of 3CO - JVY on the subject Fundamentals of Programming", assigned: "12:40 PM", due: "03:40 PM", date: "03 Jan 2023", status: "Ongoing", color: "bg-blue-100 text-blue-500" },
              { title: "Add a Quiz for Students of 3CO - JVY on the subject Fundamentals of Programming", assigned: "12:40 PM", due: "03:40 PM", date: "03 Jan 2023", status: "Completed", color: "bg-green-100 text-green-500" },
            ].map((task, index) => (
              <div key={index} className="bg-white p-4 rounded shadow border">
                <h3 className="font-semibold">{task.title}</h3>
                <p className="text-sm text-gray-500 flex items-center">
                  <Clock className="w-4 h-4 mr-1" /> {task.assigned}
                  <Calendar className="w-4 h-4 ml-2 mr-1" /> {task.date}
                </p>
                <p className="text-sm text-gray-500 flex items-center mt-1">
                  <Clock className="w-4 h-4 mr-1" /> {task.due}
                  <Calendar className="w-4 h-4 ml-2 mr-1" /> {task.date}
                </p>
                <p className={`inline-block px-2 py-1 mt-2 rounded ${task.color}`}>{task.status}</p>
                <button className="block mt-2 bg-blue-500 text-white py-2 px-4 rounded">View Details</button>
              </div>
            ))}
          </div>
        </div>

        {/* Information */}
        <div className="space-y-4 bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Info className="w-5 h-5 text-blue-500" />
              <h2 className="text-xl font-semibold">Information</h2>
            </div>
            <a href="#" className="flex items-center text-blue-500 hover:text-blue-600">
              View All <ArrowUpRight className="w-4 h-4 ml-1" />
            </a>
          </div>
          <div className="space-y-4">
            {Array(3).fill({
              title: "3CO - JVY",
              subjects: 25,
              students: 2560,
              quizzes: 35,
              exams: 25,
              assignments: 85,
              endDate: "02 Jan 2027",
            }).map((info, index) => (
              <div key={index} className="bg-white p-4 rounded shadow border">
                <h3 className="font-semibold">{info.title}</h3>
                <p className="text-sm text-gray-500">{info.subjects} Subjects</p>
                <p className="text-sm text-gray-500">{info.students} Students</p>
                <p className="text-sm text-gray-500">{info.quizzes} Quizzes</p>
                <p className="text-sm text-gray-500">{info.exams} Exams</p>
                <p className="text-sm text-gray-500">{info.assignments} Assignments</p>
                <p className="mt-2 bg-gray-200 text-gray-700 px-2 py-1 rounded">Ends at {info.endDate}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
