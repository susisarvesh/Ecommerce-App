import { ShoppingBag } from 'lucide-react';
import { useContext, useState } from 'react';

import {CartContext} from '../CartProvider'

const mens = [
  {
    id: "1",
    name: "Armani Classic Suit",
    img: "https://media.gucci.com/dynamic/b3c8/Q9iEUbrnvQllkGFqkVbT143hmco4A3thMRRf5yd5AUoZ5zUoG7Oysrnj0JNXW4a4Uag_OuDU3AW0hL7bKQ_KhrzHr0sgzrGQBRpZT9VZHyCrp0CNYnn7NtyGofWlhWSbko9Dn_yiD1nNxgMBK8F8a+jfWSej1wMwSPtc_EmyNrCyHMWGhnkXXlic_ONMEs3_N8HaXCTjpHD9lMUG3u8GXBcoNGCqhuGtOpckrSjvRE+gE07Q3rDd_wFJtR17qGfDZSvx1sbOn3rLZwIA_wWXDJxObLEW3taKBP3F+Za7+o74WbDP6pADYK8eU48Nhe_M_E3mkjVqAVgGEIuZTv_m0w==/HP_Portrait_Gucci-Men-May24-1622-GUC-019H-0215-G-v4_001_Default.png",
    category: "men",
    type: "outfit",
    price: "1,200"
  },
  {
    id: "2",
    name: "Geniz Bag",
    img: "https://cdna.lystit.com/photos/mytheresa/764e8072/gucci-brown-B-Large-Leather-Shoulder-Bag.jpeg",
    category: "men",
    type: "bag",
    price: "850"
  },
  {
    id: "3",
    name: "Geniz's Denim Jacket",
    img: "https://wwd.com/wp-content/uploads/2023/06/gucci-mens-spring-2024-milan-005.jpg?w=800",
    category: "men",
    type: "outfit",
    price: "600"
  },
  {
    id: "4",
    name: "Ralph Lauren Polo Shirt",
    img: "https://assets.vogue.com/photos/648b68ce71c79dd56bfc4a03/master/w_1280%2Cc_limit/00001-gucci-spring-2024-menswear-credit-brand.jpg",
    category: "men",
    type: "outfit",
    price: "250"
  },
  {
    id: "5",
    name: "Geniz Spring Mash",
    img: "https://wwd.com/wp-content/uploads/2023/06/gucci-mens-spring-2024-milan-006.jpg?w=800",
    category: "men",
    type: "outfit",
    price: "700"
  },
  {
    id: "6",
    name: "Geniz Toso Bag",
    img: "https://www.flannels.com/images/products/71606003_h.jpg",
    category: "men",
    type: "bag",
    price: "950"
  },
  {
    id: "7",
    name: "Geniz Luxury Lust",
    img: "https://wwd.com/wp-content/uploads/2015/06/gucci-mens-s16-gg-032.jpg?w=684",
    category: "men",
    type: "outfit",
    price: "800"
  },
  {
    id: "8",
    name: "Geniz Rosas Vilk",
    img: "https://wwd.com/wp-content/uploads/2015/06/gucci-mens-s16-gg-052.jpg?w=684",
    category: "men",
    type: "outfit",
    price: "850"
  },
  {
    id: "9",
    name: "Geniz Summer Fit",
    img: "https://pauseonline.s3.amazonaws.com/wp-content/uploads/2015/09/GUC0343.jpg",
    category: "men",
    type: "outfit",
    price: "650"
  },
  {
    id: "10",
    name: "Greer Spring Mong",
    img: "https://assets.vogue.com/photos/5602abd41422670c16303aa3/master/w_1280%2Cc_limit/_GUC0031.jpg",
    category: "women",
    type: "outfit",
    price: "700"
  },
  {
    id: "11",
    name: "Brown Bear Suit",
    img: "https://i.pinimg.com/originals/d5/1e/24/d51e24dec23aa1d0dfc3cbfac60af743.jpg",
    category: "men",
    type: "outfit",
    price: "1,000"
  },
  {
    id: "12",
    name: "Freaks Pinkisz",
    img: "https://static01.nyt.com/images/2015/09/23/t-magazine/23tmag-dailybag/23tmag-dailybag-superJumbo.jpg",
    category: "women",
    type: "outfit",
    price: "550"
  },
  {
    id: "13",
    name: "Geniz Luxury Fit",
    img: "https://www.miamiamine.com/wp-content/uploads/2019/03/Fashion-blogger-gucci-tee-balmain-jacket.jpg",
    category: "women",
    type: "outfit",
    price: "800"
  },
  {
    id: "14",
    name: "Snow White Konb",
    img: "https://i.pinimg.com/474x/da/3a/09/da3a094efeb4136e353714acbb0693ef.jpg",
    category: "men",
    type: "outfit",
    price: "700"
  },
  {
    id: "15",
    name: "Geniz Black Toso",
    img: "https://assets.vogue.com/photos/650dc9ac1c0f63b75ff56b39/master/w_1280%2Cc_limit/00001-gucci-spring-2024-ready-to-wear-credit-gorunway.jpg",
    category: "women",
    type: "bag",
    price: "950"
  },
  {
    id: "16",
    name: "Geniz Luxury Lust",
    img: "https://i.pinimg.com/originals/0a/df/43/0adf43d1cb769dff3d278f7b3fc1e947.png",
    category: "women",
    type: "outfit",
    price: "750"
  },
  {
    id: "17",
    name: "Geniz Fernz Brownv",
    img: "https://www.alexandralapp.com/wp-content/uploads/2019/11/pfw_september_2019_day1-282-Copy.jpg",
    category: "women",
    type: "outfit",
    price: "600"
  },
  {
    id: "18",
    name: "Geniz Summer Fit",
    img: "https://i.pinimg.com/originals/d9/67/2e/d9672e0670c93317d79f2a6c8854a4bd.jpg",
    category: "women",
    type: "outfit",
    price: "650"
  }
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
}

shuffleArray(mens);






function General({search}) {
    const { addToCart } = useContext(CartContext);
    const filteredGeneral = mens.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()))
  return (
        <div className="grid grid-cols-1 p-2 md:grid-cols-2 lg:grid-cols-4">
      {filteredGeneral.length > 0 ? (
        filteredGeneral.map((men) => (
          <div
            className="m-1 flex justify-center items-center p-2 border border-gray-600 rounded-lg"
            key={men.id}
          >
            <div>
              <img
                src={men.img}
                className="w-[450px] h-[600px] object-cover rounded-lg"
                alt={men.name}
              />
               <div className="flex items-center justify-between">
                <p className="text-2xl p-2 ">{men.name}</p>
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
              <div className="flex justify-end items-end">
                <p className="text-xl p-2 bg-gray-400 m-1 text-white rounded-md">
                  {men.category}
                </p>
                <p className="text-xl p-2 bg-gray-400 m-1 text-white rounded-md">
                  {men.type}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-2xl">No items match your search.</p>
      )}
    </div>
    )
     
}

export default General