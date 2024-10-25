import { BsFillCartFill } from "react-icons/bs";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { IoMdMenu } from "react-icons/io";

const Navbar: React.FC = () => {
  const cartItems: number[] = useSelector(
    (state: RootState) => state.products.cart
  );

  return (
    <nav className="bg-[#958936] w-full h-16 flex justify-between items-center px-4 shadow-lg poppins-black">
      <Link to="/">
        <h1 className="text-white text-2xl font-bold">E-commerce</h1>
      </Link>
      <ul className="hidden md:flex text-white gap-5">
        <li>
          <Link to="categories/mens clothing" className="hover:underline">Men's</Link>
        </li>
        <li>
          <Link to="categories/jewelery" className="hover:underline">Jewelery</Link>
        </li>
        <li>
          <Link to="categories/electronics" className="hover:underline">Electronics</Link>
        </li>
        <li>
          <Link to="categories/womens clothing" className="hover:underline">Women's</Link>
        </li>
      </ul>
      <div className="flex gap-6 -mr-44 text-white">
        <Link to="/signup">Sign up</Link>
        <Link to="/signin">Sign in</Link>
      </div>
      <Link
        to="/cart-items"
        className="hidden relative md:flex items-center justify-center h-10 w-10 bg-white rounded-full shadow-md transition-transform transform hover:scale-110">
        <BsFillCartFill className="text-lg" />
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
            {cartItems.length}
          </span>
        )}
      </Link>
      <div className="text-3xl md:hidden text-white"><IoMdMenu /></div>
    </nav>
  );
};

export default Navbar;
