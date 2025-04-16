import React from "react";
import school1 from "../assets/gallaryimage/image1.jpg"; 
import school2 from "../assets/gallaryimage/image2.jpg";  
import school3 from "../assets/gallaryimage/image3.jpg";
import school4 from "../assets/gallaryimage/image4.jpg";
import school5 from "../assets/gallaryimage/image5.jpg";
import school6 from "../assets/gallaryimage/image6.jpg";

const blocks = [
  { title: "School", variants: 1, image: school1 },
  { title: "School", variants: 2, image: school2 },
  { title: "School", variants: 3, image: school3 },
  { title: "School", variants: 4, image: school4 },
  { title: "School", variants: 5, image: school5 },
  { title: "School", variants: 6, image: school6},
];

const GallaryPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-16">
      <h1 className="text-4xl font-semibold text-center mb-14 text-gray-900">
        Gallary section
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl w-full">
        {blocks.map((block, index) => (
          <div
            key={index}
            className="bg-[#f7f9fc] rounded-3xl shadow-md p-6 flex flex-col items-center border border-gray-200"
          >
            <div className="w-full h-40 mb-6 rounded-2xl overflow-hidden border border-gray-300 object-fit:cover">
              <img
                src={block.image}
                alt={block.title}
                className="w-full h-auto object-cover"
              />
            </div>
              <img
                src={block.image}
                alt={block.title}
                className="w-full h-auto object-cover"
              />

            <h2 className="text-blue-900 text-lg font-medium mb-1">
              {block.title}
            </h2>
            <p className="text-gray-500 text-sm">
              {block.variants} Different Variants
            </p>
          </div>
        ))}
      </div>

      <p className="text-center text-gray-600 mt-16 max-w-2xl text-base">
        Explore a wide range of ready-made blocks—from Hero to CTA, Features,
        and more to speed up your design process.
      </p>

      <button className="mt-6 px-6 py-2 border border-blue-900 text-blue-800 rounded-full hover:bg-blue-50 transition font-medium">
        Explore All Blocks
      </button>
    </div>
  );
};

export default GallaryPage;
