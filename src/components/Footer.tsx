import { Link } from "react-router-dom";

const footerLinks = {
  Services: [
    { label: "Lead Generation", href: "/services/lead-generation" },
    { label: "Cold Email Campaigns", href: "/services/cold-email-campaigns" },
    { label: "Appointment Setting", href: "/services/appointment-setting" },
    { label: "How It Works", href: "/how-it-works" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "Blog", href: "/blog" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Help Center", href: "/help" },
  ],
};

const Footer = () => {
  return (
    <footer className="py-20 relative overflow-hidden border-t border-border/50">
      {/* Background effects */}
      <div className="absolute inset-0 mesh-gradient opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
          {/* Logo & Description */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-1 mb-6">
              <span className="text-2xl font-bold tracking-tight text-foreground">QUANTUM</span>
              <span className="text-2xl font-bold tracking-tight text-primary">INSIGHTS</span>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-xs mb-6">
              Cold email that works. Pipeline that grows. Results you can measure.
            </p>
            <div className="exclusive-badge inline-flex text-[10px]">
              Enterprise Ready
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-6 text-sm uppercase tracking-wider">{category}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors premium-underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Quantum Insights. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors premium-underline">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors premium-underline">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors premium-underline">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;