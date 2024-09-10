import { Link } from "react-router-dom";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useProductStore } from "../store/product";
import { toast } from "react-hot-toast";  // Import toast

const Create = ({ isDarkMode }) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);

    if (success) {
      toast.success(message, {
        duration: 4000,
        position: "top-center",
      });
    } else {
      toast.error(message, {
        duration: 4000,
        position: "top-center",
      });
    }

    // Optionally reset the form after submission
    setNewProduct({ name: "", price: "", image: "" });
  };

  return (
    <section
      className={`w-full h-screen relative flex flex-col items-center justify-between pt-10 text-lg ${
        isDarkMode ? "bg-white text-black" : "bg-blue-950 text-white"
      }`}
    >
      <div className="container mx-auto relative z-5 p-6 flex flex-col justify-center items-center my-auto">
        <div className="p-2 flex items-center">
          <Link to={"/"}>
            <FaArrowLeft size={30} />
          </Link>
          <h1 className="text-3xl uppercase text-blue-700 font-bold ml-10">
            Create Product
          </h1>
        </div>
        <div className="mt-5 border-2 border-emerald-400 p-4 rounded-lg w-2/4 h-auto">
          <input
            type="text"
            placeholder="Name of Product"
            name="name"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            className="p-2 w-full border-2 border-slate-500 bg-slate-600 text-slate-300 rounded-lg"
          />
          <input
            type="Number"
            placeholder="Price of Product GH₵"
            name="price"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
            className="p-2 w-full border-2 border-slate-500 bg-slate-600 text-slate-300 rounded-lg my-4"
          />
          <input
            placeholder="IMAGE URL"
            name="image"
            value={newProduct.image}
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
            className="p-2 w-full border-2 border-slate-500 bg-slate-600 text-slate-300 rounded-lg"
          />
          <button
            className="mt-4 p-2 w-full border-2 font-bold border-slate-500 bg-slate-200 hover:bg-blue-700 hover:font-bold hover:text-slate-300 text-slate-800 rounded-lg"
            onClick={handleAddProduct}
          >
            Add Product
          </button>
        </div>
      </div>
    </section>
  );
};

export default Create;
