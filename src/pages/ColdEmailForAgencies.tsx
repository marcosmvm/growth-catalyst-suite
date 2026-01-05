import VerticalLandingPage from "@/components/VerticalLandingPage";
import { Megaphone } from "lucide-react";

const ColdEmailForAgencies = () => {
  return (
    <VerticalLandingPage
      industry="Agencies"
      badge="Cold Email for Agencies"
      headline="Referrals got you here.|Outbound gets you further."
      subheadline="10-20 qualified sales calls per month. For agencies ready to stop waiting."
      icon={Megaphone}
      painPoints={[
        {
          title: "Feast-or-Famine Revenue",
          description: "One month you're turning down work. The next you're scrambling. Predictable outbound ends the rollercoaster.",
        },
        {
          title: "Referrals Don't Scale",
          description: "Word-of-mouth got you here. It won't get you to $1M+. We create a repeatable acquisition engine.",
        },
        {
          title: "No Time for Business Development",
          description: "You're busy delivering for clients, not prospecting. We handle outreach while you focus on fulfillment.",
        },
        {
          title: "Competing with Bigger Agencies",
          description: "Enterprise agencies have sales teams. We level the playing field with targeted outreach to your ideal clients.",
        },
      ]}
      benefits={[
        "10-20 qualified prospect calls per month",
        "Targeting by industry, company size, and marketing spend",
        "Positioning that differentiates you from competitors",
        "Campaigns tailored to your niche and service offerings",
        "Transparent weekly reporting and pipeline visibility",
        "Seamless handoff to your sales process",
        "Retainer-focused lead qualification",
        "White-glove campaign management",
      ]}
      stats={[
        { value: "52%", label: "Avg. Open Rate" },
        { value: "15%", label: "Reply Rate" },
        { value: "18", label: "Calls/Month (Avg)" },
        { value: "$8K", label: "Avg. Retainer Won" },
      ]}
      testimonial={{
        quote: "3 retainer clients in month one. $5K/month each. Paid for itself in week two.",
        author: "Sarah Mitchell",
        role: "Founder",
        company: "Pixel & Frame (Digital Agency)",
      }}
    />
  );
};

export default ColdEmailForAgencies;
