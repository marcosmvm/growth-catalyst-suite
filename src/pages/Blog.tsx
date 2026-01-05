import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "The Ultimate Guide to Cold Email Deliverability in 2025",
    excerpt: "Land in the inbox, not spam. Domain setup, warmup protocols, and the technical foundations that actually work.",
    category: "Deliverability",
    author: "Quantum Insights",
    date: "Jan 3, 2025",
    readTime: "8 min read",
    featured: true
  },
  {
    title: "How to Define Your Ideal Customer Profile",
    excerpt: "A simple framework for identifying the prospects most likely to buy. No fluff, just what works.",
    category: "Strategy",
    author: "Quantum Insights",
    date: "Dec 28, 2024",
    readTime: "6 min read",
    featured: false
  },
  {
    title: "Subject Lines That Get 60%+ Open Rates",
    excerpt: "We analyzed 50,000 cold emails. Here are the patterns that drive the highest opens.",
    category: "Copywriting",
    author: "Quantum Insights",
    date: "Dec 20, 2024",
    readTime: "5 min read",
    featured: false
  },
  {
    title: "5 Signs Your Cold Email Strategy Needs Work",
    excerpt: "Low reply rates? Getting ignored? Here are the telltale signs your outbound needs fixing.",
    category: "Strategy",
    author: "Quantum Insights",
    date: "Dec 15, 2024",
    readTime: "4 min read",
    featured: false
  },
  {
    title: "Building a Predictable B2B Sales Pipeline",
    excerpt: "Create a consistent flow of qualified opportunities. End the feast-or-famine cycle.",
    category: "Pipeline",
    author: "Quantum Insights",
    date: "Dec 10, 2024",
    readTime: "7 min read",
    featured: false
  },
  {
    title: "The ROI of Outsourced Lead Generation",
    excerpt: "Internal SDR teams vs. outsourcing outbound. The real costs and returns, broken down.",
    category: "ROI",
    author: "Quantum Insights",
    date: "Dec 5, 2024",
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
        {/* Hero Section with Premium Effects */}
        <section className="pt-32 pb-12 px-6 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <div className="container mx-auto text-center max-w-4xl relative z-10">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20"
            >
              Blog
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-heading text-foreground mb-6 leading-tight"
            >
              Outbound that works.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Proven strategies. No fluff. Just results.
            </motion.p>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="pb-12 px-6">
            <div className="container mx-auto max-w-5xl">
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="glass rounded-2xl p-8 md:p-12 border border-primary/20 hover:border-primary/40 transition-all cursor-pointer group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 rounded-full gradient-bg text-primary-foreground text-sm font-medium mb-4">
                    {featuredPost.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 max-w-2xl">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Blog Grid */}
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all cursor-pointer group"
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
                    <span className="text-primary">•</span>
                    <span>{post.readTime}</span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA with Premium Styling */}
        <section className="py-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute top-0 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="container mx-auto text-center max-w-3xl relative z-10"
          >
            <h2 className="text-3xl font-heading text-foreground mb-4">
              Want us to run your outbound?
            </h2>
            <p className="text-muted-foreground mb-8">
              We handle campaigns. You close deals.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg" className="gap-2">
                Book a Call <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;