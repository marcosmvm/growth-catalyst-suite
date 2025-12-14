import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CalendlyModal from "./CalendlyModal";
import GetStartedModal from "./GetStartedModal";

const serviceLinks = [
  { label: "Lead Generation", href: "/services/lead-generation" },
  { label: "Cold Email Campaigns", href: "/services/cold-email-campaigns" },
  { label: "Appointment Setting", href: "/services/appointment-setting" },
];

const industryLinks = [
  { label: "SaaS Companies", href: "/cold-email-for-saas" },
  { label: "Agencies", href: "/cold-email-for-agencies" },
  { label: "Consulting", href: "/cold-email-for-consulting" },
  { label: "Tech Companies", href: "/cold-email-for-tech" },
  { label: "Staffing & Recruiting", href: "/cold-email-for-staffing" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [calendlyOpen, setCalendlyOpen] = useState(false);
  const [getStartedOpen, setGetStartedOpen] = useState(false);

  const [industriesOpen, setIndustriesOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/30">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-xl font-heading text-foreground tracking-tight">OutreachAI</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors outline-none">
                  Services
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="glass-strong border-border/50 z-50">
                  <DropdownMenuItem asChild>
                    <Link to="/services" className="w-full cursor-pointer">
                      All Services
                    </Link>
                  </DropdownMenuItem>
                  {serviceLinks.map((link) => (
                    <DropdownMenuItem key={link.href} asChild>
                      <Link to={link.href} className="w-full cursor-pointer">
                        {link.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors outline-none">
                  Industries
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="glass-strong border-border/50 z-50">
                  {industryLinks.map((link) => (
                    <DropdownMenuItem key={link.href} asChild>
                      <Link to={link.href} className="w-full cursor-pointer">
                        {link.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Link to="/how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors premium-underline">
                How It Works
              </Link>
              <Link to="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors premium-underline">
                Pricing
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors premium-underline">
                About
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors premium-underline">
                Contact
              </Link>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Button variant="outline" size="sm" onClick={() => setCalendlyOpen(true)}>
                Schedule Demo
              </Button>
              <Button variant="hero" size="sm" onClick={() => setGetStartedOpen(true)}>
                Request Access
              </Button>
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
            <div className="md:hidden mt-4 pb-4 border-t border-border/30 pt-4 animate-fade-in">
              <div className="flex flex-col gap-4">
                {/* Mobile Services Accordion */}
                <div>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center justify-between w-full text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Services
                    <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {servicesOpen && (
                    <div className="mt-2 ml-4 flex flex-col gap-2">
                      <Link 
                        to="/services" 
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors" 
                        onClick={() => setIsOpen(false)}
                      >
                        All Services
                      </Link>
                      {serviceLinks.map((link) => (
                        <Link
                          key={link.href}
                          to={link.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                {/* Mobile Industries Accordion */}
                <div>
                  <button
                    onClick={() => setIndustriesOpen(!industriesOpen)}
                    className="flex items-center justify-between w-full text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Industries
                    <ChevronDown className={`w-4 h-4 transition-transform ${industriesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {industriesOpen && (
                    <div className="mt-2 ml-4 flex flex-col gap-2">
                      {industryLinks.map((link) => (
                        <Link
                          key={link.href}
                          to={link.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <Link to="/how-it-works" className="text-muted-foreground hover:text-foreground transition-colors" onClick={() => setIsOpen(false)}>
                  How It Works
                </Link>
                <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors" onClick={() => setIsOpen(false)}>
                  Pricing
                </Link>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors" onClick={() => setIsOpen(false)}>
                  About
                </Link>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
                <div className="flex flex-col gap-2 pt-4">
                  <Button variant="outline" className="w-full" onClick={() => { setCalendlyOpen(true); setIsOpen(false); }}>
                    Schedule Demo
                  </Button>
                  <Button variant="hero" className="w-full" onClick={() => { setGetStartedOpen(true); setIsOpen(false); }}>
                    Request Access
                  </Button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      <CalendlyModal open={calendlyOpen} onOpenChange={setCalendlyOpen} />
      <GetStartedModal open={getStartedOpen} onOpenChange={setGetStartedOpen} />
    </>
  );
};

export default Navbar;