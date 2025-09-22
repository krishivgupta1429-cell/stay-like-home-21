import { Search, Globe, Menu, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">Airbnb</h1>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center border border-gray-200 rounded-full py-2 px-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="px-4 border-r border-gray-200">
              <span className="text-sm font-medium">Anywhere</span>
            </div>
            <div className="px-4 border-r border-gray-200">
              <span className="text-sm font-medium">Any week</span>
            </div>
            <div className="px-4">
              <span className="text-sm text-gray-500">Add guests</span>
            </div>
            <Button size="sm" className="rounded-full bg-primary hover:bg-primary/90 ml-2">
              <Search className="h-4 w-4" />
            </Button>
          </div>

          {/* User Menu */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <span className="text-sm font-medium hover:bg-gray-50 px-3 py-2 rounded-full cursor-pointer">
                Airbnb your home
              </span>
            </div>
            <div className="hidden md:block">
              <Link
                to="/contact-us"
                className="text-sm font-medium hover:bg-gray-50 px-3 py-2 rounded-full"
              >
                Contact
              </Link>
            </div>
            <Button variant="ghost" size="sm" className="rounded-full">
              <Globe className="h-4 w-4" />
            </Button>
            <div className="flex items-center border border-gray-200 rounded-full py-1.5 px-2 hover:shadow-md transition-shadow cursor-pointer">
              <Menu className="h-4 w-4 mx-1" />
              <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center ml-2">
                <User className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;