import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../app/store";
import { addToCart } from "../features/ecommerce/ecommerceSlice";
import { useState } from "react";

function Product() {
  const [clicked, setClicked] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { productId } = useParams();
  const product = useSelector((state: RootState) =>
    state.products.products.find(
      (product) => Number(product.id) === Number(productId)
    )
  );

  console.log(product);
  
  const dispatch = useDispatch<AppDispatch>();
  const addToCartHandler = () => {
    dispatch(addToCart({productId, quantity}));
    setClicked(true);
  };

  if (!product)
    return (
      <div className="w-[50%] mx-auto mt-10 max-w-5xl">
          <div className="">
            <div className="bg-gray-200 animate-pulse w-full h-48 rounded mb-4" />
          </div>
          <div className="">
            <div className="bg-gray-200 animate-pulse w-full h-6 rounded mb-2" />
            <div className="bg-gray-200 animate-pulse w-full h-4 rounded mb-2" />
            <div className="bg-gray-200 animate-pulse w-1/2 h-5 rounded mb-4" />
            <div className="bg-gray-200 animate-pulse w-full h-10 rounded mb-4" />
            <div className="bg-gray-200 animate-pulse w-full h-10 rounded" />
          </div>
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto p-4 flex items-center border mt-10 shadow-2xl rounded-xl">
      <div className="w-[50%]">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-4"
      />
      </div>
      <div className="w-[50%]">
      <h2 className="text-xl font-bold mb-2">{product.title}</h2>
      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="text-lg font-semibold mb-4">${product.price}</p>

      <div className="mb-4">
        <label className="block mb-2" htmlFor="quantity">
          Qunaity:
        </label>
        <input
          className="border rounded p-2 w-full"
          type="number"
          value={quantity}
          min="1"
          id="quantity"
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
      </div>

      <div className="flex justify-between">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={addToCartHandler}
        >
          {clicked ? "Added to cart" : "Add to cart"}
        </button>
        </div>
        </div>
    </div>
  );
}

export default Product;
