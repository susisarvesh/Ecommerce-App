import React, { useState } from 'react';
import Mens from '../Mens/Mens';
import Navbar from '../Navbar';
import Women from "../Women/Women";
import General from '../General/General';

function Shop() {
  const [showMens, setShowMens] = useState(false);
  const [showWomens, setShowWomens] = useState(false);
   const [value,setValue] = useState("")
  const handleMensChange = () => {
    setShowMens(prev => !prev);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleWomensChange = () => {
    setShowWomens(prev => !prev);
  };

  return (
    <div>
      <div className='p-4 bg-slate-50 flex justify-end items-center'>
        <div className=' w-full flex flex-col justify-start lg:flex-row justify-evenly items-center'>
        <label htmlFor="mens" className=''>Mens
          <input
            type="checkbox"
            id="mens"
            name='mens'
            checked={showMens}
            onChange={handleMensChange}
            className='ml-2'
          />
        </label>
        <label htmlFor="women" className=''>Womens
          <input
            type="checkbox"
            id="women"
            name='women'
            checked={showWomens}
             className='ml-2'

            onChange={handleWomensChange}
          />
          </label>
      <div>
          <input type="text" placeholder='Search' value={value} className='bg-white p-2 outline-none rounded-lg' onChange={handleChange} />
          <button className='p-2 bg-indigo-500 text-white '>Search</button>
         </div>
        </div>
      </div>
      {!showMens && !showWomens  ? (
       <General search={value}></General>
      ) :
        <>
          {showMens && <Mens search={value} />}
      {showWomens && <Women search={value} />}
        </>
        
        
      }
      {/* <Navbar></Navbar> */}
     
    
    </div>
  );
}

export default Shop;
