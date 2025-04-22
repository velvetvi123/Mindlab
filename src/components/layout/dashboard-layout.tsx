
import { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import {
  LayoutDashboard,
  MessageSquare,
  User,
  Settings,
  Bell,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
  userType: "creator" | "specialist";
}

export function DashboardLayout({ children, userType }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleMobileSidebar = () => setMobileSidebarOpen(!mobileSidebarOpen);

  const handleLogout = () => {
    // In a real app, this would clear auth state
    console.log("User logged out");
    navigate("/");
  };

  const menuItems = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
      path: `/dashboard/${userType}`,
    },
    {
      title: "Profile",
      icon: <User className="h-5 w-5" />,
      path: `/dashboard/${userType}/profile`,
    },
    {
      title: "Messages",
      icon: <MessageSquare className="h-5 w-5" />,
      path: `/dashboard/${userType}/messages`,
    },
    {
      title: "Notifications",
      icon: <Bell className="h-5 w-5" />,
      path: `/dashboard/${userType}/notifications`,
    },
    {
      title: "Settings",
      icon: <Settings className="h-5 w-5" />,
      path: `/dashboard/${userType}/settings`,
    },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 hidden transform border-r border-border bg-card transition-all duration-300 ease-in-out md:block ${
          sidebarOpen ? "md:w-64" : "md:w-20"
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-border px-4">
          <Link to="/">
            <span
              className={`bg-gradient-to-r from-idea-600 to-forge-600 bg-clip-text text-xl font-bold text-transparent ${
                !sidebarOpen && "hidden"
              }`}
            >
              Mindlab
            </span>
            <span
              className={`bg-gradient-to-r from-idea-600 to-forge-600 bg-clip-text text-xl font-bold text-transparent ${
                sidebarOpen && "hidden"
              }`}
            >
              IF
            </span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="hidden md:flex"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex flex-col justify-between p-4 h-[calc(100vh-64px)]">
          <div className="space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="flex items-center rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <div className="mr-2 flex h-5 w-5 items-center justify-center">
                  {item.icon}
                </div>
                <span className={sidebarOpen ? "block" : "hidden"}>
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <ThemeToggle />
              {sidebarOpen && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLogout}
                  className="flex items-center"
                >
                  <LogOut className="mr-2 h-4 w-4" /> Logout
                </Button>
              )}
            </div>
            {!sidebarOpen && (
              <Button
                variant="ghost"
                size="icon"
                onClick={handleLogout}
                className="w-full"
              >
                <LogOut className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Header with Sidebar Button */}
      <div className="fixed top-0 left-0 right-0 z-40 border-b border-border bg-background md:hidden">
        <div className="flex h-16 items-center justify-between px-4">
          <Button variant="ghost" size="icon" onClick={toggleMobileSidebar}>
            <Menu className="h-5 w-5" />
          </Button>
          <Link to="/">
            <span className="text-xl font-bold">Mindlab</span>
          </Link>
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Sidebar */}
      {mobileSidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={toggleMobileSidebar} />
          <div className="fixed inset-y-0 left-0 w-3/4 max-w-xs bg-card p-4">
            <div className="flex items-center justify-between mb-6">
              <Link to="/" className="text-xl font-bold">
                Mindlab
              </Link>
              <Button variant="ghost" size="icon" onClick={toggleMobileSidebar}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.path}
                  className="flex items-center rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                  onClick={toggleMobileSidebar}
                >
                  <div className="mr-2 flex h-5 w-5 items-center justify-center">
                    {item.icon}
                  </div>
                  <span>{item.title}</span>
                </Link>
              ))}
            </div>
            <div className="absolute bottom-8 w-full left-0 px-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="flex items-center w-full"
              >
                <LogOut className="mr-2 h-4 w-4" /> Logout
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 ${
          sidebarOpen ? "md:ml-64" : "md:ml-20"
        } pt-16 md:pt-0`}
      >
        <main className="container p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
