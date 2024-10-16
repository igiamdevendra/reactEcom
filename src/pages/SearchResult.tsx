import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/ecommerce/ecommerceSlice";
import { AppDispatch, RootState } from "../app/store";
import { Link } from "react-router-dom";

const SearchResult: React.FC = () => {
  const { productName } = useParams<{ productName: string }>(); // mens
  const dispatch: AppDispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-600">Error: {error}</p>;
  }

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(productName.toLowerCase())
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Search Results for: {productName}</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <li key={product.id} className="border p-4 rounded shadow">
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-contain mb-2"
                />
                <h3 className="font-semibold">{product.title}</h3>
                <p>${product.price}</p>
              </Link>
            </li>
          ))
        ) : (
          <p>No products found for "{productName}"</p>
        )}
      </ul>
    </div>
  );
};

export default SearchResult;
