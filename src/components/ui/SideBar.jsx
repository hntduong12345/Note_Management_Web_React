/* eslint-disable no-unused-vars */
import {
  LayoutDashboard,
  FilePlus,
  FolderOpen,
  Tag,
  Trash2,
  ChevronRight,
  BrainCircuit,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function SideBar() {
  const { auth, setAuth } = useContext(AuthContext);
  const { pathname } = useLocation();

  const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/notes", label: "Note Editor", icon: FilePlus },
    { href: "/categories", label: "Categories", icon: FolderOpen },
    { href: "/trash", label: "Trash", icon: Trash2 },
  ];

  useEffect(() => {
    setAuth({
      isAuthenticated: true,
      email: "test@gmail.com",
    });
  }, []);

  return (
    <aside className="flex flex-col w-[200px] min-h-screen border-r border-border bg-card">
      {/* Logo */}
      <div className="flex items-center gap-2.5 pl-[1rem] py-5 h-[5rem]">
        <div className="flex items-center justify-center  w-[2rem] h-[2rem] mr-[1rem] rounded-md bg-primary">
          <BrainCircuit className="w-5 h-5 text-primary-foreground" />
        </div>
        <span className="text-[1.2rem] font-[1000] text-foreground tracking-tight">
          MindHub
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-[0.5rem] py-[1.6rem] border border-gray-700">
        <ul className="flex flex-col gap-1 list-none">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + "/");
            const Icon = item.icon;
            return (
              <li
                key={item.href}
                className={`h-[2.8rem] flex items-center gap-3 px-3 py-2 mb-[0.3rem] rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-sidebar-accent text-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                <Link
                  to={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-[800] transition-colors no-underline ${
                    isActive
                      ? "bg-sidebar-accent text-primary"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  <Icon className="w-4 h-4 mx-[0.8rem]" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Profile */}
      {auth.isAuthenticated && (
        <div className="flex items-center border-t border-border px-4 py-4 h-[3.6rem]">
          <div className="flex items-center w-full ml-[0.3rem]">
            <div className="w-[2rem] h-[2rem] rounded-full bg-accent flex items-center justify-center text-xs font-semibold text-accent-foreground">
              {auth?.email
                .split(" ")
                .map((w) => w[0])
                .join("")
                .toUpperCase()}
            </div>
            <div className="flex-1 min-w-0 ml-[0.3rem]">
              <p className="text-sm font-medium text-foreground truncate">
                {auth?.email}
              </p>
              {/* <p className="text-xs text-muted-foreground">{}</p> */}
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground ml-auto" />
          </div>
        </div>
      )}
    </aside>
  );
}
