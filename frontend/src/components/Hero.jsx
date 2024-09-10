import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard"; // Import the ProductCard component

const Hero = ({ isDarkMode }) => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log("products", products);

  return (
    <section
      className={`w-full min-h-screen relative flex flex-col items-center justify-between pt-10 text-lg ${
        isDarkMode ? "bg-white text-black" : "bg-blue-950 text-white"
      }`}
    >
      <div className="container mx-auto relative z-5 p-6 flex flex-col justify-center items-center my-auto">
        <h1 className="text-3xl uppercase text-blue-700 font-bold">
          Product Store
        </h1>
        <h2 className="text-xl text-blue-700 font-bold mt-2"> 
          Current Products 👍
        </h2>

        {/* Card Section */}
        {products.length > 0 ? (
          <div className="w-full  mt-4 bg-slate-500 rounded-xl p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-slate-200">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-sm md:text-md text-slate-500 flex items-center mt-4">
            <h3>No products found 😓</h3>
            <Link
              to={"/create"}
              className="text-blue-700 text-sm md:text-md hover:underline ml-2"
            >
              Create a Product
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
