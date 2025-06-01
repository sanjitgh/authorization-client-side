import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Toaster } from "react-hot-toast";

export default function HomeLayout() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-3 min-h-[calc(100vh-140px)]">
        <Outlet />
      </main>
      <Toaster />
      <Footer />
    </>
  );
}
