import VerticalLandingPage from "@/components/VerticalLandingPage";
import { Code } from "lucide-react";

const ColdEmailForSaaS = () => {
  return (
    <VerticalLandingPage
      industry="SaaS"
      badge="Cold Email for SaaS"
      headline="More demos.|Lower CAC.|No SDR burnout."
      subheadline="15-30 qualified demos per month. Outbound that cuts through inbox noise."
      icon={Code}
      painPoints={[
        {
          title: "Long Sales Cycles Stalling Growth",
          description: "Enterprise deals take months. Your pipeline needs constant feeding. We keep the top of funnel full while you close.",
        },
        {
          title: "High CAC Eating Your Margins",
          description: "Paid ads and inbound are expensive and unpredictable. Cold email delivers qualified leads at a fraction of the cost.",
        },
        {
          title: "Competitive Market Saturation",
          description: "Every buyer's inbox is flooded. Our hyper-personalized approach cuts through and gets responses.",
        },
        {
          title: "SDR Burnout and Turnover",
          description: "Training SDRs is expensive. Turnover kills momentum. We become your consistent outbound engine.",
        },
      ]}
      benefits={[
        "15-30 qualified demos booked per month",
        "Fully managed campaigns — zero internal bandwidth",
        "Targeting by tech stack, funding stage, and company size",
        "Multi-touch sequences optimized for SaaS buyers",
        "Weekly reporting on pipeline and conversion metrics",
        "CRM integration and seamless lead handoff",
        "Continuous A/B testing and optimization",
        "Scale up or down based on your capacity",
      ]}
      stats={[
        { value: "47%", label: "Avg. Open Rate" },
        { value: "12%", label: "Reply Rate" },
        { value: "23", label: "Demos/Month (Avg)" },
        { value: "40%", label: "Lower CAC" },
      ]}
      testimonial={{
        quote: "5 demos to 25+ in 90 days. $180K ARR closed from their leads.",
        author: "Marcus Chen",
        role: "VP of Sales",
        company: "CloudSync (Series A SaaS)",
      }}
    />
  );
};

export default ColdEmailForSaaS;
