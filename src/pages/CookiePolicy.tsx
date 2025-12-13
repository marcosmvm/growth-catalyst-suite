import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl font-heading text-foreground mb-4">Cookie Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: December 1, 2024</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-heading text-foreground mb-4">1. What Are Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading text-foreground mb-4">2. How We Use Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use cookies for the following purposes:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Marketing Cookies:</strong> Track your activity to deliver relevant advertising</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-heading text-foreground mb-4">3. Types of Cookies We Use</h2>
              
              <div className="bg-card rounded-lg p-6 border border-border mb-4">
                <h3 className="font-heading text-foreground mb-2">Essential Cookies</h3>
                <p className="text-sm text-muted-foreground">
                  These cookies are necessary for the website to function and cannot be switched off. They are usually set in response to actions made by you, such as setting your privacy preferences or filling in forms.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border mb-4">
                <h3 className="font-heading text-foreground mb-2">Analytics Cookies</h3>
                <p className="text-sm text-muted-foreground">
                  These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are the most and least popular.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border mb-4">
                <h3 className="font-heading text-foreground mb-2">Functional Cookies</h3>
                <p className="text-sm text-muted-foreground">
                  These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="font-heading text-foreground mb-2">Marketing Cookies</h3>
                <p className="text-sm text-muted-foreground">
                  These cookies may be set through our site by our advertising partners. They may be used to build a profile of your interests and show you relevant adverts on other sites.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-heading text-foreground mb-4">4. Managing Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may impact your overall user experience. Some features may not function properly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading text-foreground mb-4">5. Third-Party Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics, deliver advertisements, and so forth. These cookies are subject to the respective privacy policies of these external services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading text-foreground mb-4">6. Updates to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading text-foreground mb-4">7. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about our use of cookies, please contact us at privacy@outreachai.com.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
