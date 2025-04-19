import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface SidebarItemProps {
  label: string;
  to?: string;
  isActive?: boolean;
  hasSubmenu?: boolean;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  to = "#",
  isActive = false,
  hasSubmenu = false,
  onClick,
}) => {
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
        "hover:bg-white/10",
        {
          "bg-white/10": isActive,
        }
      )}
      onClick={onClick}
    >
      <span className="flex-1 truncate">{label}</span>
      {hasSubmenu && <ChevronDown className="h-4 w-4 opacity-50" />}
    </Link>
  );
};

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [openSections, setOpenSections] = useState({
    dashboards: true,
    pages: false,
    applications: false,
    ecommerce: false,
    authentication: false,
    docs: false,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <aside className="bg-[#212121] text-white w-64 min-h-screen flex flex-col border-r border-sidebar-border fixed left-0 top-0 bottom-0 z-10">
      <div className="p-4 border-b border-white/10 flex items-center gap-3">
        <div className="bg-blue-500 h-9 w-9 rounded-lg flex items-center justify-center text-white font-bold text-xl">
          M
        </div>
        <span className="font-semibold text-lg text-white">
          Material Dashboard
        </span>
      </div>
      <div className="flex-1 overflow-y-auto py-4">
        {/* Dashboards Section */}
        <div className="mb-6">
          <div
            onClick={() => toggleSection("dashboards")}
            className="px-4 mb-2 flex items-center justify-between cursor-pointer group"
          >
            <span className="text-xs uppercase text-white/60 font-semibold group-hover:text-white/80">
              Dashboards
            </span>
            <ChevronDown
              className={cn(
                "h-4 w-4 text-white/60 transition-transform group-hover:text-white/80",
                openSections.dashboards ? "rotate-180" : ""
              )}
            />
          </div>
          <div
            className={cn(
              "space-y-1 px-3",
              openSections.dashboards ? "block" : "hidden"
            )}
          >
            <SidebarItem
              label="Analytics"
              to="/dashboard/analytics"
              isActive={location.pathname === "/dashboard/analytics"}
            />
            <SidebarItem
              label="Sales"
              to="/dashboard/sales"
              isActive={location.pathname === "/dashboard/sales"}
            />
          </div>
        </div>

        {/* Pages Section */}
        <div className="mb-6">
          <div
            onClick={() => toggleSection("pages")}
            className="px-4 mb-2 flex items-center justify-between cursor-pointer group"
          >
            <span className="text-xs uppercase text-white/60 font-semibold group-hover:text-white/80">
              Pages
            </span>
            <ChevronDown
              className={cn(
                "h-4 w-4 text-white/60 transition-transform group-hover:text-white/80",
                openSections.pages ? "rotate-180" : ""
              )}
            />
          </div>
          <div
            className={cn(
              "space-y-1 px-3",
              openSections.pages ? "block" : "hidden"
            )}
          ></div>
        </div>

        {/* Applications Section */}
        <div className="mb-6">
          <div
            onClick={() => toggleSection("applications")}
            className="px-4 mb-2 flex items-center justify-between cursor-pointer group"
          >
            <span className="text-xs uppercase text-white/60 font-semibold group-hover:text-white/80">
              Applications
            </span>
            <ChevronDown
              className={cn(
                "h-4 w-4 text-white/60 transition-transform group-hover:text-white/80",
                openSections.applications ? "rotate-180" : ""
              )}
            />
          </div>
          <div
            className={cn(
              "space-y-1 px-3",
              openSections.applications ? "block" : "hidden"
            )}
          ></div>
        </div>

        {/* Ecommerce Section */}
        <div className="mb-6">
          <div
            onClick={() => toggleSection("ecommerce")}
            className="px-4 mb-2 flex items-center justify-between cursor-pointer group"
          >
            <span className="text-xs uppercase text-white/60 font-semibold group-hover:text-white/80">
              Ecommerce
            </span>
            <ChevronDown
              className={cn(
                "h-4 w-4 text-white/60 transition-transform group-hover:text-white/80",
                openSections.ecommerce ? "rotate-180" : ""
              )}
            />
          </div>
          <div
            className={cn(
              "space-y-1 px-3",
              openSections.ecommerce ? "block" : "hidden"
            )}
          ></div>
        </div>

        {/* Authentication Section */}
        <div className="mb-6">
          <div
            onClick={() => toggleSection("authentication")}
            className="px-4 mb-2 flex items-center justify-between cursor-pointer group"
          >
            <span className="text-xs uppercase text-white/60 font-semibold group-hover:text-white/80">
              Authentication
            </span>
            <ChevronDown
              className={cn(
                "h-4 w-4 text-white/60 transition-transform group-hover:text-white/80",
                openSections.authentication ? "rotate-180" : ""
              )}
            />
          </div>
          <div
            className={cn(
              "space-y-1 px-3",
              openSections.authentication ? "block" : "hidden"
            )}
          ></div>
        </div>

        {/* Docs Section */}
        <div className="mb-6">
          <div
            onClick={() => toggleSection("docs")}
            className="px-4 mb-2 flex items-center justify-between cursor-pointer group"
          >
            <span className="text-xs uppercase text-white/60 font-semibold group-hover:text-white/80">
              Docs
            </span>
            <ChevronDown
              className={cn(
                "h-4 w-4 text-white/60 transition-transform group-hover:text-white/80",
                openSections.docs ? "rotate-180" : ""
              )}
            />
          </div>
          <div
            className={cn(
              "space-y-1 px-3",
              openSections.docs ? "block" : "hidden"
            )}
          ></div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
