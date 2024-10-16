import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../app/store";
import { addToCart } from "../features/ecommerce/ecommerceSlice";
import { useState } from "react";
import { BsFillCartFill } from "react-icons/bs";

function Product() {
  const [clicked, setClicked] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { productId } = useParams();
  const product = useSelector((state: RootState) =>
    state.products.products.find(
      (product) => Number(product.id) === Number(productId)
    )
  );
  
  const dispatch = useDispatch<AppDispatch>();
  const addToCartHandler = () => {
    dispatch(addToCart({productId, quantity}));
    setClicked(true);
  };

  if (!product)
    return (
      <div className="max-w-md mx-auto p-4">
        <div className="animate-pulse">
          <div className="h-48 bg-gray-300 mb-4"></div>
          <div className="h-6 bg-gray-300 mb-2"></div>
          <div className="h-4 bg-gray-300 mb-2"></div>
          <div className="h-4 bg-gray-300 mb-4 w-1/2"></div>
          <div className="flex justify-between">
            <div className="h-10 bg-gray-300 w-1/3 rounded"></div>
            <div className="h-10 bg-gray-300 w-1/3 rounded"></div>
          </div>
        </div>
      </div>
    );

  return (
    <div className="max-w-md mx-auto p-4">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-4"
      />
      <h2 className="text-xl font-bold mb-2">{product.title}</h2>
      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="text-lg font-semibold mb-4">${product.price}</p>

      <div className="mb-4">
        <label className="block mb-2" htmlFor="quantity">
          Qunaity:
        </label>
        <input
          className="border border rounded p-2 w-full"
          type="number"
          value={quantity}
          min="1"
          id="quantity"
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>

      <div className="flex justify-between">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={addToCartHandler}
        >
          {clicked ? "Added to cart" : "Add to cart"}
          <BsFillCartFill />
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default Product;
