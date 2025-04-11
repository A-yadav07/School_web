import React, { useState } from 'react';

const faqTabs = [
  'All',
  'General',
  'Pricing & Licenses',
  'Support & Updates'
];

const faqItems = {
  All: [
    {
      question: 'Is SaasAble only for SaaS web apps?',
      answer: 'While SaasAble is designed with SaaS applications in mind, it’s not limited to SaaS products...'
    },
    {
      question: 'What makes SaasAble different from other UI Kits?',
      answer: 'SaasAble is highly customizable and supports various business models...'
    },
    {
      question: 'Is SaasAble suitable for both developers and designers?',
      answer: 'Yes, it’s designed with flexibility and customization in mind for both devs and designers.'
    },
    {
      question: 'What is the difference between the Figma and codebase versions?',
      answer: 'Figma provides UI designs while the codebase gives a full-fledged working React app.'
    },
    {
      question: 'How can I download the template after purchase?',
      answer: 'You can download it directly from your account dashboard after payment.'
    },
  ],
  General: [
    {
      question: 'Is SaasAble suitable for both developers and designers?',
      answer: 'Yes, it’s designed with flexibility and customization in mind for both devs and designers.'
    }
  ],
  'Pricing & Licenses': [
    {
      question: 'What’s included in the SaasAble license?',
      answer: 'All components, free updates, and 6-month support.'
    }
  ],
  'Support & Updates': [
    {
      question: 'Do I get access to future updates?',
      answer: 'Yes, future updates are free with all licenses.'
    }
  ]
};

const FAQSection = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-bold mb-2">Frequently Asked Questions</h2>
          <p className="text-gray-500">Answers to common queries about SaasAble.</p>
        </div>
        <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-5 rounded-full">
          Get In Touch
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {faqTabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 border rounded-full text-sm font-medium ${
              activeTab === tab
                ? 'bg-black text-white'
                : 'bg-white text-black border-gray-300'
            }`}
            onClick={() => {
              setActiveTab(tab);
              setActiveIndex(null);
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {faqItems[activeTab]?.map((item, index) => (
          <div
            key={index}
            onClick={() =>
              setActiveIndex(activeIndex === index ? null : index)
            }
            className="bg-gray-100 px-6 py-4 rounded-lg cursor-pointer"
          >
            <div className="flex justify-between items-center">
              <p className="text-sm font-medium text-black">
                {item.question}
              </p>
              <span className="text-xl">{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <p className="text-gray-600 text-sm mt-2">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;