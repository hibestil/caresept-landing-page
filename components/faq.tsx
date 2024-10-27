import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';

const FAQSection = () => {
  const faqs = [
    {
      question: 'Is Caresept suitable for my industry?',
      answer:
        "Absolutely! Caresept is designed to be versatile and adaptable. Our customizable modules and workflows can be tailored to fit the unique needs of any industry—whether you're in healthcare, retail, manufacturing, services, or beyond.",
    },
    {
      question: 'Do I need coding experience to use Caresept?',
      answer:
        'Not at all. Caresept is a fully no-code platform. Our intuitive drag-and-drop interfaces for building data modules, designing workflows, and training AI agents make it easy for anyone to use, regardless of technical background.',
    },
    {
      question: 'How does Caresept handle multiple communication channels?',
      answer:
        'Caresept integrates with over 10 popular apps and platforms, including WhatsApp, Facebook, Google Drive, email, and more. These integrations allow you to unify your communications and workflows across multiple platforms, increasing efficiency and collaboration.',
    },
    {
      question: 'Can the AI agents communicate in different languages?',
      answer:
        'Absolutely! Caresept provides robust customization options for workflows to suit your unique business processes. From automated lead nurturing to post-sales support, you can tailor workflows to meet the needs of your team and customers.',
    },
    {
      question: 'How secure is my data with Caresept?',
      answer:
        'Security is our top priority. Caresept employs industry-standard encryption and security protocols to ensure that your data is safe. We follow best practices for data privacy and protection, giving you peace of mind when managing sensitive customer information.',
    },
    {
      question: 'Can I control what data my employees can access?',
      answer:
        'We offer comprehensive support, including onboarding assistance, documentation, and customer service. Whether you need help with setting up integrations or customizing your CRM, our dedicated team is here to assist you every step of the way.',
    },
    {
      question: 'How do AI Agent Workers improve customer experience?',
      answer:
        'Our AI Agent Workers engage with customers in natural, human-like conversations, providing instant responses and collecting necessary information efficiently. They reduce manual workload by handling routine inquiries and can seamlessly transfer complex issues to human agents with all relevant data, enhancing overall customer satisfaction.',
    },
    {
      question:
        'How does the AI agent know when to transfer a conversation to a human representative?',
      answer:
        "You can define rules and conditions within the AI agent's workflow to determine when a conversation should be handed over to a human agent. When the set criteria are met, the AI agent will seamlessly transfer the conversation, along with all collected information, ensuring a smooth transition.",
    },
    {
      question: 'Can I integrate Caresept with other systems we use?',
      answer:
        'Yes, Caresept is designed to integrate with various third-party applications and services. Our platform supports APIs and webhooks, allowing you to connect with your existing tools and systems. Please contact our support team for specific integration inquiries.',
    },
    {
      question: 'Is there support available if I need help?',
      answer:
        'Definitely. We offer comprehensive support to all our users. Our resources include detailed documentation, tutorials, and a dedicated customer support team ready to assist you via email, phone, or live chat.',
    },
    {
      question: 'How can I get started with Caresept?',
      answer:
        "Getting started is easy! You can sign up for a free trial on our website. Explore our features, and when you're ready, choose a plan that best suits your business needs",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4  primary-text">Frequently Asked Questions</h2>
        <p className="text-gray-600 dark:text-slate-100/80">
          Find answers to common questions about Caresept&apos;s AI-powered CRM system
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow lg:w-[60vw] xl:w-[40vw]"
          >
            <AccordionTrigger className="px-6 py-4 text-left font-semibold dark:text-black/80 primary-text">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 text-gray-600">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h6 className='mt-7 text-sm'>
        <strong>Have more questions?</strong> Feel free to reach out to us at{' '}
        <Link href={'mailto:support@caresept.com'} className="text-primary font-semibold">
          support@caresept.com
        </Link>{' '}
        . We&apos;re here to help!
      </h6>
    </div>
  );
};

export default FAQSection;
