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
        'Caresept is an innovative healthcare platform that connects patients with qualified healthcare providers, streamlining the process of finding and booking medical appointments while ensuring the highest standards of care.',
    },
    {
      question: 'How do I schedule an appointment?',
      answer:
        "Scheduling an appointment is easy! Simply log into your account, browse available healthcare providers, select your preferred time slot, and confirm your booking. You'll receive an immediate confirmation via email or SMS.",
    },
    {
      question: 'Is my medical information secure?',
      answer:
        'Absolutely! We take your privacy seriously. Caresept employs state-of-the-art encryption and security measures to protect your personal and medical information, complying with all HIPAA regulations and healthcare data protection standards.',
    },
    {
      question: 'What types of healthcare providers are available?',
      answer:
        'Caresept partners with a wide range of healthcare professionals including primary care physicians, specialists, mental health professionals, and more. All providers are thoroughly vetted and must maintain current licenses and credentials.',
    },
    {
      question: 'How can I cancel or reschedule an appointment?',
      answer:
        "You can easily modify your appointments through your user dashboard. We request at least 24 hours notice for cancellations or rescheduling to respect our healthcare providers' time.",
    },
    {
      question: 'Do you accept insurance?',
      answer:
        'Yes, Caresept works with most major insurance providers. You can verify your insurance coverage during the booking process or contact our support team for specific insurance-related questions.',
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4  primary-text">Frequently Asked Questions</h2>
        <p className="text-gray-600 dark:text-slate-100/80">
          Find answers to common questions about Caresept
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
