import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, Mail, Linkedin, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { label: "Home", path: "/", showOnMobile: true, showOnDesktop: true },
  { label: "Resume & Portfolio", path: "/experience", showOnMobile: false, showOnDesktop: true },
  { label: "Resume", mobileLabel: "Resume", path: "/resume", showOnMobile: true, showOnDesktop: false },
  { label: "Portfolio", mobileLabel: "Portfolio", path: "/portfolio", showOnMobile: true, showOnDesktop: false },
  { label: "Blog", path: "/blog", showOnMobile: true, showOnDesktop: true },
  { label: "Photography Showcase", mobileLabel: "Photos", path: "/photography", showOnMobile: true, showOnDesktop: true },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b border-neutral-800 bg-black sticky top-0 z-50">
      <div className="container max-w-5xl px-6 py-4 flex items-center justify-between relative">
        <Link to="/" className="font-heading text-lg font-semibold text-white z-10">
          Zack Chen
        </Link>

        {/* Desktop navigation - Centered */}
        <ul className="hidden md:flex items-center gap-6 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
          {navItems.filter(item => item.showOnDesktop).map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={cn(
                  "font-body text-sm tracking-wide transition-colors hover:text-blue-400",
                  location.pathname === item.path
                    ? "text-white font-medium"
                    : "text-gray-400"
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side (Contact Dropdown & Mobile Toggle) */}
        <div className="flex items-center gap-4 z-10">
          {/* Contact Dropdown - Only show on non-home pages */}
          {location.pathname !== "/" && (
            <div className="hidden md:block">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 font-body text-sm font-medium text-white hover:text-blue-400 transition-colors outline-none">
                  Contact Me <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-black border-gray-800 text-gray-300">
                  <DropdownMenuItem className="focus:bg-gray-900 focus:text-white cursor-pointer">
                    <a
                      href="mailto:zack.chen@uwaterloo.ca"
                      className="flex items-center gap-2 w-full"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Email</span>
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="focus:bg-gray-900 focus:text-white cursor-pointer">
                    <a
                      href="https://www.linkedin.com/in/zackchenuw/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 w-full"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 hover:text-blue-400 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <ul className="flex flex-col py-4">
            {navItems.filter(item => item.showOnMobile).map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "font-body text-sm tracking-wide transition-colors hover:text-blue-400 block px-6 py-3",
                    location.pathname === item.path
                      ? "text-white font-medium bg-gray-900"
                      : "text-gray-400"
                  )}
                >
                  {item.mobileLabel || item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

