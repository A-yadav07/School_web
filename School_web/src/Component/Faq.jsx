import React, { useState } from "react";

const faqData = {
  All: [
    {
      question: "Is SaasAble only for SaaS web apps?",
      answer:
        "While SaasAble is designed with SaaS applications in mind, it’s not limited to SaaS products...",
    },
    {
      question: "What makes SaasAble different from other UI Kits?",
      answer:
        "SaasAble is highly customizable and supports various business models...",
    },
    {
      question: "What is the difference between the Figma and codebase versions?",
      answer:
        "Figma provides the design files while codebase gives you the working code components...",
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 7-day refund policy if you're not satisfied.",
    },
  ],
  General: [
    {
      question: "Is SaasAble suitable for both developers and designers?",
      answer:
        "Absolutely! It’s designed for easy customization for devs and designers alike.",
    },
  ],
  "Pricing & Licenses": [
    {
      question: "What’s included in the SaasAble license?",
      answer: "All UI components, updates, and documentation.",
    },
    {
      question: "Can I use SaasAble for multiple projects?",
      answer:
        "Yes, depending on the license type. Check our pricing page for details.",
    },
  ],
  "Support & Updates": [
    {
      question: "Do I get access to future updates?",
      answer: "Yes, you'll receive all future updates for free.",
    },
    {
      question: "Is support included with the template purchase?",
      answer: "Yes, 6-month free support is included.",
    },
  ],
};

const FAQSection = () => {
  const [selectedTab, setSelectedTab] = useState("All");
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-2">Frequently Asked Questions</h2>
      <p className="text-gray-600 mb-6">
        Answers to common queries about SaasAble.
      </p>

      <div className="flex flex-wrap gap-3 mb-8">
        {Object.keys(faqData).map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-full border ${
              selectedTab === tab ? "bg-black text-white" : "bg-white text-black"
            }`}
            onClick={() => {
              setSelectedTab(tab);
              setOpenIndex(null);
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {faqData[selectedTab].map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 px-6 py-4 rounded-lg cursor-pointer"
            onClick={() => handleToggle(index)}
          >
            <div className="flex justify-between items-center">
              <h4 className="font-medium">{item.question}</h4>
              <span className="text-xl font-bold">
                {openIndex === index ? "-" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <p className="text-gray-700 mt-2">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
