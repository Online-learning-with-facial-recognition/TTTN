import { Mail, Phone } from "lucide-react";

export default function ProfileCard() {
  return (
    <div className="flex items-start space-x-6 mb-6">
      {/* Avatar + Info */}
      <div className="flex-shrink-0">
        <img
          src="https://via.placeholder.com/80"
          alt="Student"
          className="w-20 h-20 rounded-full"
        />
      </div>

      <div className="flex-grow">
        <h2 className="text-xl font-semibold">Raj Anadkat</h2>
        <p className="text-gray-500">Student ID: TIPSG5682</p>
        <p className="text-gray-500">Gender: Female</p>
      </div>

      {/* Attendance */}
      <div className="bg-pink-100 text-pink-600 p-4 rounded-md text-center">
        <p className="font-semibold">Attendance</p>
        <p className="text-2xl font-bold">85%</p>
        <p className="text-sm text-gray-500">85/100</p>
      </div>
    </div>
  );
}
