import React from 'react'
import Mens from '../Mens/Mens'
import { CartProvider } from '../CartProvider'
import Navbar from '../Navbar'
import Women from "../Women/Women"
function Shop() {
  return (
    <div>
        {/* <Navbar></Navbar> */}
      {/* <Mens></Mens> */}
      <Women></Women>
    </div>
  )
}

export default Shop