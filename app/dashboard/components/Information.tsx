import { Info, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Information() {
  return (
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
  );
}
