import "../styles/PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <div className="privacy-content">
        <h1 className="privacy-title">Privacy Policy</h1>
        <p className="privacy-date">Effective Date: January 29, 2026</p>

        <section className="privacy-section">
          <h2>Introduction</h2>
          <p>
            Welcome to Online Code Compiler. We respect your privacy and are
            committed to protecting your personal information. This Privacy
            Policy explains how we collect, use, and safeguard your data when
            you use our online code compilation service.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Information We Collect</h2>
          <p>
            When you use our service, we may collect the following types of
            information:
          </p>
          <ul>
            <li>
              <strong>Code and Usage Data:</strong> The code you write and
              execute through our compiler, including programming language
              selection and execution results.
            </li>
            <li>
              <strong>Technical Information:</strong> Browser type, IP address,
              device information, and operating system details.
            </li>
            <li>
              <strong>Analytics Data:</strong> Information about how you
              interact with our website, including pages visited and features
              used.
            </li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>How We Use Information</h2>
          <p>We use the collected information for the following purposes:</p>
          <ul>
            <li>
              <strong>Service Delivery:</strong> To compile and execute your
              code and display results.
            </li>
            <li>
              <strong>Service Improvement:</strong> To analyze usage patterns
              and improve our compiler's performance and features.
            </li>
            <li>
              <strong>Security:</strong> To detect, prevent, and address
              technical issues and security threats.
            </li>
            <li>
              <strong>Communication:</strong> To respond to your inquiries and
              provide support when needed.
            </li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your
            experience on our website. Cookies help us:
          </p>
          <ul>
            <li>Remember your language preferences and settings</li>
            <li>Analyze website traffic and user behavior</li>
            <li>Improve our service based on your usage patterns</li>
          </ul>
          <p>
            You can control cookie preferences through your browser settings.
            However, disabling cookies may affect some functionality of our
            service.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Third-Party Services</h2>
          <p>
            Our code compiler uses third-party services to execute code. When
            you submit code for compilation:
          </p>
          <ul>
            <li>
              Your code is transmitted to external code execution APIs (such as
              Piston API)
            </li>
            <li>
              These services process your code to generate output results
            </li>
            <li>
              We do not control third-party data practices and encourage you to
              review their privacy policies
            </li>
          </ul>
          <p>
            We do not store your code permanently on our servers. Code is
            processed in real-time and not retained after execution.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Data Security</h2>
          <p>
            We implement reasonable security measures to protect your
            information from unauthorized access, alteration, disclosure, or
            destruction. However, no method of transmission over the internet is
            100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Children's Privacy</h2>
          <p>
            Our service is not directed to individuals under the age of 13. We
            do not knowingly collect personal information from children. If you
            believe we have collected information from a child, please contact
            us immediately.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated effective date. We
            encourage you to review this policy periodically to stay informed
            about how we protect your information.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Contact Information</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or
            our data practices, please contact us at:
          </p>
          <p className="contact-info">
            Email: privacy@codecompiler.com
            <br />
            Website: www.codecompiler.com
          </p>
        </section>

        <div className="privacy-footer-note">
          <p>
            By using Online Code Compiler, you acknowledge that you have read
            and understood this Privacy Policy and agree to its terms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;