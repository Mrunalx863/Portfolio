import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-16 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex items-center justify-center relative">
        
        {/*
          Copyright Text - This is the central element.
          We use justify-center on the parent div to center it.
        */}
        <p className="text-sm text-muted-foreground text-center">
          &copy;{new Date().getFullYear()} Mrunal Mehar. 
          Built with <span className="text-red-500">&hearts;</span> by MrunalMehar.
        </p>
        
        {/* Back-to-Top Button*/}
        <a
          href="#hero"
          aria-label="Scroll back to top"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary/50"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};