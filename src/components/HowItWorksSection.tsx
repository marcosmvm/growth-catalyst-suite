import { CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Import Your Leads",
    description: "Connect your CRM or upload a CSV. Our AI enriches contact data and verifies emails automatically.",
    features: ["CRM integrations", "Email verification", "Data enrichment"],
  },
  {
    number: "02",
    title: "Craft Perfect Emails",
    description: "Use AI-powered templates that adapt to each recipient. Personalize at scale without losing authenticity.",
    features: ["AI personalization", "A/B testing", "Template library"],
  },
  {
    number: "03",
    title: "Launch & Optimize",
    description: "Schedule campaigns at optimal send times. Our AI learns from responses to improve future outreach.",
    features: ["Smart scheduling", "Auto follow-ups", "Learning algorithm"],
  },
  {
    number: "04",
    title: "Convert & Scale",
    description: "Track every interaction, score leads, and focus your energy on prospects ready to convert.",
    features: ["Lead scoring", "Pipeline tracking", "Revenue attribution"],
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-heading text-foreground mb-6">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground">
            Get started in minutes and see results within your first campaign.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative group"
            >
              <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full">
                {/* Step Number */}
                <span className="text-6xl font-heading gradient-text opacity-30 absolute top-4 right-6">
                  {step.number}
                </span>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-heading text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="flex flex-wrap gap-3">
                    {step.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm text-foreground bg-secondary/50 rounded-full px-4 py-2"
                      >
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
