import AdminShell from "./components/AdminShell";
import AdminDashboard from "./components/AdminDashboard";

export default function AdminPage() {
  return (
    <AdminShell>
      <AdminDashboard />
    </AdminShell>
  );
}
