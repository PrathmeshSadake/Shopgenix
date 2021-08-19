import React from "react";
import products from "../products";

const HomeScreen = () => {
  return (
    <div className="px-8 max-w-screen-xl mx-auto">
      <div class="px-4 flex flex-col md:grid md:grid-cols-2 md:gap-6 xl:grid-cols-3">
        {products.map((product) => (
          <h1>{product.name}</h1>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
