import React, { useContext } from 'react';
import { CartContext } from '../CartProvider';

function Cart() {
  const { data,removeFromCart } = useContext(CartContext);

  return (
    <div className='p-5'>
      {data.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <div className='flex justify-evenly flex-col items-center p-2 m-2 border border-gray-300 lg:flex-row'>
                <img src={item.img} alt={item.name} className ="w-auto object-cover lg:w-[100px]" />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>{item.type}</p>
               
                <button className='bg-red-500 p-2 rounded-lg text-white' onClick={()=> removeFromCart(item)}>Remove From Cart</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
