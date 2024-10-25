import { RootState } from "../../app/store";
import { useSelector } from "react-redux";
import { useNavigate, useNavigation, useParams } from "react-router"
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";


const Categories = () => {
    const { categorieName } = useParams();
    const { products, loading } = useSelector((state:RootState) => state.products)
    const filteredProducts = products.filter((product) =>
        product.category.replace(/'/g, '').toLowerCase() === categorieName.toLowerCase()   // 
      );
          
    console.log("filteredProducts", filteredProducts)
  return (
    loading ? (<div className="flex justify-center my-10">
      <ClipLoader color="#18da4e" /> 
      </div>) : (<>
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
      {filteredProducts.map((product) => (
        <li key={product.id} className="border p-4 rounded shadow-lg hover:scale-105 scroll-smooth transition-all duration-300">
          <Link to={`/product/${product.id}`}>
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain mb-2"
            />
            <h3 className="font-semibold">{product.title}</h3>
            <p>${product.price}</p>
          </Link>
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
  </>)

    
  )
}

export default Categories