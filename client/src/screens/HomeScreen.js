import React from "react";
import ProductCard from "../components/ProductCard";
import products from "../products";

const HomeScreen = () => {
  return (
    <div className="p-8 max-w-screen-xl mx-auto">
      <div class="px-4 flex flex-col md:grid md:grid-cols-2 md:gap-4 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
