import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: 'What is Caresept?',
      answer:
        'Caresept is a cutting-edge, AI-powered CRM system designed to simplify and enhance your business processes. We offer highly customizable modules, seamless integration with 10+ applications, and powerful workflow automations to make customer relationship management more efficient and user-friendly.',
    },
    {
      question: 'How can Caresept improve my business?',
      answer:
        'Caresept empowers your team by automating repetitive tasks, streamlining communications, and providing deep insights through AI-driven analytics. With customizable workflows and powerful integrations, Caresept makes managing customer relationships, tracking performance, and scaling operations easier than ever.',
    },
    {
      question: 'What integrations does Caresept offer?',
      answer:
        'Caresept integrates with over 10 popular apps and platforms, including WhatsApp, Facebook, Google Drive, email, and more. These integrations allow you to unify your communications and workflows across multiple platforms, increasing efficiency and collaboration.',
    },
    {
      question: 'Can I customize workflows in Caresept?',
      answer:
        'Absolutely! Caresept provides robust customization options for workflows to suit your unique business processes. From automated lead nurturing to post-sales support, you can tailor workflows to meet the needs of your team and customers.',
    },
    {
      question: 'How secure is Caresept?',
      answer:
        'Security is our top priority. Caresept employs industry-standard encryption and security protocols to ensure that your data is safe. We follow best practices for data privacy and protection, giving you peace of mind when managing sensitive customer information.',
    },
    {
      question: 'What kind of support does Caresept provide?',
      answer:
        'We offer comprehensive support, including onboarding assistance, documentation, and customer service. Whether you need help with setting up integrations or customizing your CRM, our dedicated team is here to assist you every step of the way.',
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
    </div>
  );
};

export default FAQSection;
