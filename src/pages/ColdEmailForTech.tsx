import VerticalLandingPage from "@/components/VerticalLandingPage";
import { Cpu } from "lucide-react";

const ColdEmailForTech = () => {
  return (
    <VerticalLandingPage
      industry="Tech Companies"
      badge="Cold Email for Tech"
      headline="Reach Enterprise|Decision-Makers.|Skip the Gatekeepers."
      subheadline="We help tech companies break into enterprise accounts and accelerate complex B2B sales cycles."
      icon={Cpu}
      painPoints={[
        {
          title: "Long Enterprise Sales Cycles",
          description: "6-12 month deals require constant pipeline feeding. We keep qualified opportunities flowing while you close.",
        },
        {
          title: "Getting Past Procurement",
          description: "Reaching the technical decision-maker, not the gatekeeper, is everything. Our campaigns target the right stakeholders.",
        },
        {
          title: "Building Strategic Partnerships",
          description: "Technology partnerships drive growth but are hard to initiate. We open doors with partners and integrators.",
        },
        {
          title: "Competing with Established Players",
          description: "Breaking into accounts dominated by incumbents requires precision. Our messaging highlights your unique value.",
        },
      ]}
      benefits={[
        "15-25 qualified enterprise meetings per month",
        "Multi-threading into target accounts",
        "Targeting by tech stack, company size, and funding stage",
        "Partnership and integration-focused campaigns",
        "Account-based marketing (ABM) approach",
        "Detailed pipeline and engagement reporting",
        "CRM and sales tool integrations",
        "Continuous optimization based on win/loss data",
      ]}
      stats={[
        { value: "41%", label: "Avg. Open Rate" },
        { value: "9%", label: "Reply Rate" },
        { value: "$85K", label: "Avg. Deal Size" },
        { value: "22", label: "Meetings/Month" },
      ]}
      testimonial={{
        quote: "3 Fortune 500 accounts in our first quarter. One of those deals is now our largest customer. Quantum Insights delivers.",
        author: "Jennifer Wu",
        role: "CRO",
        company: "DataFlow Systems",
      }}
    />
  );
};

export default ColdEmailForTech;
