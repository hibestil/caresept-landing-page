import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | enhance.io',
  description: 'The terms and conditions governing your use of enhance.io services.',
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-3xl font-bold">Terms of Service</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p>
          Welcome to enhance.io. By using our services, you agree to comply with and be bound by the
          following terms and conditions. Please read them carefully.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using enhance.io, you agree to be bound by these Terms of Service and all
          applicable laws and regulations. If you do not agree with any part of these terms, you may
          not use our services.
        </p>

        <h2>2. Use of Services</h2>
        <p>
          You agree to use enhance.io for lawful purposes only and in a way that does not infringe
          upon the rights of others or restrict their use and enjoyment of the service.
        </p>

        <h2>3. User Accounts</h2>
        <p>
          To access certain features of enhance.io, you may be required to create an account. You
          are responsible for maintaining the confidentiality of your account information and for
          all activities that occur under your account.
        </p>

        <h2>4. Intellectual Property</h2>
        <p>
          The content, features, and functionality of enhance.io are owned by us and are protected
          by international copyright, trademark, patent, trade secret, and other intellectual
          property laws.
        </p>

        <h2>5. Limitation of Liability</h2>
        <p>
          enhance.io and its affiliates shall not be liable for any indirect, incidental, special,
          consequential, or punitive damages resulting from your use of or inability to use the
          service.
        </p>

        <h2>6. Modifications to Terms</h2>
        <p>
          We reserve the right to modify these Terms of Service at any time. We will notify users of
          any significant changes. Your continued use of enhance.io after such modifications
          constitutes your acceptance of the updated terms.
        </p>

        <h2>7. Termination</h2>
        <p>
          We reserve the right to terminate or suspend your account and access to enhance.io at our
          sole discretion, without notice, for conduct that we believe violates these Terms of
          Service or is harmful to other users, us, or third parties, or for any other reason.
        </p>

        <p>
          If you have any questions about these Terms of Service, please contact us at
          legal@enhance.io.
        </p>
      </div>
    </div>
  );
}
