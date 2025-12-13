import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "The Ultimate Guide to Cold Email Deliverability in 2024",
    excerpt: "Learn how to land in the inbox, not spam. We cover domain setup, warmup protocols, and the technical foundations for successful cold outreach.",
    category: "Deliverability",
    author: "OutreachAI Team",
    date: "Dec 10, 2024",
    readTime: "8 min read",
    featured: true
  },
  {
    title: "How to Define Your Ideal Customer Profile (ICP)",
    excerpt: "A step-by-step framework for identifying and targeting the prospects most likely to buy from you.",
    category: "Strategy",
    author: "OutreachAI Team",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    featured: false
  },
  {
    title: "Cold Email Subject Lines That Get 60%+ Open Rates",
    excerpt: "We analyzed 50,000 cold emails to find the patterns that drive the highest open rates. Here's what works.",
    category: "Copywriting",
    author: "OutreachAI Team",
    date: "Nov 28, 2024",
    readTime: "5 min read",
    featured: false
  },
  {
    title: "5 Signs Your Cold Email Strategy Needs an Overhaul",
    excerpt: "Low reply rates? Getting ignored? Here are the telltale signs that your outbound approach needs fixing.",
    category: "Strategy",
    author: "OutreachAI Team",
    date: "Nov 20, 2024",
    readTime: "4 min read",
    featured: false
  },
  {
    title: "Building a Predictable B2B Sales Pipeline",
    excerpt: "How to create a consistent flow of qualified opportunities without the feast-or-famine cycle.",
    category: "Pipeline",
    author: "OutreachAI Team",
    date: "Nov 15, 2024",
    readTime: "7 min read",
    featured: false
  },
  {
    title: "The ROI of Outsourced Lead Generation",
    excerpt: "Breaking down the real costs and returns of building internal SDR teams vs. outsourcing outbound.",
    category: "ROI",
    author: "OutreachAI Team",
    date: "Nov 8, 2024",
    readTime: "6 min read",
    featured: false
  }
];

const Blog = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-12 px-6">
          <div className="container mx-auto text-center max-w-4xl">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Blog
            </span>
            <h1 className="text-4xl md:text-6xl font-heading text-foreground mb-6 leading-tight">
              Cold Email Insights & Best Practices
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Actionable strategies to improve your outbound campaigns and generate more qualified leads.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="pb-12 px-6">
            <div className="container mx-auto max-w-5xl">
              <div className="bg-card rounded-2xl p-8 md:p-12 border border-border hover:border-primary/50 transition-all cursor-pointer">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  {featuredPost.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Grid */}
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post, index) => (
                <article
                  key={index}
                  className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all cursor-pointer group"
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-heading text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-card">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-3xl font-heading text-foreground mb-4">
              Ready to Apply These Strategies?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let us run your cold email campaigns while you focus on closing deals.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg" className="gap-2">
                Get Started <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
