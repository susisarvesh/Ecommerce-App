import React from 'react';
import { Link } from 'react-router-dom';

const ShopClick = () => {
  return (
    <div className="relative h-screen m-3 rounded-lg bg-black text-center text-white lg:m-10 lg:rounded-xl ">
      <img
        src="https://www.rollingstone.com/wp-content/uploads/2022/09/Screen-Shot-2022-09-06-at-12.00.07-PM.jpg?w=1525&h=1054&crop=1" // Replace with your image URL
        alt="Air Jordan Collection"
        className="absolute inset-0 object-cover w-full h-full opacity-70 rounded-xl "
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white">
          GENZIX COLLECTION     
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
           Where luxury meets versatility. Explore our collection for day to night fashion that speaks sophistication. Start shopping for your new look!
        </p>
        <div className="mt-8 flex space-x-4">
          <Link to="/mens" className="px-6 py-3 bg-neon-yellow text-white font-semibold rounded-lg hover:bg-neon-yellow-light">
            Shop Men's
          </Link>
          <Link to='/womens' className="px-6 py-3 bg-neon-yellow text-white font-semibold rounded-lg hover:bg-neon-yellow-light">
            Shop Women's
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopClick;
