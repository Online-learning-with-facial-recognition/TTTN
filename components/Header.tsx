"use client";
import { useRouter } from "next/navigation";

interface HeaderProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Header({ className, children }: HeaderProps) {
  const router = useRouter(); // Khai báo router

  return (
    <header className={`fixed top-0 w-full bg-blue-500 text-white p-3 flex justify-between items-center shadow-md z-50 ${className}`}>
      <h2 className="text-xl font-bold">Study3<span className="text-yellow-300">Online</span></h2>
      <div className="flex items-center space-x-4">
        {children}
        {/* Nút Profile có điều hướng */}
        <button 
          className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-100 transition-colors"
          onClick={() => router.push("/profile")} // Điều hướng khi bấm vào
        >
          Profile
        </button>
      </div>
    </header>
  );
}
