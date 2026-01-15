import React from "react";

const About = () => {
  const values = [
    "We love what we do",
    "We are respectful",
    "We are transparent",
    "We listen to your needs",
    "We are respectful",
    "We listen to your needs",
  ];

  const images = [
    {
      href: "https://matchthemes.com/demohtml/tilia/images/home/awards-1.png",
      alt: "Wedding Photography Award",
    },
    {
      href: "https://matchthemes.com/demohtml/tilia/images/home/awards-2.png",
      alt: "Wedding Photography Award",
    },
    {
      href: "https://matchthemes.com/demohtml/tilia/images/home/awards-3.png",
      alt: "Wedding Photography Award",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left content */}
          <div className="lg:pr-12">
            <h4 className="text-teal-600 border-b-2 w-max pb-2 font-semibold text-sm">
              Our Story
            </h4>
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl py-6 leading-tight">
              Tilia is a Wedding & Portrait Studio based in New York
            </h1>

            <div className="flex gap-6 items-center justify-start mt-6 flex-wrap">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img.href}
                  alt={img.alt || `award-${index}`}
                  className="w-24 md:w-28 lg:w-36 h-auto object-contain"
                />
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:pl-12">
            <p className="text-gray-700 mb-4">
              We love photography and travel for meeting new beautiful people all over the world.
            </p>
            <p className="text-gray-700 mb-4">
              Propriae voluptaria dissentias nam ei, posse diceret inciderint cum ut, gubergren sadipscing ei vim. Ancillae torquatos in nec, impetus nostrum ea eos.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {values.map((value, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold text-lg mt-1">•</span>
                  <p className="text-gray-700 text-sm mt-2 leading-relaxed">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
