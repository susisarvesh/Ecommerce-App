import React, { useEffect, useRef } from 'react';

const images = [
  "https://plus.unsplash.com/premium_photo-1690407617686-d449aa2aad3c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1511111928333-046ec1d3bef6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHByZW1pdW0lMjBkcmVzcyUyMG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fHByZW1pdW0lMjBkcmVzcyUyMG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1719535219127-f6477ddd8bf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM3fHxwcmVtaXVtJTIwZHJlc3MlMjBtb2RlbHxlbnwwfDB8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1475431701177-8a80e7bf2c5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ3fHxwcmVtaXVtJTIwZHJlc3MlMjBtb2RlbHxlbnwwfDB8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1511980995225-25360cb0aa29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjkyfHxwcmVtaXVtJTIwZHJlc3MlMjBtb2RlbHxlbnwwfDB8MHx8fDA%3D"
];

const InfiniteCarousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        const maxScrollLeft = scrollWidth - clientWidth;
        carouselRef.current.scrollBy({
          left: scrollLeft >= maxScrollLeft ? -scrollLeft : clientWidth,
          behavior: 'smooth'
        });
      }
    }, 3000); // Adjust the speed (in milliseconds) here

    return () => clearInterval(scrollInterval);
  }, []);

    return (
      <div className='hidden lg:block'>
    <div className="overflow-hidden relative mt-10">
      <div
        ref={carouselRef}
        className="flex space-x-4 snap-x snap-mandatory whitespace-nowrap overflow-x-hidden"
      >
        {/* Duplicate images for infinite effect */}
        {[...images, ...images].map((src, index) => (
          <div key={index} className="snap-center flex-shrink-0">
            <img
              src={src}
              alt={`Slide ${index}`}
              className="object-cover w-full h-60 rounded-lg"
            />
          </div>
        ))}
      </div>
            </div>
            </div>
  );
};

export default InfiniteCarousel;
