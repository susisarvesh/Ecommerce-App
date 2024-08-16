import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../CartProvider';

function Cart() {
  const { data, removeFromCart } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const [pay, setPay] = useState(false);

  useEffect(() => {
    const calculateTotal = () => {
      const totalAmount = data.reduce((acc, item) => parseInt(acc) + parseInt(item.price), 0);
      setTotal(totalAmount);
    };

    calculateTotal();
  }, [data]);

  const handlePay = () => {
    setPay((prev) => !prev);
  };

  return (
    <div className='p-5'>
      {data.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <div className='flex justify-evenly flex-col items-center p-2 m-2 border border-gray-300 lg:flex-row'>
                <img src={item.img} alt={item.name} className='w-auto object-cover lg:w-[100px]' />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>{item.type}</p>
                <p className='text-xl text-indigo-500 font-bold'>${item.price}</p>
                <button className='bg-red-500 p-2 rounded-lg text-white' onClick={() => removeFromCart(item)}>
                  Remove From Cart
                </button>
              </div>
            </li>
          ))}
          <div className='flex justify-between items-center'>
            <p>Total: <span className='text-2xl text-indigo-500 font-bold'>$ {total}</span></p>
            <button onClick={handlePay} className='p-2 bg-green-600 rounded-md text-white'>
              Pay & Checkout
            </button>
          </div>
          {pay && (
            <div className='mt-4 p-2 bg-green-200 text-green-800 rounded-md'>
              Paid
            </div>
          )}
        </ul>
      )}
    </div>
  );
}

export default Cart;
