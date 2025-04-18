import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <div
        className="relative h-64 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?university,students')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-white text-4xl font-bold">About Our College</h1>
        </div>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Welcome to [BaBa B.K Higher Secondary School]</h2>
        <p className="text-lg text-gray-700">
          Our college is committed to providing high-quality education and fostering an environment where students can excel in academics, research, and extracurricular activities.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="bg-gray-200 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-700">
              To nurture students with the best educational resources, ensuring academic and personal growth.
            </p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-700">
              To be a globally recognized institution that excels in innovation, research, and community service.
            </p>
          </div>
        </div>
      </div>

      {/* Faculty Team */}
      <div className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-6">Meet Our Faculty</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow text-center">
              <img
                src={`https://source.unsplash.com/150x150/?person,${index}`}
                alt="Faculty"
                className="mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-medium">Teacher {index}</h3>
              <p className="text-gray-600">Department of primary</p>
              <p classname="text-gray-600">Department of secondary</p>
              <p classname="text-gray-600">Department of highschool</p>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default AboutPage;
