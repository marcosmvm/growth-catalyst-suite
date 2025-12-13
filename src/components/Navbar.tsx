import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">O</span>
            </div>
            <span className="text-xl font-heading text-foreground">OutreachAI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-1 cursor-pointer group">
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">Platform</span>
              <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            </div>
            <div className="flex items-center gap-1 cursor-pointer group">
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">Solutions</span>
              <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            </div>
            <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
            <div className="flex items-center gap-1 cursor-pointer group">
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">Resources</span>
              <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="nav" size="sm">Log in</Button>
            <Button variant="outline" size="sm">Schedule a demo</Button>
            <Button variant="hero" size="sm">Try for free</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/50 pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <span className="text-muted-foreground">Platform</span>
              <span className="text-muted-foreground">Solutions</span>
              <span className="text-muted-foreground">Pricing</span>
              <span className="text-muted-foreground">Resources</span>
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="outline" className="w-full">Log in</Button>
                <Button variant="hero" className="w-full">Try for free</Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
