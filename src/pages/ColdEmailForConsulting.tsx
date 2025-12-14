import VerticalLandingPage from "@/components/VerticalLandingPage";
import { Briefcase } from "lucide-react";

const ColdEmailForConsulting = () => {
  return (
    <VerticalLandingPage
      industry="Consulting"
      badge="Cold Email for Consultants"
      headline="High-Value Consulting|Engagements,|Delivered to Your Inbox"
      subheadline="We connect consultants and advisory firms with decision-makers actively seeking expertise — so you spend time advising, not prospecting."
      icon={Briefcase}
      painPoints={[
        {
          title: "Inconsistent Project Pipeline",
          description: "One big engagement ends, and you're back to networking and hoping. We create steady inbound interest from qualified buyers.",
        },
        {
          title: "Time Spent Networking, Not Billing",
          description: "Every hour at conferences and LinkedIn is an hour not spent on billable work. We prospect while you consult.",
        },
        {
          title: "Reaching the Right Decision-Makers",
          description: "Getting past gatekeepers to C-suite buyers is hard. Our campaigns reach executives directly.",
        },
        {
          title: "Positioning as a Premium Expert",
          description: "Cold outreach done wrong looks desperate. Our approach positions you as a sought-after expert, not a commodity.",
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
        quote: "I landed a $120K strategy engagement from their second campaign. The messaging positioned me exactly right for enterprise buyers.",
        author: "David Reynolds",
        role: "Principal Consultant",
        company: "Reynolds Advisory Group",
      }}
    />
  );
};

export default ColdEmailForConsulting;
