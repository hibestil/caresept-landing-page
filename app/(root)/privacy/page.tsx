import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | enhance.io',
  description: 'Our commitment to protecting your privacy and personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-3xl font-bold">Privacy Policy</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p>
          At enhance.io, we are committed to protecting your privacy and personal information. This
          Privacy Policy outlines how we collect, use, and safeguard your data when you use our
          services.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We collect information that you provide directly to us, such as when you create an
          account, update your profile, or communicate with us. This may include:
        </p>
        <ul>
          <li>Name and contact information</li>
          <li>Professional history and qualifications</li>
          <li>Account credentials</li>
          <li>Communication preferences</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, maintain, and improve our services</li>
          <li>Personalize your experience and offer tailored recommendations</li>
          <li>Communicate with you about our services, updates, and promotional offers</li>
          <li>Analyze usage patterns and optimize our platform</li>
        </ul>

        <h2>Data Security</h2>
        <p>
          We implement robust security measures to protect your personal information from
          unauthorized access, alteration, disclosure, or destruction. These measures include
          encryption, access controls, and regular security audits.
        </p>

        <h2>Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal information at any time.
          You can also opt-out of certain data processing activities or withdraw your consent for
          data collection.
        </p>

        <h2>Updates to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any significant
          changes by posting a notice on our website or sending you an email.
        </p>

        <p>
          If you have any questions or concerns about our Privacy Policy, please contact us at
          privacy@enhance.io.
        </p>
      </div>
    </div>
  );
}
