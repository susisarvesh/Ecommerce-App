import React, { useState } from 'react';
import Mens from '../Mens/Mens';
import Navbar from '../Navbar';
import Women from "../Women/Women";
import General from '../General/General';

function Shop() {
  const [showMens, setShowMens] = useState(false);
  const [showWomens, setShowWomens] = useState(false);

  const handleMensChange = () => {
    setShowMens(prev => !prev);
  };

  const handleWomensChange = () => {
    setShowWomens(prev => !prev);
  };

  return (
    <div>
      <div className='p-4 bg-slate-50 flex flex-col justify-end'>
        <label htmlFor="mens" className=''>Mens
          <input
            type="checkbox"
            id="mens"
            name='mens'
            checked={showMens}
            onChange={handleMensChange}
          />
        </label>
        <label htmlFor="women" className=''>Womens
          <input
            type="checkbox"
            id="women"
            name='women'
            checked={showWomens}
            onChange={handleWomensChange}
          />
        </label>
      </div>
      {!showMens && !showWomens  ? (
       <General></General>
      ) :
        <>
         {showMens && <Mens />}
      {showWomens && <Women />}
        </>
        
        
      }
      {/* <Navbar></Navbar> */}
     
    
    </div>
  );
}

export default Shop;
