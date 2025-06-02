import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import DashboardHeader from "../components/DashboardHeader";

export default function DashboardLayout() {
  return (
    <>
      <DashboardHeader />
      <main className="container mx-auto px-3 min-h-[calc(100vh-140px)]">
        <Outlet />
      </main>
      <Toaster />
    </>
  );
}
