import "../styles/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        {/* Hero Section */}
        <section className="about-hero">
          <h1 className="about-title">About Compiler</h1>
          <p className="about-subtitle">
            Empowering developers to write, test, and execute code instantly
          </p>
        </section>

        {/* Mission Section */}
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            At Compiler, we believe that coding should be accessible to
            everyone, anywhere, anytime. Our mission is to provide a fast,
            reliable, and user-friendly online code compiler that eliminates the
            barriers between ideas and execution.
          </p>
          <p>
            Whether you're a student learning your first programming language, a
            professional developer testing a quick snippet, or an educator
            teaching code to the next generation, Compiler is built for you.
          </p>
        </section>

        {/* What We Offer Section */}
        <section className="about-section">
          <h2>What We Offer</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Lightning Fast Execution</h3>
              <p>
                Run your code instantly with our optimized execution engine
                powered by industry-standard APIs.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3>Multi-Language Support</h3>
              <p>
                Write in JavaScript, Python, Java, TypeScript, C#, PHP, and
                more languages to come.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💻</div>
              <h3>No Setup Required</h3>
              <p>
                Start coding immediately without installations, configurations,
                or downloads. Just open and code.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Works Everywhere</h3>
              <p>
                Fully responsive design means you can code on desktop, tablet,
                or mobile devices seamlessly.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Modern Interface</h3>
              <p>
                Beautiful, dark-themed editor with syntax highlighting and an
                intuitive user experience.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure & Private</h3>
              <p>
                Your code is processed securely and not stored permanently on
                our servers.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            Compiler was born from a simple frustration: the hassle of
            setting up development environments just to test small code snippets.
            We envisioned a world where anyone could test their code ideas
            instantly, without the overhead of complex installations.
          </p>
          <p>
            What started as a simple idea has grown into a comprehensive platform
            used by developers, students, and educators worldwide. We've built
            Compiler with modern web technologies, ensuring a fast, reliable,
            and enjoyable coding experience.
          </p>
        </section>

        {/* Technology Section */}
        <section className="about-section">
          <h2>Built With Modern Technology</h2>
          <p>
            Compiler is crafted using cutting-edge web technologies to ensure
            the best possible experience:
          </p>
          <div className="tech-stack">
            <div className="tech-item">
              <span className="tech-name">React</span>
              <span className="tech-desc">Modern UI framework</span>
            </div>
            <div className="tech-item">
              <span className="tech-name">Monaco Editor</span>
              <span className="tech-desc">VS Code's powerful editor</span>
            </div>
            <div className="tech-item">
              <span className="tech-name">Piston API</span>
              <span className="tech-desc">Secure code execution</span>
            </div>
            <div className="tech-item">
              <span className="tech-name">Vite</span>
              <span className="tech-desc">Lightning-fast build tool</span>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="about-section">
          <h2>Why Choose Compiler?</h2>
          <ul className="benefits-list">
            <li>
              <strong>Zero Installation:</strong> No need to install compilers,
              IDEs, or runtime environments
            </li>
            <li>
              <strong>Instant Feedback:</strong> See your code output in
              real-time without delay
            </li>
            <li>
              <strong>Learning Friendly:</strong> Perfect for beginners
              experimenting with new languages
            </li>
            <li>
              <strong>Professional Grade:</strong> Powered by the same editor
              used in Visual Studio Code
            </li>
            <li>
              <strong>Always Available:</strong> Access from any device with an
              internet connection
            </li>
            <li>
              <strong>Free to Use:</strong> Core features available at no cost
              to everyone
            </li>
          </ul>
        </section>

        {/* Vision Section */}
        <section className="about-section">
          <h2>Our Vision for the Future</h2>
          <p>
            We're constantly working to make Compiler better. Our roadmap
            includes exciting features like collaborative coding, more language
            support, code sharing capabilities, and advanced debugging tools.
          </p>
          <p>
            We envision Compiler becoming the go-to platform for developers
            who need quick, reliable code execution without the overhead. Whether
            you're in a coffee shop, classroom, or office, Compiler will be
            there to turn your code ideas into reality.
          </p>
        </section>

        {/* Community Section */}
        <section className="about-section">
          <h2>Join Our Community</h2>
          <p>
            Compiler is more than just a tool—it's a community of developers,
            learners, and educators who believe in making coding accessible.
            Whether you're debugging a tricky problem, learning a new language,
            or teaching others to code, you're part of our community.
          </p>
          <p className="community-cta">
            Have feedback or suggestions? We'd love to hear from you at{" "}
            <a href="mailto:sahilburde66@gmail.com?subject=Compiler Feedback" className="contact-link">
             Click Here
            </a>
          </p>
        </section>

        {/* Closing Section */}
        <section className="about-closing">
          <h2>Let's Build Together</h2>
          <p>
            Thank you for choosing Compiler. We're committed to providing you
            with the best online coding experience possible. Happy coding!
          </p>
          <div className="cta-buttons">
            <a href="/" className="cta-button primary">
              Start Coding Now
            </a>
            <a href="/privacy-policy" className="cta-button secondary">
              Privacy Policy
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;