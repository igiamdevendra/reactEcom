import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/Home";
import Product from "../pages/Product";
import CartItems from "../pages/CartItems";
// import Mens from "../pages/categary/Mens";
import Jewelery from "../pages/categary/Jewellery";
import Electronics from "../pages/categary/Electronics";
import Women from "../pages/categary/Women";
import Mens from "../pages/categary/Mens";
import SearchResult from "../pages/SearchResult";

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
        path: "/category/mens",
        element: <Mens />,
      },
      {
        path: "/category/jewelery",
        element: <Jewelery />,
      },
      {
        path: "/category/electronics",
        element: <Electronics />,
      },
      {
        path: "/category/women",
        element: <Women />,
      },
      {
        path: "/search/:productName",
        element: <SearchResult />,
      },
    ],
  },
]);

export default router;
