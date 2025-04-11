import React from "react";
import {
  BadgeCheck,
  CheckCircle,
  LayoutDashboard,
  RefreshCcw,
} from "lucide-react";

const trustPoints = [
  { icon: <BadgeCheck size={20} />, text: "10+ Years Expertise" },
  { icon: <CheckCircle size={20} />, text: "8k+ Satisfied Customers" },
  { icon: <BadgeCheck size={20} />, text: "Elite Envato Author" },
  { icon: <CheckCircle size={20} />, text: "Timely Support, Guaranteed" },
  { icon: <RefreshCcw size={20} />, text: "Regular Updates Provided" },
  { icon: <LayoutDashboard size={20} />, text: "Proven Industry Leader" },
];

const TrustSection = () => {
  return (
    <section className="bg-[#f3f6fb] rounded-[2rem] p-8 md:p-16 max-w-6xl mx-auto mt-16">
      {/* Top Avatar + Rating */}
      <div className="flex items-center gap-4 mb-4">
        <div className="flex -space-x-3">
          {[1, 2, 3, 4, 5].map((n) => (
            <img
              key={n}
              className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src={`https://i.pravatar.cc/150?img=${n}`}
              alt={`Avatar ${n}`}
            />
          ))}
        </div>
        <div>
          <p className="text-sm text-gray-700 font-medium">
            250+ Author Reviews (4.65 out of 5)
          </p>
          <div className="w-14 h-2 bg-[url('data:image/svg+xml;utf8,<svg width=100 height=6 viewBox=0 0 100 6 fill=none xmlns=http://www.w3.org/2000/svg><path d=M1 5 Q2.5 1 5 5 T9 5 T13 5 T17 5 T21 5 T25 5 T29 5 T33 5 T37 5 T41 5 T45 5 T49 5 T53 5 T57 5 T61 5 T65 5 T69 5 T73 5 T77 5 T81 5 T85 5 T89 5 T93 5 T97 5 T101 5 stroke=%2300AEEF stroke-width=1 fill=none /></svg>')] bg-no-repeat bg-left-top mt-1" />
        </div>
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 max-w-3xl">
        Why Trust Phoenixcoded for Your Dashboard Template Needs?
      </h2>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 text-gray-800 text-sm font-medium">
        {trustPoints.map((point, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <span className="text-blue-600">{point.icon}</span>
            <span>{point.text}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="relative w-fit mx-auto">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-sm text-blue-800 font-medium">
          Learn More
          <svg
            viewBox="0 0 100 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-10 mx-auto"
          >
            <path
              d="M10 10 C 50 80, 80 10, 90 30"
              stroke="#005b96"
              strokeWidth="1.5"
              fill="transparent"
            />
            <path
              d="M90 30 l-5 -5 m5 5 l-5 5"
              stroke="#005b96"
              strokeWidth="1.5"
              fill="transparent"
            />
          </svg>
        </div>
        <button className="bg-[#005b96] hover:bg-[#00487c] transition-colors text-white text-sm px-6 py-3 rounded-full font-medium">
          Read Our Story
        </button>
      </div>
    </section>
  );
};

export default TrustSection;
