import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle"; 

const navItems = [
  { name: "HOME", href: "#hero" },
  { name: "ABOUT", href: "#about" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "PORTFOLIO", href: "#projects" },
  { name: "CONTACT", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // True when in Light Mode (document.documentElement does NOT have 'dark' class).
  const [useDarkText, setUseDarkText] = useState(false); 
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5);
      
      const sections = ["hero", "about", "experience", "projects", "contact"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= window.innerHeight * 0.2 && rect.bottom >= window.innerHeight * 0.2; 
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    const checkTheme = () => {
      // Set to true if 'dark' class is absent.
      const isLightMode = !document.documentElement.classList.contains("dark");
      setUseDarkText(isLightMode); 
    };

    const observer = new MutationObserver(() => {
      checkTheme();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    checkTheme();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (href) => {
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled 
          ? "py-1.5 bg-background/85 backdrop-blur-xl shadow-lg border-b border-border/50" 
          : "py-1.5 bg-background/70 backdrop-blur-lg"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          className="text-2xl font-bold text-primary flex items-center hover:scale-105 transition-transform duration-300"
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#hero");
          }}
        >
          <img 
            src={!useDarkText ? "mm_white.svg" : "mm_black.svg"} 
            alt="Logo" 
            className="h-9 w-auto transition-all duration-300 filter drop-shadow-sm"
            style={{
              filter: 'contrast(1.2) brightness(1.1)',
              fontWeight: 'bolder'
            }}
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className={cn(
                "relative px-3 py-2 text-sm font-medium tracking-wider transition-all duration-300 uppercase",
                activeSection === item.href.substring(1)
                  ? "text-primary"
                  
                  : useDarkText ? "text-black hover:text-primary" : "text-foreground hover:text-primary"
              )}
            >
              {item.name}
              {activeSection === item.href.substring(1) }
            </a>
          ))}
          <ThemeToggle className="ml-6 cursor-pointer" />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle className="cursor-pointer" />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
                "p-2 transition-colors relative z-50 cursor-pointer",
            
                useDarkText ? "text-black/90 hover:text-primary" : "text-foreground hover:text-primary"
            )}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed inset-x-0 top-0 bg-background/90 backdrop-blur-2xl z-40 md:hidden",
          "transition-all duration-300 ease-out",
          isMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center justify-center min-h-screen space-y-8 text-xl">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className={cn(
                "px-6 py-3 transition-all duration-300 font-medium tracking-wider uppercase",
                activeSection === item.href.substring(1)
                  ? "text-primary border-b border-primary"

                  : useDarkText ? "text-black/90 hover:text-primary" : "text-foreground hover:text-primary"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};