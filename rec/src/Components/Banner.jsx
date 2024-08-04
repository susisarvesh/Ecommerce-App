import  { useState, useEffect } from 'react';
import SideHero from './SideHero';

const Banner = () => {
  const images = [
    'https://images.unsplash.com/photo-1630931389243-2c78fdecd332?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1708110918897-ba34468dcedf?q=80&w=2146&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1507702553912-a15641e827c8?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1695575593603-1f42ca27bb6d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3300); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className=' '>
                <SideHero></SideHero>
            </div>
    <div className='grid grid-cols-1 lg:grid-cols-1 p-4'>
      <div className="relative w-full h-56 md:h-96 overflow-hidden">
        <div className="absolute inset-0 flex transition-transform duration-1000" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((src, index) => (
            <div key={index} className="flex-none w-full">
              <img className="h-auto max-w-full rounded-lg" src={src} alt={`Gallery image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
            </div>
            </div>
  );
};

export default Banner;
