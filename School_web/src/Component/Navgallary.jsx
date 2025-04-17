import React from "react";

// 🔽 Import all images from your assets folder
import img1 from "../assets/gallaryimage/image1.jpg";
import img2 from "../assets/gallaryimage/image1.jpg";
import christmas from "../assets/gallaryimage/image1.jpg";
import activity from "../assets/gallaryimage/image1.jpg";
import project from "../assets/gallaryimage/image1.jpg";
import coloring from "../assets/gallaryimage/image1.jpg";

// 🔽 Create gallery items array using imported images
const galleryItems = [
  {
    title: "Annual Function",
    image: img1,
  },
  {
    title: "BACK OFFICE AREA",
    image: img2,
  },
  {
    title: "CHRISTMAS CELEBRATION",
    image: christmas,
  },
  {
    title: "Activity Table",
    image: activity,
  },
  {
    title: "Project Display",
    image: project,
  },
  {
    title: "Coloring Activity",
    image: coloring,
  },
  {
    title: "Activity Table",
    image: activity,
  },
  {
    title: "Project Display",
    image: project,
  },
  {
    title: "Activity Table",
    image: activity,
  },
  {
    title: "Project Display",
    image: project,
  },
  {
    title: "Activity Table",
    image: activity,
  },
  {
    title: "Project Display",
    image: project,
  },
  {
    title: "Activity Table",
    image: activity,
  },
  {
    title: "Project Display",
    image: project,
  },
  {
    title: "Activity Table",
    image: activity,
  },
  {
    title: "Project Display",
    image: project,
  },
  {
    title: "Activity Table",
    image: activity,
  },
  {
    title: "Project Display",
    image: project,
  },
  {
    title: "Activity Table",
    image: activity,
  },
  {
    title: "Project Display",
    image: project,
  },
];

// 🔽 Component
const Gallery = () => {
  return (
    <div className="bg-white p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Activity Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-4 text-center font-medium text-gray-700">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
