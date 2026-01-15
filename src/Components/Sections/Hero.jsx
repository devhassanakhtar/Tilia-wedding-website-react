import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // hero slides images
  const slides = [
    {
      id: 1,
      image: 'https://sarahhinckleyphotography.com/wp-content/uploads/sites/13575/2022/10/Tips-for-Making-Your-Family-Photo-List-on-your-wedding-day-Raleigh-Wedding-Photographer-Sarah-Hinckley-Photography-_0003.jpg',
      title: 'Wedding Photography',
      subtitle: 'Ancillae torquatos in nec, impetus nostrum ea eos.',
      category: 'Photography'
    },
    {
      id: 2,
      image: 'https://www.printique.com/wp-content/uploads/2019/06/wedding-poses-3.jpg',
      title: 'Your Perfect Day',
      subtitle: 'Capturing memories that last a lifetime.',
      category: 'Events'
    },
    {
      id: 3,
      image: 'https://media.istockphoto.com/id/1399000012/photo/guests-throwing-confetti-over-bride-and-groom-as-they-walk-past-after-their-wedding-ceremony.jpg?s=612x612&w=0&k=20&c=_KRu-9eoSqH8yazsoIDYy15NEzSOTTJQRJ0I7IJTMGA=',
      title: 'Elegant Moments',
      subtitle: 'Creating timeless wedding experiences.',
      category: 'Celebration'
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id='home' className="relative w-full h-screen overflow-hidden">
      {/* Carousel Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
          <div className="max-w-2xl px-4">
            <p className="text-sm tracking-widest uppercase mb-4 opacity-90">
              {slides[currentSlide].category}
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              {slides[currentSlide].subtitle}
            </p>
            <button className="inline-flex items-center gap-2 bg-white text-gray-800 px-6 py-3 rounded hover:bg-gray-100 transition-colors font-semibold">
              Find More <ArrowRight size={20}/>
            </button>
          </div>
        </div>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-2 md:p-3 rounded-full transition-colors"
        >
          <ChevronLeft className="w-5 h-5 md:w-8 md:h-8" />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-2 md:p-3 rounded-full transition-colors"
        >
          <ChevronRight className="w-5 h-5 md:w-8 md:h-8" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero
