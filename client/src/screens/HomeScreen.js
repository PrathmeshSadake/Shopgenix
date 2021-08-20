import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner";

const HomeScreen = () => {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    axios
      .get("/api/products/getallproducts")
      .then((res) => {
        setproducts(res.data.products);
      })
      .catch((err) => console.error(err));
  }, [products]);
  return (
    <div className="p-8 max-w-screen-xl mx-auto">
      {products.length > 0 ? (
        <div className="px-4 flex flex-col md:grid md:grid-cols-2 md:gap-4 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default HomeScreen;
