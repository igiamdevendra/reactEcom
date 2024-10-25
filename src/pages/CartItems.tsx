import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { useDispatch } from "react-redux";
import { Product, removeFromCart } from "../features/ecommerce/ecommerceSlice";
import { Link } from "react-router-dom";

interface CartItemsIds {
  productId : number;
  quantity: number;
}

interface cartItems{
  quantity: number;
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

function CartItems() {
  const dispatch = useDispatch<AppDispatch>();

  const cartItemsIds: CartItemsIds[]  = useSelector(
    (state: RootState) => state.products.cart              //[{productId: 1, quantity: 2}, {productId: 2, quantity: 1}]
  ); 

  const products: Product[] = useSelector(
    (state: RootState) => state.products.products
  );  

  let cartItems : cartItems[]  = cartItemsIds.map((item) => {
    const product = products.find((product) => product.id == item.productId);
    if (product) {
      return { ...product, quantity: item.quantity };
    }
  });

  const totalPrice = cartItems.reduce((total: number, item: any) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
              <img src={item.image} className="h-10" alt="" />
                <span className="font-medium">{item.title}</span>
                <span>Quantity : {item.quantity}</span>
                <span className="text-gray-600">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
                <span className="bg-blue-500 px-2 py-1 rounded text-white">
                  <button onClick={() => dispatch(removeFromCart(item.id))}>
                    Remove
                  </button>
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
      {cartItems.length > 0 && (
  <div className="p-4 flex justify-end">
    <span className="text-xl font-bold border-2 rounded-md border-green-600 p-4">Total Price:
    <span className="ml-2 text-xl font-bold">
      ${totalPrice.toFixed(2)}
    </span></span>
    <div className="mt-5 mx-auto">
  <Link to="/payment" className="block">
    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
      Pay Now ${totalPrice.toFixed(2)}
    </button>
  </Link>
</div>
  </div>
)}

    </>
  );
}

export default CartItems;

//cartItemsIds.map((item) => cartItmes.push(products.find((product) => item === product.id)))
