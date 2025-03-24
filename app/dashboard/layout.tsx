import "../../components/Header";
import "../../components/Sidebar";
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full">
      {children}
    </div>
  );
}

