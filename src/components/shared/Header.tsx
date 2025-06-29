import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { navLinks } from "../../constants/navLinks";

const Header = () => {
  const location = useLocation();
  const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(true);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isActive = (path: any) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsAnnouncementVisible(false);
      } else if (window.scrollY < 50) {
        setIsAnnouncementVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50 w-full px-2 py-2 md:px-6 md:py-3">
      <div className="border rounded-sm">
        {/* Announcement Bar */}
        <div
          className={`bg-primary rounded-t-sm transition-all text-primary-foreground duration-500 ease-in-out ${
            isAnnouncementVisible
              ? "max-h-12 py-3 opacity-100"
              : "max-h-0 py-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="container mx-auto px-4 flex items-center justify-center">
            <div className="flex items-center space-x-2 text-sm font-medium">
              <span>Free Courses ⭐ Sale Ends Soon, Get It Now</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <header
          className={`bg-background/65 backdrop-blur-sm transition-all duration-300 ${
            !isAnnouncementVisible ? "rounded-sm" : "rounded-b-sm"
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="flex h-16 items-center justify-between">
              {/* Logo */}
              <Link to="/" className="flex items-center">
                <span className="font-bold text-2xl text-primary">
                  E-Learning
                </span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      isActive(link.path)
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Auth Buttons */}
              <div className="hidden lg:flex items-center space-x-3">
                <Button variant="secondary" asChild>
                  <Link to="/signup">Sign Up</Link>
                </Button>
                <Button asChild>
                  <Link to="/login">Login</Link>
                </Button>
              </div>

              {/* Mobile Menu Sheet */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="lg:hidden">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="lg:hidden p-0">
                  <SheetHeader className="border-b pb-4 pt-6">
                    <SheetTitle className="text-center text-primary text-xl">
                      E-Learning
                    </SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col space-y-1 p-4">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.path}>
                        <Link
                          to={link.path}
                          className={`px-4 py-3 text-sm font-medium rounded-md transition-colors hover:bg-muted ${
                            isActive(link.path)
                              ? "text-primary bg-primary/10"
                              : "text-muted-foreground"
                          }`}
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                  <div className="flex flex-col space-y-3 p-4 mt-4 border-t">
                    <SheetClose asChild>
                      <Button variant="secondary" asChild className="w-full">
                        <Link to="/signup">Sign Up</Link>
                      </Button>
                    </SheetClose>
                    <SheetClose asChild>
                      <Button asChild className="w-full">
                        <Link to="/login">Login</Link>
                      </Button>
                    </SheetClose>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
