import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const MainLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  const getCurrentPageName = () => {
    const path = location.pathname;
    if (path.includes("/dashboard/sales")) return "Sales";
    if (path.includes("/dashboard/analytics")) return "Analytics Dashboard";
    return "Dashboard";
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth < 1024) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`
          fixed inset-y-0 left-0 z-30 w-64 
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:relative lg:translate-x-0
        `}
      >
        <Sidebar />
      </div>

      {/* Overlay */}
      {sidebarOpen && isMobile && (
        <div
          className="fixed inset-0 z-20 bg-gray-900 bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <div
        className={`
          flex flex-col flex-1 min-w-0 w-full
          transition-all duration-300 ease-in-out
          ${isMobile ? "pl-0" : ""}
        `}
      >
        <Navbar
          toggleSidebar={toggleSidebar}
          currentPage={getCurrentPageName()}
          isSidebarOpen={sidebarOpen}
          isMobile={isMobile}
        />

        <main className="flex-1 p-4 mt-16 overflow-x-hidden overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
