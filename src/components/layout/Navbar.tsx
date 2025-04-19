import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, Settings, Bell, User } from "lucide-react";

interface NavbarProps {
  toggleSidebar: () => void;
  currentPage: string;
  isSidebarOpen: boolean;
  isMobile: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  toggleSidebar,
  currentPage,
  isSidebarOpen,
  isMobile,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const toggleNotifications = () => {
    setNotificationsOpen(!notificationsOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchValue);
  };

  return (
    <nav
      className={`
        bg-white border-b border-gray-200 px-4 py-2.5 
        fixed top-0 right-0 z-50 transition-all duration-300
        ${isMobile ? "left-0" : isSidebarOpen ? "left-64" : "left-0"}
      `}
    >
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex items-center">
          <button
            type="button"
            className="p-2 mr-2 text-gray-600 rounded-lg lg:hidden hover:bg-gray-100"
            onClick={toggleSidebar}
          >
            <Menu className="w-6 h-6" />
          </button>

          <div className="breadcrumb flex items-center">
            <Link
              to="/dashboard"
              className="text-sm text-gray-500 hover:text-gray-900"
            >
              / Dashboard
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-sm font-medium text-gray-900">
              {currentPage}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <form onSubmit={handleSearch} className="hidden md:flex">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-4 h-4 text-gray-500" />
              </div>
              <input
                type="search"
                className="block w-full p-2 pl-10 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
          </form>
          <Link to="/auth/sign-in" className="flex items-center">
            <User className="w-5 h-5 text-gray-500 hover:text-gray-900" />
          </Link>
          <button
            type="button"
            className="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100"
          >
            <Settings className="w-5 h-5" />
          </button>

          <div className="relative">
            <button
              type="button"
              className="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100"
              onClick={toggleNotifications}
            >
              <Bell className="w-5 h-5" />
            </button>

            {notificationsOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg overflow-hidden z-20">
                <div className="py-2">
                  <div className="px-4 py-2 border-b border-gray-200">
                    <h3 className="text-sm font-semibold">Notifications</h3>
                  </div>

                  <div className="divide-y divide-gray-200">
                    <div className="px-4 py-3 hover:bg-gray-50 transition">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <User className="h-5 w-5 text-blue-600" />
                          </div>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">
                            <span className="font-semibold">New message</span>{" "}
                            from Laur
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            13 minutes ago
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="px-4 py-3 hover:bg-gray-50 transition">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                            <Bell className="h-5 w-5 text-purple-600" />
                          </div>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">
                            <span className="font-semibold">New album</span> by
                            Travis Scott
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            1 day ago
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="px-4 py-3 hover:bg-gray-50 transition">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                            <Bell className="h-5 w-5 text-green-600" />
                          </div>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">
                            Payment successfully completed
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            2 days ago
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
