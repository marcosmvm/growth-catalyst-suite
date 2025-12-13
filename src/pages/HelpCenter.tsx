import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  BookOpen, 
  Settings, 
  Mail, 
  BarChart3, 
  Users, 
  HelpCircle,
  ArrowRight,
  MessageCircle
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    icon: BookOpen,
    title: "Getting Started",
    description: "Learn the basics of working with OutreachAI",
    articles: [
      "What to expect during onboarding",
      "How to define your ICP",
      "Setting up CRM integration",
      "Understanding your dashboard"
    ]
  },
  {
    icon: Mail,
    title: "Campaign Management",
    description: "Everything about email campaigns and sequences",
    articles: [
      "How campaigns are structured",
      "Understanding email sequences",
      "A/B testing best practices",
      "Reviewing campaign performance"
    ]
  },
  {
    icon: Settings,
    title: "Technical Setup",
    description: "Domain, deliverability, and integrations",
    articles: [
      "Domain setup requirements",
      "Email warmup explained",
      "CRM integration options",
      "Lead handoff workflows"
    ]
  },
  {
    icon: BarChart3,
    title: "Reporting & Analytics",
    description: "Understanding your metrics and reports",
    articles: [
      "Reading your weekly report",
      "Key metrics explained",
      "Pipeline tracking",
      "ROI calculation"
    ]
  },
  {
    icon: Users,
    title: "Lead Qualification",
    description: "How we qualify and deliver leads",
    articles: [
      "What makes a lead 'sales-qualified'",
      "Lead scoring criteria",
      "Meeting confirmation process",
      "Providing feedback on leads"
    ]
  },
  {
    icon: HelpCircle,
    title: "FAQs",
    description: "Common questions and answers",
    articles: [
      "Billing and invoicing",
      "Contract terms",
      "Scaling your campaigns",
      "Cancellation policy"
    ]
  }
];

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-12 px-6 bg-card">
          <div className="container mx-auto text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading text-foreground mb-6">
              How can we help?
            </h1>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14"
              />
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all cursor-pointer group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-foreground mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                  <ul className="space-y-2">
                    {category.articles.map((article, i) => (
                      <li key={i} className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                        → {article}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-16 px-6 bg-card">
          <div className="container mx-auto max-w-3xl text-center">
            <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-heading text-foreground mb-4">
              Can't find what you're looking for?
            </h2>
            <p className="text-muted-foreground mb-6">
              Our team is here to help. Reach out and we'll get back to you within 24 hours.
            </p>
            <Link to="/contact">
              <Button variant="hero" className="gap-2">
                Contact Support <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HelpCenter;
