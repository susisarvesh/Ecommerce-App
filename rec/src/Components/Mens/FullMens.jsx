import { ShoppingBag } from 'lucide-react';
import { useContext, useState } from 'react';

import {CartContext} from '../CartProvider'
// const mens = [{
//     name: "Gucci Men Flex",
//     img: "https://media.gucci.com/dynamic/b3c8/Q9iEUbrnvQllkGFqkVbT143hmco4A3thMRRf5yd5AUoZ5zUoG7Oysrnj0JNXW4a4Uag_OuDU3AW0hL7bKQ_KhrzHr0sgzrGQBRpZT9VZHyCrp0CNYnn7NtyGofWlhWSbko9Dn_yiD1nNxgMBK8F8a+jfWSej1wMwSPtc_EmyNrCyHMWGhnkXXlic_ONMEs3_N8HaXCTjpHD9lMUG3u8GXBcoNGCqhuGtOpckrSjvRE+gE07Q3rDd_wFJtR17qGfDZSvx1sbOn3rLZwIA_wWXDJxObLEW3taKBP3F+Za7+o74WbDP6pADYK8eU48Nhe_M_E3mkjVqAVgGEIuZTv_m0w==/HP_Portrait_Gucci-Men-May24-1622-GUC-019H-0215-G-v4_001_Default.png",
//     category: "men",
//     type:"outfit"
// }]
const mens = [
  {
    id: "1",
    name: "Armani Classic Suit",
    img: "https://media.gucci.com/dynamic/b3c8/Q9iEUbrnvQllkGFqkVbT143hmco4A3thMRRf5yd5AUoZ5zUoG7Oysrnj0JNXW4a4Uag_OuDU3AW0hL7bKQ_KhrzHr0sgzrGQBRpZT9VZHyCrp0CNYnn7NtyGofWlhWSbko9Dn_yiD1nNxgMBK8F8a+jfWSej1wMwSPtc_EmyNrCyHMWGhnkXXlic_ONMEs3_N8HaXCTjpHD9lMUG3u8GXBcoNGCqhuGtOpckrSjvRE+gE07Q3rDd_wFJtR17qGfDZSvx1sbOn3rLZwIA_wWXDJxObLEW3taKBP3F+Za7+o74WbDP6pADYK8eU48Nhe_M_E3mkjVqAVgGEIuZTv_m0w==/HP_Portrait_Gucci-Men-May24-1622-GUC-019H-0215-G-v4_001_Default.png",
    category: "men",
    type: "outfit",
    price: 450
  },
  {
    id: "2",
    name: "Geniz Bag",
    img: "https://cdna.lystit.com/photos/mytheresa/764e8072/gucci-brown-B-Large-Leather-Shoulder-Bag.jpeg",
    category: "men",
    type: "bag",
    price: 320
  },
  {
    id: "3",
    name: "Geniz's Denim Jacket",
    img: "https://wwd.com/wp-content/uploads/2023/06/gucci-mens-spring-2024-milan-005.jpg?w=800",
    category: "men",
    type: "outfit",
    price: 380
  },
  {
    id: "4",
    name: "Ralph Lauren Polo Shirt",
    img: "https://assets.vogue.com/photos/648b68ce71c79dd56bfc4a03/master/w_1280%2Cc_limit/00001-gucci-spring-2024-menswear-credit-brand.jpg",
    category: "men",
    type: "outfit",
    price: 180
  },
  {
    id: "5",
    name: "Geniz Spring Mash",
    img: "https://wwd.com/wp-content/uploads/2023/06/gucci-mens-spring-2024-milan-006.jpg?w=800",
    category: "men",
    type: "outfit",
    price: 290
  },
  {
    id: "6",
    name: "Geniz Toso Bag",
    img: "https://www.flannels.com/images/products/71606003_h.jpg",
    category: "men",
    type: "bag",
    price: 450
  },
  {
    id: "7",
    name: "Geniz Luxury Lust",
    img: "https://wwd.com/wp-content/uploads/2015/06/gucci-mens-s16-gg-032.jpg?w=684",
    category: "men",
    type: "outfit",
    price: 700
  },
  {
    id: "8",
    name: "Geniz Rosas Vilk",
    img: "https://wwd.com/wp-content/uploads/2015/06/gucci-mens-s16-gg-052.jpg?w=684",
    category: "men",
    type: "outfit",
    price: 520
  },
  {
    id: "9",
    name: "Geniz Summer Fit",
    img: "https://pauseonline.s3.amazonaws.com/wp-content/uploads/2015/09/GUC0343.jpg",
    category: "men",
    type: "outfit",
    price: 360
  }
];





function FullMens() {
    const { addToCart } = useContext(CartContext);

    return (<>
      <div className="grid grid-cols-1 p-2 md:grid-cols-2 lg:grid-cols-4">
          { 
              mens.map((men, index) => (
                  <>
                      <div className=' m-1 flex justify-center items-center p-2 border border-gray-600 rounded-lg' key={index}>
                          <div >
                          <img src={men.img} className='w-[450px] h-[600px] object-cover rounded-lg' alt="" />
                          <div className='flex items-center justify-between'>
                                  <p className='text-2xl p-2 '>{men.name}</p>
                       <div className='flex justify-between items-center '>
                 <p className='text-xl text-indigo-500 font-bold mr-2'>${men.price}</p>
                <ShoppingBag
                  className="cursor-pointer"
                  onClick={() => {
                    addToCart(men);
                  }}
                  
                  />
                  </div>
                              </div>
                              <div className='flex justify-end items-end '>
                                      <p className='text-xl p-2 bg-gray-400 m-1 text-white rounded-md'>{men.category}</p>
                                      <p className='text-xl p-2 bg-gray-400 m-1 text-white rounded-md '>{men.type}</p>
                                      </div>
                              </div>
                      </div>
                  
                  </>
              ))
          }
    </div>
 </> )
}

export default FullMens