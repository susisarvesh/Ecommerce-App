import { useRef, useState, useEffect } from 'react';

function Upload() {
  const name = useRef(null);
  const category = useRef(null);
  const price = useRef(null);
  const image = useRef(null);
  const id = useRef(null);
  const desc = useRef(null);

  const [product, setProduct] = useState({
    id: "",
    name: "",
    category: "",
    price: 0,
    desc: "",
    image: ""
  });

  const [value, setValue] = useState([]);

  // Load products from local storage on component mount
  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setValue(savedProducts);
  }, []);

  const handleArray = (newProduct) => {
    const updatedProducts = [...value, newProduct];
    setValue(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: id.current.value,
      name: name.current.value,
      category: category.current.value,
      price: parseFloat(price.current.value),
      desc: desc.current.value,
      image: image.current.value
    };
    setProduct(newProduct);
    handleArray(newProduct); // Save to array and local storage
    console.log("Product submitted:", newProduct);
  };

  return (
    <div>
      <div className="flex justify-center items-center h-[90vh] p-5">
        <form onSubmit={handleSubmit} className="p-10 h-[90%] flex flex-col justify-evenly items-center lg:items-start lg:text-2xl bg-indigo-500 text-white rounded-lg">
          <div className="form-group flex flex-col items-center lg:flex-row">
            <label htmlFor="productName">Name of Product</label>
            <input
              type="text"
              id="productName"
              placeholder="Name of Product"
              required
              className="input-field ml-5 p-1"
              ref={name}
            />
          </div>

          <div className="form-group flex flex-col items-center lg:flex-row">
            <label htmlFor="productCategory">Category of Product</label>
            <input
              type="text"
              id="productCategory"
              placeholder="Category of Product"
              required
              className="input-field ml-5 p-1"
              ref={category}
            />
          </div>

          <div className="form-group flex flex-col items-center lg:flex-row">
            <label htmlFor="productId">Product Unique Id</label>
            <input
              type="text"
              id="productId"
              placeholder="Give Product Unique Id"
              required
              className="input-field ml-5 p-1"
              ref={id}
            />
          </div>

          <div className="form-group flex flex-col items-center lg:flex-row">
            <label htmlFor="productPrice">Price of Product</label>
            <input
              type="number"
              id="productPrice"
              placeholder="Price of Product"
              required
              className="input-field ml-5 p-1"
              ref={price}
            />
          </div>

          <div className="form-group flex flex-col items-center lg:flex-row">
            <label htmlFor="productDescription">Description of Product</label>
            <input
              type="text"
              id="productDescription"
              placeholder="Description of product"
              className="textarea-field ml-5 p-1"
              ref={desc}
            />
          </div>

          <div className="form-group flex flex-col items-center lg:flex-row">
            <label htmlFor="productImage">CDN Image URL</label>
            <input
              type="text"
              id="productImage"
              placeholder="CDN image of product"
              className="input-field ml-5 p-1"
              ref={image}
            />
          </div>

          <button type="submit" className="submit-button mt-5 p-2">
            Submit
          </button>
        </form>
      </div>
      { 
        value.map((ele) => (
          <div key={ele.id} className="product-item">
            <p>{ele.name}</p>
            <p>{ele.category}</p>
            <p>{ele.price}</p>
            <p>{ele.desc}</p>
            <img src={ele.image} alt={ele.name} />
          </div>
        ))
      }
    </div>
  );
}

export default Upload;
