import VerticalLandingPage from "@/components/VerticalLandingPage";
import { Users } from "lucide-react";

const ColdEmailForStaffing = () => {
  return (
    <VerticalLandingPage
      industry="Staffing & Recruiting"
      badge="Cold Email for Staffing"
      headline="Companies hiring.|Meetings booked."
      subheadline="HR leaders and hiring managers actively filling roles. On your calendar."
      icon={Users}
      painPoints={[
        {
          title: "Intense Competition for Clients",
          description: "Every staffing firm chases the same accounts. Our targeted approach reaches companies before competitors do.",
        },
        {
          title: "Relationship-Dependent Sales",
          description: "Relying solely on relationships limits growth. We create a predictable client acquisition channel.",
        },
        {
          title: "Finding Companies Actively Hiring",
          description: "Timing is everything in staffing. We target companies showing hiring intent signals right now.",
        },
        {
          title: "Standing Out in a Commoditized Market",
          description: "Every recruiter sounds the same. Our messaging positions your unique value and specialization.",
        },
      ]}
      benefits={[
        "12-20 qualified client meetings per month",
        "Targeting by industry, company size, and hiring signals",
        "Focus on companies with active job postings",
        "Specialization-focused messaging (IT, healthcare, etc.)",
        "Integration with your ATS and CRM",
        "Weekly pipeline and activity reporting",
        "Quick-start campaigns for urgent hiring needs",
        "Scalable based on your placement capacity",
      ]}
      stats={[
        { value: "49%", label: "Avg. Open Rate" },
        { value: "14%", label: "Reply Rate" },
        { value: "17", label: "Meetings/Month" },
        { value: "3.2x", label: "Pipeline Growth" },
      ]}
      testimonial={{
        quote: "8 new accounts in 60 days. 15x ROI from placements.",
        author: "Michael Torres",
        role: "Managing Director",
        company: "TalentBridge Staffing",
      }}
    />
  );
};

export default ColdEmailForStaffing;
