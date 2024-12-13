import React from 'react';
import '../styles/PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <header className="privacy-header">
        <h1>Privacy Policy</h1>
        <p>Effective Date: December 8, 2024</p>
      </header>
      <main>
        <section>
          <h2>Introduction</h2>
          <p>
            IndoVerseID built the IPTV DRM Stream Player app as a Free app. This SERVICE is provided by IndoVerseID at no cost and is intended for use as is.
          </p>
          <p>
            This page informs visitors regarding our policies on the collection, use, and disclosure of personal information for anyone choosing to use our Service.
          </p>
        </section>

        <section>
          <h2>Information Collection and Use</h2>
          <p>
            To enhance user experience, we may require certain personal information, including but not limited to <strong>indoverseid@gmail.com</strong>. This information is stored locally and not collected by us.
          </p>
          <ul>
            <li>AdMob</li>
            <li>Google Play Services</li>
          </ul>
        </section>

        <section>
          <h2>Log Data</h2>
          <p>
            In the event of an app error, we may collect data such as your device’s IP address, device name, OS version, app configuration, and usage statistics. This data is used to improve our services.
          </p>
        </section>

        <section>
          <h2>Cookies</h2>
          <p>
            The app may use third-party code that uses cookies to collect data and enhance services. You can accept or refuse cookies; however, refusing cookies may limit some features.
          </p>
        </section>

        <section>
          <h2>Security</h2>
          <p>
            We take reasonable measures to protect your personal information but cannot guarantee absolute security due to the nature of the internet.
          </p>
        </section>

        <section>
          <h2>Children’s Privacy</h2>
          <p>
            We do not knowingly collect personal information from children under 13. If you believe your child has provided such information, please contact us immediately.
          </p>
        </section>

        <section>
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this policy periodically. Users are advised to review this page for changes.
          </p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            If you have questions or suggestions about this Privacy Policy, contact us at <a href="mailto:indoverseid@gmail.com">indoverseid@gmail.com</a>.
          </p>
        </section>
      </main>
      <footer className="privacy-footer">
        <p>&copy; 2024 IndoVerseID. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;