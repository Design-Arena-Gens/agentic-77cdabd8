"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to form my business?",
    answer: "Processing times vary by state and filing method. With standard filing, most formations are completed within 5-10 business days. Expedited filing options are available for faster processing (1-3 business days). Once filed, you'll receive your approved documents via email.",
  },
  {
    question: "What's the difference between an LLC and Corporation?",
    answer: "An LLC (Limited Liability Company) offers liability protection with flexible tax options and simpler management. A Corporation (C-Corp or S-Corp) offers liability protection, easier access to funding, and the ability to issue stock, but has more complex regulations and formalities. The best choice depends on your business goals, size, and funding needs.",
  },
  {
    question: "Do I need a registered agent?",
    answer: "Yes, every LLC and Corporation must have a registered agent in the state where it's formed. A registered agent receives important legal and tax documents on behalf of your business. LegalStart provides registered agent service in all 50 states, with the first year free in our packages.",
  },
  {
    question: "What is an EIN and do I need one?",
    answer: "An EIN (Employer Identification Number) is a federal tax ID issued by the IRS. You'll need an EIN to open a business bank account, hire employees, and file certain tax returns. It's like a Social Security number for your business. We can obtain your EIN for you as part of our Pro and Premium packages.",
  },
  {
    question: "Can I change my business name after formation?",
    answer: "Yes, you can change your business name after formation, but it requires filing amendments with the state and updating various documents and registrations. The process and fees vary by state. It's best to choose your business name carefully during formation to avoid this additional work and expense.",
  },
  {
    question: "What ongoing requirements does my business have?",
    answer: "Most states require annual reports, tax filings, and maintaining a registered agent. Requirements vary by state and entity type. Our compliance services help you stay on top of these requirements with automated reminders, and we can file your annual reports for you to ensure you remain in good standing.",
  },
  {
    question: "Is my personal information kept private?",
    answer: "While some business information becomes public record when filed with the state (like business name and registered agent), we take privacy seriously. We use bank-level encryption to protect your data, and you can use our registered agent service to keep your home address off public records.",
  },
  {
    question: "What if I need to make changes to my filing?",
    answer: "If you need to make changes before we submit your filing, contact us immediately and we'll update it at no charge. If changes are needed after filing with the state, we can file amendments for you. Amendment fees vary by state and the type of change needed.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about business formation and our services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`text-primary-600 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                  size={24}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions?{" "}
            <a href="#" className="text-primary-600 font-semibold hover:underline">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
