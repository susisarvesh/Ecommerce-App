import React, { createContext, useState } from 'react';

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState(0);
  const [data, setData] = useState([]);

  const addToCart = (men) => {
    setCart((prev) => prev + 1);
    setData((prev) => [...prev, men]);
  };

  const removeFromCart = (itemToRemove) => {
    setData((prev) => {
      // Find the index of the first matching item
      const index = prev.findIndex(item => item === itemToRemove);
      if (index !== -1) {
        // Create a new array without the item at the found index
        const newData = [...prev];
        newData.splice(index, 1);
        return newData;
      }
      return prev; // If item not found, return previous state
    });
    setCart((prev) => prev - 1); // Update the cart count
  };

  return (
    <CartContext.Provider value={{ cart, data, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext };
