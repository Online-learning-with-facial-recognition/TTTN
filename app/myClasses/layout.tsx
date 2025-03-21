import React from "react";

export default function LiveClassesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      {/* Main Content */}
      <main className="flex-1 bg-gray-50">{children}</main>
    </div>
  );
}
