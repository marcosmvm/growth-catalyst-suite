import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@outreachai.com",
    href: "mailto:hello@outreachai.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(555) 123-4567",
    href: "tel:+15551234567"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    href: null
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: null
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto text-center max-w-4xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              Get in Touch
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-heading text-foreground mb-6 leading-tight"
            >
              Let's Talk About Your Pipeline
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Ready to fill your calendar with qualified meetings? Let's discuss how we can help grow your business.
            </motion.p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="pb-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div 
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="bg-card rounded-2xl p-8 border border-border"
              >
                <h2 className="text-2xl font-heading text-foreground mb-6">
                  Send us a message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Acme Inc."
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      How can we help?
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your lead generation goals..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                    />
                  </div>
                  <Button variant="hero" type="submit" className="w-full gap-2">
                    Send Message <ArrowRight className="w-4 h-4" />
                  </Button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div 
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-heading text-foreground mb-4">
                    Prefer to talk?
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Schedule a 30-minute strategy call to discuss your goals and see if we're a fit. No pressure, no sales pitch—just an honest conversation about your pipeline needs.
                  </p>
                  <Button variant="outline" size="lg" className="gap-2">
                    Schedule a Call <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>

                <div className="pt-8 border-t border-border">
                  <h3 className="font-heading text-foreground mb-6">Contact Information</h3>
                  <div className="grid gap-4">
                    {contactInfo.map((item, index) => (
                      <motion.div 
                        key={index} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-center gap-4"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">{item.label}</div>
                          {item.href ? (
                            <a href={item.href} className="text-foreground hover:text-primary transition-colors">
                              {item.value}
                            </a>
                          ) : (
                            <div className="text-foreground">{item.value}</div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-card rounded-xl border border-primary/20">
                  <h3 className="font-heading text-foreground mb-2">🚀 Quick Response Guarantee</h3>
                  <p className="text-sm text-muted-foreground">
                    We respond to all inquiries within 24 hours during business days. For urgent matters, call us directly.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;