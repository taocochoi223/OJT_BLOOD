    // src/layouts/RouterCustom.tsx
import { Outlet } from "react-router-dom";
import Header from "../components/layout/PatientHeader";
import Footer from "../components/layout/PatientFooter";

export default function RouterCustom({ showHeader = true, showFooter = true }) {
  return (
    <div className="flex flex-col min-h-screen">
      {showHeader && <Header />}


      <main className={`flex-grow px-6 ${showHeader ? "pt-20" : ""}`}>
        <Outlet />
      </main>

      
      {showFooter && <Footer />}
    </div>
  );
}
