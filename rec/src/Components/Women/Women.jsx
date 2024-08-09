import { ShoppingBag } from 'lucide-react';
import { useContext } from 'react';
import { CartContext } from '../CartProvider';

const womens = [
  {
    id: "1",
    name: "Greer Spring Mong",
    img: "https://assets.vogue.com/photos/5602abd41422670c16303aa3/master/w_1280%2Cc_limit/_GUC0031.jpg",
    category: "women",
    type: "outfit",
    price: 450
  },
  {
    id: "2",
    name: "Brown Bear Suit",
    img: "https://i.pinimg.com/originals/d5/1e/24/d51e24dec23aa1d0dfc3cbfac60af743.jpg",
    category: "men",
    type: "outfit",
    price: 350
  },
  {
    id: "3",
    name: "Freaks Pinkisz",
    img: "https://static01.nyt.com/images/2015/09/23/t-magazine/23tmag-dailybag/23tmag-dailybag-superJumbo.jpg",
    category: "women",
    type: "outfit",
    price: 250
  },
  {
    id: "4",
    name: "Geniz Luxury Fit",
    img: "https://www.miamiamine.com/wp-content/uploads/2019/03/Fashion-blogger-gucci-tee-balmain-jacket.jpg",
    category: "women",
    type: "outfit",
    price: 550
  },
  {
    id: "5",
    name: "Snow White Konb",
    img: "https://i.pinimg.com/474x/da/3a/09/da3a094efeb4136e353714acbb0693ef.jpg",
    category: "men",
    type: "outfit",
    price: 500
  },
  {
    id: "6",
    name: "Geniz Black Toso",
    img: "https://assets.vogue.com/photos/650dc9ac1c0f63b75ff56b39/master/w_1280%2Cc_limit/00001-gucci-spring-2024-ready-to-wear-credit-gorunway.jpg",
    category: "women",
    type: "bag",
    price: 500
  },
  {
    id: "7",
    name: "Geniz Luxury Lust",
    img: "https://i.pinimg.com/originals/0a/df/43/0adf43d1cb769dff3d278f7b3fc1e947.png",
    category: "women",
    type: "outfit",
    price: 290
  },
  {
    id: "8",
    name: "Geniz Fernz Brownv",
    img: "https://www.alexandralapp.com/wp-content/uploads/2019/11/pfw_september_2019_day1-282-Copy.jpg",
    category: "women",
    type: "outfit",
    price: 5000
  },
  {
    id: "9",
    name: "Geniz Summer Fit",
    img: "https://i.pinimg.com/originals/d9/67/2e/d9672e0670c93317d79f2a6c8854a4bd.jpg",
    category: "women",
    type: "outfit",
    price: 700
  }
];

function Women({ search }) {
  const { addToCart } = useContext(CartContext);

  const filteredWomens = womens.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 p-2 md:grid-cols-2 lg:grid-cols-4">
      {filteredWomens.length > 0 ? (
        filteredWomens.map((women) => (
          <div
            className="m-1 flex justify-center items-center p-2 border border-gray-600 rounded-lg"
            key={women.id}
          >
            <div>
              <img
                src={women.img}
                className="w-[450px] h-[600px] object-cover rounded-lg"
                alt={women.name}
              />
              <div className="flex items-center justify-between">
                <p className="text-2xl p-2 ">{women.name}</p>
                <ShoppingBag
                  className="cursor-pointer"
                  onClick={() => {
                    addToCart(women);
                  }}
                />
              </div>
              <div className="flex justify-end items-end">
                <p className="text-xl p-2 bg-gray-400 m-1 text-white rounded-md">
                  {women.category}
                </p>
                <p className="text-xl p-2 bg-gray-400 m-1 text-white rounded-md">
                  {women.type}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-2xl">No items match your search.</p>
      )}
    </div>
  );
}

export default Women;
