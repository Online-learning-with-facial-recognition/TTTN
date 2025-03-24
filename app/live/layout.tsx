"use client";

export default function LiveLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {children}
    </div>
  );
}
