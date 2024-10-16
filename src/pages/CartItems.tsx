import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../features/ecommerce/ecommerceSlice";

function CartItems() {
  const dispatch = useDispatch<AppDispatch>();

  const cartItemsIds: any = useSelector<RootState>(
    (state) => state.products.cart
  ); //[{productId: 1, quanity : 2}, {}]

  const products: any = useSelector<RootState>(
    (state) => state.products.products
  ); //[{item1},{item2},{item3}]

  let cartItems = cartItemsIds.map((item) => {
    const product = products.find((product) => product.id == item.productId);
    if (product) {
      return { ...product, quantity: item.quantity };
    }
    return null;
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
          <span className="text-xl font-bold">Total Price:</span>
          <span className="ml-2 text-xl font-bold">
            ${totalPrice.toFixed(2)}
          </span>{" "}
        </div>
      )}
    </>
  );
}

export default CartItems;

//cartItemsIds.map((item) => cartItmes.push(products.find((product) => item === product.id)))
