import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const Home: React.FC = () => {
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );
  const [search, setSearch] = useState<string>("");
  const navigation = useNavigate();
  const [apiFetched, setApiFetched] = useState(false)

  function formHandler(e: React.FormEvent) {
    e.preventDefault();
    if (search == "") {
      alert("type something to search");
    } else {
      navigation(`/search/${search}`);
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center my-10">
      <ClipLoader color="#18da4e" /> 
      </div>
    );
  }

  if (error) {
    return (<p className="text-center text-red-600">Error: {error}</p>);
  }

  return (
    <div className="p-4 poppins-black">
      <form onSubmit={formHandler} className="flex items-center w-full max-w-lg mx-auto my-4 bg-white shadow-lg rounded-lg overflow-hidden">
  <input
    type="text"
    placeholder="Search product"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="flex-grow border-none outline-none px-4 py-2 rounded-l-lg focus:ring-2 focus:ring-sky-500 transition duration-200"
  />
  <button
    type="submit"
    className="bg-sky-600 border-none py-2 px-6 rounded-r-lg text-white font-semibold transition-colors duration-200 hover:bg-sky-700"
  >
    Search
  </button>
</form>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-">
        {products.map((product) => (
          <li key={product.id} className="border p-4 rounded-md shadow-lg hover:scale-105 scroll-smooth transition-all duration-300">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain mb-2"
              />
              <h3>{product.title}</h3>
              <span className="text-xl font-semibold">${product.price}</span> <span className="text-green-600 font-bold ml-2">{Math.floor(Math.random()*40)}% off</span>
            <div className="flex justify-between mt-2">
              <Link to={`/product/${product.id}`}>
                <button className="bg-blue-500 text-white py-1 px-2 rounded">
                  View Product
                </button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}  
  

export default Home;
