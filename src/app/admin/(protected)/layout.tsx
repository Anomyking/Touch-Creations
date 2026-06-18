import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminSidebar from "@/components/admin/AdminSidebar";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "Touch creations-admin";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const auth = cookieStore.get("admin_auth");
  if (auth?.value !== ADMIN_PASSWORD) {
    redirect("/admin/login");
  }
  return (
    <div className="min-h-screen bg-slate-50 flex">
      <AdminSidebar />
      <main className="flex-1 overflow-x-hidden min-w-0">{children}</main>
    </div>
  );
}

