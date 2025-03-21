import Link from "next/link";
export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-white shadow-md p-4 sticky top-0 overflow-y-auto">
      <nav className="space-y-4">
        <Link href="/" className="p-2 block rounded hover:bg-gray-100 transition-colors">
          Home
        </Link>
        <Link href="/dashboard" className="p-2 block rounded hover:bg-gray-100 transition-colors">
          Dashboard
        </Link>
        <Link href="/myClasses" className="p-2 block rounded hover:bg-gray-100 transition-colors">
          My Classes
        </Link>
      </nav>
    </aside>
  );
}
