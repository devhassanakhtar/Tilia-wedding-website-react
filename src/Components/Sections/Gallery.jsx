import React from "react";
import { ChevronRight } from "lucide-react";
import gal1 from "../../assets/gal-1-masonry.jpg";
import gal4 from "../../assets/gal-4-masonry.jpg";
import gal7 from "../../assets/gal-7-masonry.jpg";

const Gallery = () => {
  const galleryContent = [
    { img: gal1, heading: "Tracy & Aaron", description: "Wedding" },
    { img: gal4, heading: "Jane & Paul", description: "Wedding" },
    { img: gal7, heading: "Diana & Max", description: "Wedding" },
    { img: gal1, heading: "Angela & Zach", description: "Wedding" },
    { img: gal4, heading: "Tina & Robi", description: "Wedding" },
    { img: gal7, heading: "Clara & Andrew", description: "Wedding" },
    { img: gal1, heading: "Street People", description: "Portrait" },
    { img: gal4, heading: "Ballet Dancers", description: "Portrait" },
    { img: gal7, heading: "Black & White", description: "Portrait" },
    { img: gal1, heading: "Studio Photos", description: "Editorial" },
    { img: gal7, heading: "Black & White", description: "Portrait" },
  ];

  return (
    <div id="gallery" className="min-h-screen max-w-7xl mx-auto px-4 py-20">
      {/* Top Content  */}
      <div className="flex justify-between items-start mb-12">
        <div className="lg:pr-12 w-1/2">
          <h4 className="text-teal-600 border-b-2 w-max pb-2 font-semibold text-sm">
            Our Gallery
          </h4>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl py-6 leading-tight">
            Selected Work
          </h1>
        </div>
        <div className="flex items-center">
          <button className="flex text-white items-center justify-center px-5 py-3 bg-teal-600 rounded-lg hover:bg-teal-700 transition">
            View All Work <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Masonry Gallery Grid */}
      
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {galleryContent.map((gallery, idx) => {
          return (
            <div key={idx} className="group cursor-pointer break-inside-avoid">
              <div className="relative overflow-hidden rounded-lg mb-3">
                <img 
                  src={gallery.img} 
                  alt={gallery.heading}
                  className="w-full h-auto object-cover group-hover:scale-110 transition duration-300"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition duration-300"></div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-800">{gallery.heading}</h3>
                <p className="text-xs text-gray-600">{gallery.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;