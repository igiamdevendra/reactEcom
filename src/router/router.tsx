import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/Home";
import Product from "../pages/Product";
import CartItems from "../pages/CartItems";
import SearchResult from "../pages/SearchResult";
import Payment from "../pages/Payment";
import Categories from "../pages/categary/Categories";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/cart-items",
        element: <CartItems />,
      },
      {
        path: "/product/:productId",
        element: <Product />,
      },
      {
        path: "/categories/:categorieName",
        element: <Categories />
      },
      // {
      //   path: "/category/mens",
      //   element: <Mens />,
      // },
      // {
      //   path: "/category/jewelery",
      //   element: <Jewelery />,
      // },
      // {
      //   path: "/category/electronics",
      //   element: <Electronics />,
      // },
      // {
      //   path: "/category/women",
      //   element: <Women />,
      // },
      {
        path: "/search/:productName",
        element: <SearchResult />,
      },
      {
        path: "/payment",
        element: <Payment />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/signin",
        element: <Signin />
      }
    ],
  },
]);

export default router;
