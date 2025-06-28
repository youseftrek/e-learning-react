import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-3 md:px-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
