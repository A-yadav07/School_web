import React from 'react';
import {
  Accessibility,
  Globe,
  Layers,
  Rocket,
  BookOpen,
  RefreshCcw
} from 'lucide-react';

const features = [
  {
    icon: <Accessibility className="w-6 h-6 text-blue-900" />,
    title: "WCAG Compliant",
    description: "Ensure accessibility with WCAG compliant design for browsing.",
  },
  {
    icon: <Globe className="w-6 h-6 text-blue-900" />,
    title: "SEO Friendly",
    description: "Boost visibility with SEO-friendly features for better search rankings.",
  },
  {
    icon: <Layers className="w-6 h-6 text-blue-900" />,
    title: "MUI Components",
    description: "Customize Material 3 design MUI components for enhanced aesthetics.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-blue-900" />,
    title: "High Performance UI",
    description: "Adjust content layout for visual coherence on various screen sizes.",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-blue-900" />,
    title: "Detailed Documentation",
    description: "Access comprehensive documentation for easy guidance on platform usage.",
  },
  {
    icon: <RefreshCcw className="w-6 h-6 text-blue-900" />,
    title: "Regular Updates",
    description: "Receive consistent updates to keep the platform secure and up-to-date with the latest features.",
  },
];

const UiKitSection = () => {
  return (
    <div className="px-6 py-12 text-center bg-white">
      <h2 className="text-3xl font-semibold mb-12">Comprehensive UI Kit Tailored to your Need</h2>

      <div className="grid md:grid-cols-3 gap-6 bg-blue-50 p-6 rounded-3xl max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 shadow-sm text-left hover:shadow-md transition">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>

      <p className="mt-12 text-gray-800 text-lg">
        Ready to transform your SaaS designs with one powerful UI Kit?
      </p>

      <div className="mt-6 flex justify-center gap-4">
        <button className="px-6 py-2 rounded-full border border-blue-900 text-blue-800 hover:bg-blue-50 transition">
          Explore Blocks
        </button>
        <button className="px-6 py-2 rounded-full bg-blue-800 text-white hover:bg-blue-900 transition">
          Contact
        </button>
      </div>
    </div>
  );
};

export default UiKitSection;
