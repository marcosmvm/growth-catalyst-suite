import VerticalLandingPage from "@/components/VerticalLandingPage";
import { Briefcase } from "lucide-react";

const ColdEmailForConsulting = () => {
  return (
    <VerticalLandingPage
      industry="Consulting"
      badge="Cold Email for Consultants"
      headline="You advise.|We prospect."
      subheadline="High-value engagements delivered. Decision-makers who need your expertise."
      icon={Briefcase}
      painPoints={[
        {
          title: "Inconsistent Project Pipeline",
          description: "One big engagement ends, and you're back to networking and hoping. We create steady interest from qualified buyers.",
        },
        {
          title: "Time Spent Networking, Not Billing",
          description: "Every hour at conferences is an hour not billed. We prospect while you consult.",
        },
        {
          title: "Reaching the Right Decision-Makers",
          description: "Getting past gatekeepers to C-suite buyers is hard. Our campaigns reach executives directly.",
        },
        {
          title: "Positioning as a Premium Expert",
          description: "Cold outreach done wrong looks desperate. Our approach positions you as sought-after, not a commodity.",
        },
      ]}
      benefits={[
        "8-15 qualified discovery calls per month",
        "Targeting by industry, company size, and buyer title",
        "Authority-building messaging that commands premium rates",
        "Campaigns aligned with your specific expertise areas",
        "Focus on high-ticket, long-term engagements",
        "Detailed weekly reporting and prospect insights",
        "Integration with your existing CRM or calendar",
        "Confidential and professional representation",
      ]}
      stats={[
        { value: "44%", label: "Avg. Open Rate" },
        { value: "11%", label: "Reply Rate" },
        { value: "$45K", label: "Avg. Deal Size" },
        { value: "12", label: "Calls/Month (Avg)" },
      ]}
      testimonial={{
        quote: "$120K engagement from campaign two. Positioned exactly right for enterprise buyers.",
        author: "David Reynolds",
        role: "Principal Consultant",
        company: "Reynolds Advisory Group",
      }}
    />
  );
};

export default ColdEmailForConsulting;
