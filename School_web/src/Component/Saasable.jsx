import React from "react";

const blocks = [
  { title: "Hero", variants: 17 },
  { title: "Call to Action", variants: 12 },
  { title: "Feature", variants: 23 },
  { title: "Benefits", variants: 9 },
  { title: "Process", variants: 7 },
  { title: "Integration", variants: 8 },
];

const SaasAbleBlocksPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-16">
      <h1 className="text-4xl font-semibold text-center mb-14 text-gray-900">
        SaasAble Blocks
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl w-full">
        {blocks.map((block, index) => (
          <div
            key={index}
            className="bg-[#f7f9fc] rounded-3xl shadow-md p-6 flex flex-col items-center border border-gray-200"
          >
            <div className="w-full h-40 bg-white rounded-2xl mb-6 flex items-center justify-center border border-gray-300">
              <div className="w-24 h-14 bg-gray-200 rounded" />
            </div>
            <h2 className="text-blue-600 text-lg font-medium mb-1">
              {block.title}
            </h2>
            <p className="text-gray-500 text-sm">
              {block.variants} Different Variants
            </p>
          </div>
        ))}
      </div>

      <p className="text-center text-gray-600 mt-16 max-w-2xl text-base">
        Explore a wide range of ready-made blocks—from Hero to CTA, Features, and more to speed up your design process.
      </p>

      <button className="mt-6 px-6 py-2 border border-blue-500 text-blue-600 rounded-full hover:bg-blue-50 transition font-medium">
        Explore All Blocks
      </button>
    </div>
  );
};

export default SaasAbleBlocksPage;
