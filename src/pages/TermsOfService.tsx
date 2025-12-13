import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl font-heading text-foreground mb-4">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: December 1, 2024</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-heading text-foreground mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using OutreachAI's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not access or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading text-foreground mb-4">2. Description of Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                OutreachAI provides B2B lead generation and cold email outreach services, including but not limited to prospect list building, email campaign management, lead qualification, and appointment setting. The specific scope of services will be outlined in your service agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading text-foreground mb-4">3. Client Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As a client, you agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Provide accurate information about your ideal customer profile</li>
                <li>Respond to leads and meeting requests in a timely manner</li>
                <li>Provide feedback to help us optimize campaign performance</li>
                <li>Comply with all applicable laws regarding commercial communications</li>
                <li>Not use our services for any unlawful purpose</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-heading text-foreground mb-4">4. Payment Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                Fees are billed monthly in advance. Payment is due within 15 days of invoice date. We reserve the right to suspend services for accounts with overdue payments. All fees are non-refundable except as expressly stated in your service agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading text-foreground mb-4">5. Performance Expectations</h2>
              <p className="text-muted-foreground leading-relaxed">
                While we strive to deliver consistent results, campaign performance depends on various factors including your industry, target market, offering, and market conditions. We provide performance benchmarks based on historical data but do not guarantee specific results unless explicitly stated in a performance-based agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading text-foreground mb-4">6. Confidentiality</h2>
              <p className="text-muted-foreground leading-relaxed">
                Both parties agree to keep confidential any proprietary information shared during the engagement. This includes but is not limited to business strategies, customer data, pricing information, and campaign methodologies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading text-foreground mb-4">7. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                Email copy, sequences, and campaign strategies created specifically for your engagement are considered work-for-hire and become your property. Our general methodologies, tools, and processes remain our intellectual property.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading text-foreground mb-4">8. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                OutreachAI shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the fees paid by you in the three months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading text-foreground mb-4">9. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                Either party may terminate the service agreement with 30 days written notice. Upon termination, we will provide a transition period to hand off any active leads and campaign data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading text-foreground mb-4">10. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms of Service, please contact us at legal@outreachai.com.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
